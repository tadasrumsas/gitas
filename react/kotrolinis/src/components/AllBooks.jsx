import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function AllDonors() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteTrigger, setDeleteTrigger] = useState(0);

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
  }, [deleteTrigger]);

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/books/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      setDeleteTrigger((deleteTrigger) => deleteTrigger + 1);
    } catch (error) {
      console.error(error);
    }
    
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Price</th>
          <th>Cover</th>
        </tr>
        </thead>
        <tbody>
          {data.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.author}</td>
                <td>{task.category}</td>
                <td>{task.price}</td>
                <td>

                  <img
                  src={task.cover}
                  width="150"
                  height="150"></img>
</td>
                <td>
                  <Link to={`/books/${task.id}`}>Edit</Link>
                </td>
                <td>
                  <button className="btn btn-danger"  onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}