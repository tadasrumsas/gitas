export default function Box(props) {
  console.log(props)
  return (
    <div className="bg-success">
      <img
        src="src/components/images/cat.jpg"
        alt="Domestic cat"
        className="header-img w-75 object-fit-cover"
      />
    </div>
  );
}
