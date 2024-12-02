import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/books", {
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
    <form onSubmit={handleSubmit(onSubmit)} >
      <div className="mb-3">


        <div>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.title?.type === "required" && (
            <p className="text-danger">Field cannot be empty</p>
          )}
          {errors.title?.type === "min" && (
            <p className="text-danger">min 3 symbols </p>
          )}
          {errors.title?.type === "max" && (
            <p className="text-danger">max 100 symbols </p>
          )}
        </div>



        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="form-control"
            {...register("author", {required: true , pattern: /^[a-zA-Z\s]*$/})}
          />
          {errors.author?.type === "required" && (
            <p className="text-danger">Field cannot be empty</p>
          )}
          {errors.author?.type === "pattern" && (
            <p className="text-danger">Only letters and spaces </p>
          )}
        </div>


        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="category"
            {...register("category", { required: true })}
          >
            {errors.category?.type === "required" && (
            <p className="text-danger">Name field cannot be empty</p>
          )}


            <option value="">Choose category</option>
            <option value="1"> 1</option>
          </select>
          {errors.category && (
            <p className="text-danger">Category is required</p>
          )}
        </div>


        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="form-control"
            {...register("price", {required: true})}
          />
          {errors.price?.type === "required" && (
            <p className="text-danger">Field cannot be empty</p>
          )}

        </div>

        <div className="mb-3">
          <label htmlFor="cover" className="form-label">
            Cover
          </label>
          <input
            type="text"
            id="cover"
            className="form-control"
            {...register("cover", {required: true})}
          />
          {errors.cover?.type === "required" && (
            <p className="text-danger">Field cannot be empty</p>
          )}


        </div>


        
      </div>

      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}