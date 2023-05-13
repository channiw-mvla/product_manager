import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const AllProducts = ({products,setProducts}) => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.log(err));
    },[]);
  return (
    <div className="mt-3 text-center d-flex flex-column">
        <h1>All Products</h1>
        {
            products.map((product,index)=>{
               return( 
                    <h2>
                        <Link key={index} to={`/products/${product._id}`}>{product.title}</Link>
                    </h2>
               );
            })
        }
    </div>
  )
}

export default AllProducts