export default function PostImage(props) {
  console.log(props)
  return (
    <div>
      <img
        src={props.imageLink}
        alt="Domestic cat"
        className="header-img w-100 object-fit-cover rounded-circle"
      />
    </div>
  );
}
