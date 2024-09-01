import "./App.css";
import ScrollToSection from "./Components/ScrollToSection/ScrollToSection";
import ScrollTopToBottom from "./Components/ScrollTopToBottom/ScrollTopToBottom";

function App() {
  return (
    <>
      <ScrollToSection />
      <div className="border-[3px] border-cyan-600 my-2"></div>
      <ScrollTopToBottom />
    </>
  );
}

export default App;
