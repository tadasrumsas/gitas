import { Routes, Route, NavLink } from "react-router";
import Todo from "./components/Todo";
import Home from "./components/Home";
import AllTasks from "./components/AllTasks";
import EditTask from "./components/EditTask";

function App() {
  return (
    <div className="container border mt-3">
      <header>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/todos"}>Submit new task</NavLink>
          </li>
          <li>
            <NavLink to={"/tasks"}>All tasks</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todos" element={<Todo />} />
          <Route path="tasks/:id" element={<EditTask />} />
          <Route path="tasks" element={<AllTasks />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
