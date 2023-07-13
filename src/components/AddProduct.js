import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AddProduct = ()=>{
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");
    const [error,setError]= React.useState(false);
    
    const navigate = useNavigate();

    const addProduct= async ()=>{

            if(!name || !price || !category || !company){
                setError(true);
                return false ;
            }

        //console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('users'))._id;
        let result = await fetch("http://localhost:5000/add-Product", {
            method : 'post',
            body : JSON.stringify({name, price, category,company,userId}),
            headers : {
                'Content-Type': 'application/json',
                authorization: JSON.parse(localStorage.getItem("token"))
            }
        });
        result = await result.json();
        navigate('/');
        console.log(result);
    }

    return (
        <div className='product'>
            <h1>Add product</h1>
            <input className='inputBox' type='text'  placeholder='Enter product name' valur={name} onChange={(e)=>setName(e.target.value)} />
            { error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input className='inputBox' type='text'  placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)} />
            {  error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input className='inputBox' type='text'  placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)} />
            { error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input className='inputBox' type='text'  placeholder='Enter product company' value={company} onChange={(e)=>setCompany(e.target.value)} />
            { error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button onClick={ addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct ;