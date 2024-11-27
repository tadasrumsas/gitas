import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";

export default function Card() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
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
      {/* <img
        className="rounded-circle"
        src={data.id}
        width="140"
        height="140"
      ></img> */}

      <h2 className="fw-normal">Name: {data.name}</h2>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone} </p>
    </>
  );
}
