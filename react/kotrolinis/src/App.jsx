import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Routes, Route } from "react-router";
import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllBooks from "./components/AllBooks";
import UpdateForm from "./components/UpdateForm";
import BookCard from "./components/BookCard";


function App() {
  return (

<div className="container">
<Header/>
      <main>

        
      <Routes>
      <Route
        path="/"
        element={<Home/>}
        />

        <Route
        path="/registerbooks"
        element={<Form/>}
        />

        <Route
        path="/books"
        element={<AllBooks/>}
        />  

        <Route
        path="/books/:id"
        element={<UpdateForm/>}
        />

      <Route
        path="/book/:id"
        element={<BookCard/>}
        />



      </Routes>

      </main>
      <Footer/>
      </div>


  );
}

export default App;