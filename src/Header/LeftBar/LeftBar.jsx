import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./leftbar.scss";
import { Link } from "react-router-dom";

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
            <Link
              to="/manCollections"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "start",
                fontStyle: "italic",
                fontWeight: "bold",
                padding: "15px",
                display:'block',
              }}
            >
              Men's Collections
            </Link>
            <Link
              to="/womanCollections"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "start",
                fontStyle: "italic",
                fontWeight: "bold",
                padding: "15px",
                display:'block',
              }}
            >
              Women's Collections
            </Link>
            <Link
              to="/kidsCollections"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "start",
                fontStyle: "italic",
                fontWeight: "bold",
                padding: "15px",
                display:'block',
              }}
            >
              Kid's Collections
            </Link>
            <Link
              to="/winterCollections"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "start",
                fontStyle: "italic",
                fontWeight: "bold",
                padding: "15px",
                display:'block',
              }}
            >
              Winter's Collections
            </Link>
            <Link
              to="/summerCollections"
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "start",
                fontStyle: "italic",
                fontWeight: "bold",
                padding: "15px",
                display:'block',
              }}
            >
              Summer's Collections
            </Link>
           
          </ul>
        )}
      </div>
      <hr />
      <div className="center">
        <h1>Brand</h1>
        <div className="container">
          <input type="text" id="name" placeholder="Brand" />
          <select name="filter" id="filter">
            <option value="Easy">Easy</option>
            <option value="RichMan">Rich Man</option>
            <option value="Yellow">Yellow</option>
            <option value="Zara">Zara</option>
            <option value="Raymond">Raymond</option>
            <option value="Umbrella">Umbrella</option>
            <option value="Arong">Arong</option>
            <option value="Darjibari">Darjibari</option>
            <option value="Brady">Brady</option>
            <option value="Armani">Armani</option>
            <option value="Supreme">Supreme</option>
          </select>
          <button>Select</button>
        </div>
      </div>
      <hr />
      <div className="middle">
        <h1>Size</h1>
        <div className="container">
          <input type="text" id="name" placeholder="Size" />
          <select name="filter" id="filter">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <button>Select</button>
        </div>
      </div>
      <hr />
      <div className="finish">
        <h1>Color</h1>
        <div className="container">
          <input type="text" id="name" placeholder="Color" />
          <select name="filter" id="filter">
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Pink">Pink</option>
            <option value="White">White</option>
            <option value="Multi">Multi</option>
          </select>
          <button>Select</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default LeftBar;
