/* eslint-disable react/prop-types */
import { useEffect } from "react";

function UseOutSideClick( ref, handler ) {
  useEffect(() => {
    function listner(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    }

    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);

    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    };
  }, [ref, handler]);

  return <div></div>;
}

export default UseOutSideClick;
