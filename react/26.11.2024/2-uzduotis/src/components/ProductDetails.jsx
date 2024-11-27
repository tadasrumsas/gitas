import { useParams } from "react-router";
import { Link } from "react-router";

const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];

export default function ProductDetails() {
const { id } = useParams();
const found = products.find((element) => element.id == id)
  

  return (
<>
<h1>{found.name}</h1>
<Link to="/">
<p>Back to Product List</p>
</Link>
</>
  );
}
