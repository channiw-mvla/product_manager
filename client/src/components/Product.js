import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Product = ({products,setProducts}) => {
  const {id} = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/api/products/"+id)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  }, [])
  const deleteProduct = () =>{
    axios.delete('http://localhost:8000/api/products/'+id)
    .then(setProducts(products.filter(product=> product._id !== id)))
    .then(navigate("/products"))
    .catch((err)=>console.log(err));
}
  return (
      <div className='text-center'>
        <h1>Title: {product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button className="btn btn-danger" onClick={deleteProduct}>Delete</button>
      </div>
  )
}

export default Product