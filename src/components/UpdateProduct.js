import React, { useEffect, } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';


const UpdateProduct = ()=>{
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
    const params = useParams();
    const navigate= useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails= async ()=>{
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        headers: {
            authorization: JSON.parse(localStorage.getItem("token"))
          }
    });
        result= await result.json();
        console.log(result); 
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct= async ()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'Put',
            body: JSON.stringify({name,price, category,company}),
            headers : {
                'Content-Type': "application/json",
                authorization: JSON.parse(localStorage.getItem("token"))
            }
        });
        result=  await result.json();
        navigate('/');
        console.log(result);
    }

    return (
        <div className='product'>
            <h1>Update product</h1>
            <input className='inputBox' type='text'  placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input className='inputBox' type='text'  placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input className='inputBox' type='text'  placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)} />
            <input className='inputBox' type='text'  placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)} />
            <button onClick={ updateProduct} className='appButton'>Update Product</button>
        </div>
    )
}

export default UpdateProduct ;