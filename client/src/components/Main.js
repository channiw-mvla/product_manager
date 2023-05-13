import React, { useState } from 'react';
import ProductForm from './ProductForm';
import AllProducts from './AllProducts';
const Main = () => {
    const [products, setProducts] = useState([])
  return (
    <div>
        <ProductForm products={products} setProducts={setProducts}/>
        <AllProducts products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main