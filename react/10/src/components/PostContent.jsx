export default function PostContent(props) {
  console.log(props);
  return (
    <div>
      <h2 className="content-title">{props.text}</h2>
      <p className="content-text">
       {props.textContent}
      </p>
    </div>
  );
}
