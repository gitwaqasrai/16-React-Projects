import { useLayoutEffect, useState } from "react";

function UseWindowResize() {
  const [WindowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return  WindowSize ;
}

export default UseWindowResize;
