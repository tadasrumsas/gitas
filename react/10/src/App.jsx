import Header from "./components/Header";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header title="Labas, as mokausi"
          link="src/assets/cat.jpg"
          />
        </div>
      </div>




      <div className="row">
        <div className="col-12 col-sm-6">
          <PostImage imageLink="src/assets/cat.jpg"/>
          <PostContent text="Cia mano pavadinimas"
          textContent="Cia mano pastraipaaaaaaaaaaaaaa"/>
        </div>
        <div className="col-12 col-sm-6">
          <PostImage imageLink="src/assets/cat.jpg"/>
          <PostContent text="Cia mano kitas pavadinimas"
          textContent="Cia mano antroji pastraipa"/>
        </div>
      </div>

      <div className="row">
        <div className="col-6 mb-2 col-sm-3">
          <Box colorr="box bg-primary"/>
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box colorr="box bg-success"/>
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box colorr="box bg-info"/>
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box colorr="box bg-warning"/>
        </div>
      </div>
    </div>
  );
}
