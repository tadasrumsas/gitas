import { useForm } from "react-hook-form";

export default function Form() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));

  try {
          const response = await fetch("http://localhost:8080/animals", {
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
      <form onSubmit={handleSubmit(onSubmit)} className="col-4 mx-auto">
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...register("name", { required: true, pattern: /^[A-Z][a-z]+$/ })}
          />
          {errors.name?.type === "required" && <p>Required</p>}
          {errors.name?.type === "pattern" && <p>Must begin with an uppercase letter</p>}

        </div>

        <div className="mb-3">
          <label
            htmlFor="type"
            className="form-label"
          >
            Type
          </label>
          <input
            type="text"
            id="type"
            className="form-control"
            {...register("type", { required: true, pattern: /^[a-zA-Z]$/, minLength: 2, maxLength: 50})}
          />
          {errors.type?.type === "required" && <p>Required</p>}
          {errors.type?.type === "minLength" && <p>Minimum character length : 2</p>}
          {errors.type?.type === "maxLength" && <p>Maximum character length : 50</p>}
        </div>

        <div className="mb-3">
          <label
            htmlFor="breed"
            className="form-label"
          >
            Breed
          </label>
          <input
            type="text"
            id="breed"
            className="form-control"
            {...register("breed", { required: true, pattern: /^[A-Z][a-z]$/, minLength: 2, maxLength: 100})}
          />
          {errors.breed?.type === "required" && <p>Required</p>}
          {errors.breed?.type === "minLength" && <p>Minimum character length : 5</p>}
          {errors.breed?.type === "maxLength" && <p>Maximum character length : 100</p>}
        </div>

        <div className="mb-3">
          <label
            htmlFor="age"
            className="form-label"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            {...register("age", { required: true, min:1, max: 100})}
          />
          {errors.breed?.type === "required" && <p>Required</p>}
          {errors.breed?.type === "min" && <p>Min number 1</p>}
          {errors.breed?.type === "max" && <p>Max number 100</p>}
        </div>

        <div className="mb-3">
          <label
            htmlFor="weight"
            className="form-label"
          >
            Weight
          </label>
          <input
            type="number"
            id="weight"
            step="0.01"
            className="form-control"
            {...register("weight", {min: 0.05})}
          />
          {errors.weight?.type === "min" && <p>Min numner: 0.05</p>}
        </div>

        <div className="mb-3">
          <label
            htmlFor="gender"
            className="form-label"
          >
            Gender
          </label>
          <input
            type="text"
            id="gender"
            className="form-control"
            {...register("gender", { required: true})}
            
          />
          {errors.gender?.type === "required" && <p>Cannot be empty</p>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
}
