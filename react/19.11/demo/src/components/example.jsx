import { useState } from "react";
 
export default function Example(props) {
  const [lightTheme, setLightTheme] = useState(false);
  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };
 
  return (
    <div>
      <h1 className={lightTheme ? props.defaultColor : "text-success"}>
        My Theme is {lightTheme ? props.defaultColor : "green"}!
      </h1>
 
      <button
        onClick={changeTheme}
        type="button"
        className="btn btn-light"
      >
        Change Theme
      </button>
    </div>
  );
}
 