import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Todo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-8 mx-auto">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          {...register("name", {
            required: true,
            minLength: 2,
            maxLength: 80,
            pattern: /^[a-zA-Z\s]*$/,
          })}
        />
        {errors.name?.type === "required" && <p>Required</p>}
        {errors.name?.type === "minLength" && <p>Min. 2 characters</p>}
        {errors.name?.type === "maxLength" && <p>Max. 80 characters</p>}
        {errors.name?.type === "pattern" && <p>Only letters and spaces</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="duedate" className="form-label">
          Due date:
        </label>
        <input
          type="date"
          id="duedate"
          className="form-control"
          {...register("duedate", { required: true })}
        />
        {errors.duedate?.type === "required" && <p>Required</p>}
        {errors.duedate?.type === "required" && <p>Required</p>}
      </div>

      <button type="submit" className="btn btn-success">
        Enter
      </button>
    </form>
  );
}
