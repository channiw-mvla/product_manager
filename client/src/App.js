import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Main from './components/Main';
function App() {
  return (
      <div className="d-flex flex-column align-items-center m-5">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products/" />
          <Route element={<Product/>} path="/products/:id" />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;

