import axios from 'axios';
import {useState,useEffect} from 'react'
import './App.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';


function App() {
  const [products,setProducts]=useState([])
  const [newProduct, setNewProduct]=useState({
    productName:"",
    productPrice:"",
    productDescription:"",
    productImage:""
  })
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/getdata`)
    .then(res=>setProducts(res.data))
  })
  function handleChange(e){
    setNewProduct({
    ...newProduct,[e.target.name]:e.target.value
    })
  }
  function handleSubmit(){
    axios.post(`${process.env.REACT_APP_URL}/create`,newProduct)
    .then(res=>console.log(res.data))
  }
  return (
    <div className="App">
      <br/>
      <form onSubmit={handleSubmit}>
         <TextField 
          id="outlined-basic"  
          variant="outlined"
          placeholder='Enter product name'
          onChange={handleChange}
          name="productName"
          value={newProduct.productName} />
        <TextField 
          id="outlined-basic"  
          variant="outlined"
          placeholder='Enter product price'
          onChange={handleChange}
          name="productPrice"
          value={newProduct.productPrice} />
        <TextField 
          id="outlined-basic"  
          variant="outlined"
          placeholder='Enter product Description'
          onChange={handleChange}
          name="productDescription"
          value={newProduct.productDescription} />
        <TextField 
          id="outlined-basic"  
          variant="outlined"
          placeholder='Enter product Image URL'
          onChange={handleChange}
          name="productImage"
          value={newProduct.productImage} />
        <button className="submitbutton">Submit</button>
      </form>

      {
        products.map((product)=>(
          <div key={product._id} className="divproducts">
            <p className="pfields">Name:{product.productName}</p>
            <p className="pfields">Price:{product.productPrice}</p>
            <p className="pfields">Description:{product.productDescription}</p>
            <img src={product.productImage} alt={product.productName} className="images"/>
          </div>
        ))
      }
     <br/><br/>
    </div>
  );
}

export default App;




    
