import React, { useState } from 'react';
import ProductForm from './ProductForm';
import AllProducts from './AllProducts';
const Main = ({products,setProducts}) => {

  return (
    <div>
        <ProductForm products={products} setProducts={setProducts}/>
        <AllProducts products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Main