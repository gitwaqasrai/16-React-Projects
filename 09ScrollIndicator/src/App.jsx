import "./App.css";
import ScrollIndicator from "./Components/Scroll/ScrollIndicator";

function App() {
  return (
    <>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
