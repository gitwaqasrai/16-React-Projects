import "./App.css";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
// import ImageSlider from "./Components/ImageSlider/ImageSlider";

function App() {
  return (
    <>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"20"}
        pages={"1"}
      />
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"20"}
        pages={"1"}
      /> */}
    </>
  );
}

export default App;
