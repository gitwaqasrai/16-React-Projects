import { useRef, useState } from "react";
import useOutSideClick from "./useOutSideClick";

function UseOnClickOutSideTest() {
 
  const [showContent, setshowContent] = useState(false);
 const ref = useRef();
 useOutSideClick(ref,()=>setshowContent(false))
  return (
    <div>
      {showContent ? (
        <div ref={ref} className="">
          <h1>This is a Random Content.</h1>
          <p>Hello What Are You Doing.</p>
        </div>
      ) : (
        <button onClick={() => setshowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

export default UseOnClickOutSideTest;
