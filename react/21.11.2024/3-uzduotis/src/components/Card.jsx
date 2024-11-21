export default function Card(props) {

return (
    <div className="d-flex flex-row align-items-center p-3">
       
        <div className="d-flex flex-column">
        <img src={"src" + props.logo.slice(1)} alt="" />
        </div>

        <div className="d-flex flex-column mx-3">
        <p>{props.company}</p>
        <p>{props.position}</p>

        <div className="d-flex justify-content-between">
        <span>{props.postedAt}</span>
        <span>{props.contract}</span>
        <span>{props.location}</span>
        </div>
        </div>


    </div>
);

}