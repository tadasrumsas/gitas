import { useState } from "react";

export default function TaskCard() {
  const [isDone, setIsDone] = useState(false);

  const MarkAsDone = () => {
    setIsDone(true);
  };

  return (
    <div className="card-body">
      <h5 className="card-title">{isDone ? "Task is done!" : "Task is not done!"}</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a
        href="#"
        className={`btn ${isDone ? "btn-success" : "btn-danger"}`}
        onClick={MarkAsDone}
      >
        {isDone ? "Done" : "Mark as done"}
      </a>
    </div>
  );
}
