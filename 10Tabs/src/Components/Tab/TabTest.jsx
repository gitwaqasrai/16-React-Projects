import RandomText from "./RandomText";
import Tabs from "./Tabs";

function TabTest() {
  const tab = [
    {
      label: "Home ",
      content: "Welcome to the Home tab!",
    },
    {
      label: "Profile ",
      content: "This is your Profile information.",
    },
    {
      label: "Settings",
      content: <RandomText />,
    },
  ];

  return <Tabs tabContent={tab} />;
}

export default TabTest;
