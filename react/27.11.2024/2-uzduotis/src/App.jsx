import Card from "./components/Card";
import { Routes, Route } from "react-router";
import Details from "./components/Details";

function App() {
  return (
    <main className="container">
      <div className="row">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="posts/:id" element={<Details />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
