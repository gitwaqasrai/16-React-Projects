/* eslint-disable react/prop-types */
import MenuItems from "./MenuItems";

function MenuList({ list = [] }) {
  return (
    <div className="space-y-2">
      {" "}
      {/* Adds vertical spacing between menu items */}
      {list && list.length > 0
        ? list.map((listItem, i) => <MenuItems item={listItem} key={i} />)
        : null}
    </div>
  );
}

export default MenuList;
