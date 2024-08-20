/* eslint-disable react/prop-types */
import { useState } from "react";
import MenuList from "./MenuList";

function MenuItems({ item }) {
  const [displayCurrentValue, setDisplayCurrentValue] = useState({});

  function handleClick(getCurrentLabel) {
    setDisplayCurrentValue({
      ...displayCurrentValue,
      [getCurrentLabel]: !displayCurrentValue[getCurrentLabel],
    });
  }

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
        onClick={() => handleClick(item.label)}
      >
        <p className="text-lg font-semibold">{item.label}</p>
        {item && item.Children && item.Children.length > 0 ? (
          <span className="text-xl font-bold">
            {displayCurrentValue[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.Children &&
      item.Children.length > 0 &&
      displayCurrentValue[item.label] ? (
        <div className="ml-4 border-l-2 border-gray-300">
          <MenuList list={item.Children} />
        </div>
      ) : null}
    </div>
  );
}

export default MenuItems;
