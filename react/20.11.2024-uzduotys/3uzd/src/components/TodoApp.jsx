import { useState } from "react";




export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };




  return (

    <>
    <ul className="px-5">
<h1>Task Tracker</h1>
<button onClick={() => addTask(prompt("Enter the task: "))}>Add a task</button>


      {tasks.map((task, index) => (
        <li key={index}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <button onClick={() => toggleComplete(index)}>
            {task.completed ? "Undo" : "Done"}
            </button>

        </li>
        
      ))}

      
    </ul>
<div className="px-5">
{tasks.length === 0 && <p>No tasks yet</p>}
</div>
</>
  );
}