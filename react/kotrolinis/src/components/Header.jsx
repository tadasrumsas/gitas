import { NavLink } from "react-router"

export default function Header(){
  return (
    <header>
    <nav className="row bg-danger">
      <ul className="list-unstyled d-inline-flex gap-5 justify-content-center p-2">
        <li><NavLink className="text-decoration-none text-white" to={"/"}>Home</NavLink></li>
        <li><NavLink className="text-decoration-none text-white" to={"/registerbooks"}>Book Registration</NavLink></li>
        <li><NavLink className="text-decoration-none text-white" to={"/books"}>Taken books</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}