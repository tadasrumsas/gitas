import './App.css'
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import {Routes, Route} from "react-router";

function App() {

  return (
    <>
      <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="aboutUs"
            element={<AboutUs />}
          />
          </Routes>
    </>
  )
}

export default App
