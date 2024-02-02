import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);

  // useEffect(() => {
  //   setRenderCount((prevRenderCount) => prevRenderCount + 1);
  // });

  // const renderCount = useRef(0);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  // const inputRef = useRef();

  // const focus = () => {
  //   console.log(inputRef.current);
  //   inputRef.current.focus();
  // };

  // Storing previous value of state
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        // ref={inputRef}
      />
      <div>
        My Name is {name}, it used to be {prevName.current}.
      </div>
      {/* <div>I rendered {renderCount.current} times.</div> */}
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
