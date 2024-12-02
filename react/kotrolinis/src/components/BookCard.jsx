import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function DonorCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/books/${id}`
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
    <div className="container">
      <div className="row border w-25 mx-auto mt-5 text-center">
        <h2>Book card</h2>
        <p>Title : {data.title}</p>
        <p>Author : {data.author}</p>
        <p>Category : {data.category}</p>
        <p>Price : {data.price}</p>
        <p>Cover : {data.cover}</p>
      </div>
    </div>
   
    
  </>
  );
}