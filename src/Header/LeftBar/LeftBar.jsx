import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./leftbar.scss";

const LeftBar = () => {
  const [hover, setHover] = useState(false);
  const handleHoverEnter = () => {
    setHover(true);
    console.log("mouse move");
  };

  const handleHoverOut = () => {
    setHover(false);
    console.log("mouseout");
  };
  return (
    <div className="leftbar">
      <div
        onMouseMove={handleHoverEnter}
        onMouseOut={handleHoverOut}
        className="uper"
      >
        <h1>
          Category{" "}
          <span>
            <KeyboardArrowDownOutlinedIcon />
          </span>
        </h1>

        {hover && (
          <ul>
            <li>Men's Collections</li>
            <li>Women's Collections</li>
            <li>Kid's Collections</li>
            <li>Summer Collections</li>
            <li>Winter Collections</li>
          </ul>
        )}
      </div>
      <hr />
      <div className="middle">
        <h1>Size</h1>
        <div className="btn-info">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
          <button>XXL</button>
        </div>
      </div>
      <hr />
      <div className="finish">
        <h1>Color</h1>
        <div className="btn-info">
          <button>Black</button>
          <button>Blue</button>
          <button>White</button>
          <button>Pink</button>
          <button>Red</button>
        </div>
      </div>
      <hr />
    </div>

  );
};

export default LeftBar;
