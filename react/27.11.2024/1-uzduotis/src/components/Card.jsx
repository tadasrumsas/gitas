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
        const response = await fetch("https://api.github.com/users");
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
      {data.map((post) => {
        return (
          <div key={post.id} className="col-4">
            <img 
            className="rounded-circle"
            src={post.avatar_url}
            width="140"
            height="140"
            alt=""></img>
            <h2 className="fw-normal">{post.login}</h2>
            <p>
              <a className="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
        );
      })}
    </>
  );
}
