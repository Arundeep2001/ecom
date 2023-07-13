import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    getProducts();
  }, []);



  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    });
    result = await result.json();
    setProducts(result);
    //console.log(result);
  }

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
      headers: {
        authorization: JSON.parse(localStorage.getItem("token"))
      }
    });
    result = result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem("token"))
        }
      });
      result = await result.json();
      console.log(result);
      if (result) {
        setProducts(result);
      } else {
        console.log("Not found");
      }
    } else {
      getProducts();
    }

  }


  return (
    <div className='product-list'>
      <h1>Product List</h1>
      <input type="text" placeholder='Search Product' className='search-product-box' onChange={searchHandle} />
      <ul>
        <li>S.No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {
        products.length > 0 ? products.map((item, index) =>
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>DELETE</button>
              <Link to={"/update/" + item._id}>Update</Link>
            </li>
          </ul>
        )
          : <h1>No result found</h1>
      }
    </div>
  )
}

export default ProductList;