import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Main from './components/Main';
import { EditProduct } from './components/EditProduct';
import { useState } from 'react';
function App() {
  const [products, setProducts] = useState([])
  return (
      <div className="d-flex flex-column align-items-center m-5">
      <BrowserRouter>
        <Routes>
          <Route element={<Main products={products} setProducts={setProducts}/>} path="/products/" />
          <Route element={<Product products={products} setProducts={setProducts}/>} path="/products/:id" />
          <Route element={<EditProduct products={products} setProducts={setProducts}/>} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;

