import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const AllProducts = ({products,setProducts}) => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.log(err));
    },[]);
const deleteProduct = id =>{
    axios.delete('http://localhost:8000/api/products/'+id)
    .then(setProducts(products.filter(product=> product._id !== id)))
    .catch((err)=>console.log(err));
}
  return (
    <div className="mt-3 text-center d-flex flex-column">
        <h1>All Products</h1>
        {
            products.map((product,index)=>{
               return( 
                    <h2 key={index}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        |
                        <Link to={`/products/edit/${product._id}`}>Edit</Link>
                        |
                        <Link onClick={()=>deleteProduct(product._id)}>Delete</Link>
                    </h2>
               );
            })
        }
    </div>
  )
}

export default AllProducts