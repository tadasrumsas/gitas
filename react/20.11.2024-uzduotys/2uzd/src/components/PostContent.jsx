export default function PostContent({ 
    title,
    content,
    img,
    setLearnt,
    id,
    status,
 }) {
    return (
        <div className="col-4">
        <h2>{title}</h2>
        <img
        src={img}
        alt={title}
        />
        <p>{content}</p>
        <p>{status ? "Išmokau" : "Mokausi"}</p>
        <button onClick={ () => setLearnt(id)}>OK</button>
        </div>
    );
    }