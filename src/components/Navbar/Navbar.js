import React from "react";

function Navbar({ navList }) {
  return (
    <div className="nav">
      <ul>
        {navList.map((navEle) => {
          return <li key={navEle}>{navEle}</li>;
        })}
      </ul>
    </div>
  );
}

export default Navbar;
