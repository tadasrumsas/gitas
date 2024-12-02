import { useState, useEffect } from "react";
// import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/books");
        const data = await response.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {data.map((task) => {
        return (


<div className="container">
          <div key={task.id} className="row col-4 ">
            <img
              src={task.cover}
              className="mt-1"></img>
            <p className="fw-normal">Title: {task.title}</p>
            <p>Author : {task.author}</p>
            <p>Category : {task.category}</p>
            <p>Price : {task.price}</p>
          </div>
          </div>
        );
      })}

      
    </>
  );
}