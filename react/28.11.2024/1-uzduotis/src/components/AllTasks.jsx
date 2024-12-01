import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function Alltasks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteTrigger, setDeleteTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        const data = await response.json();
        console.log(data)

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
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
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
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task Name</th>
          <th>Due Date</th>
        </tr>
      </thead>

      <tbody>
        {data.map((task) => {
          return (
            <tr key={task.id}>
                <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.duedate}</td>
              <td>
                <button className="btn btn-warning"><Link to={`/tasks/${task.id}`}>Edit</Link></button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
