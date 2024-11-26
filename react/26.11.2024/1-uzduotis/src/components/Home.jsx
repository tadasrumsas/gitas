import { Link } from "react-router";

export default function Home() {
    return (
      <div>
        <h1>Namu Puslapis</h1>
  
        <p>
         Sveiki atvyke. Noredami patekti I AboutUs puslapi, spauskite <Link to="/AboutUs">cia</Link>. 
        </p>
  
      </div>
    );
  }
  