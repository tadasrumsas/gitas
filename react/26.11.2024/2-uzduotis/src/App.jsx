import './App.css'
import {Routes, Route} from "react-router";
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';


function App() {

  return (
    <>
      <Routes>
          <Route
            path="/"
            element={<ProductList />}
          />
          <Route
            path="products/:id"
            element={<ProductDetails />}
          />
          </Routes>
    </>
  )
}

export default App
