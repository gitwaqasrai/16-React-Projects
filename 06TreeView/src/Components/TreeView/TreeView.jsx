/* eslint-disable react/prop-types */

import MenuList from "./MenuList";

function TreeView({ menu = [] }) {
  return (
    <div className="tree-view">
      <MenuList list={menu} />
    </div>
  );
}

export default TreeView;
