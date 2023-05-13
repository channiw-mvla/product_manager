import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Product = () => {
  const {id} = useParams(); 
  const [product, setProduct] = useState({})
  useEffect(() => {
    axios.get("http://localhost:8000/api/products/"+id)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  }, [])
  
  return (
      <div className='text-center'>
        <h1>Title: {product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
  )
}

export default Product