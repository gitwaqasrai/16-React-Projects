import "./App.css";
import SideMenu from "./Components/TreeView/sideMenu";
import TreeView from "./Components/TreeView/TreeView";

function App() {
  return (
    <>
      <TreeView menu={SideMenu} />
    </>
  );
}

export default App;
