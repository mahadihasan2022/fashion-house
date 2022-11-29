import React from "react";
import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="uper">
        <h1>Price-Frequency</h1>
        <div className="container">
          <input type="text" id="name" placeholder="range" />
          <select name="filter" id="filter">
            <option value="min">Min</option>
            <option value="max">Max</option>
          </select>
          <button>Select</button>
        </div>
      </div>
      <hr />
      <div className="middle">
        <h1>Variants</h1>
        <div className="button-container">
          <button>Saree</button>
          <button>Shirt</button>
          <button>T-Shirt</button>
          <button>Pant</button>
          <button>Panjabi</button>
          <button>Tops</button>
          <button>Jacket</button>
          <button>Coats</button>
          <button>Half-Pant</button>
          <button>Tights</button>
          <button>Kurta</button>
          <button>Frogs</button>
          <button>Kameez</button>
        </div>
        </div>
        <hr />
        <div className="end">
        <h1>Brands</h1>
        <div className="button-container">
          <button>Easy</button>
          <button>Yellow</button>
          <button>Rich Man</button>
          <button>Raymond</button>
          <button>Darjibari</button>
          <button>Umbrella</button>
          <button>Arong</button>
          <button>Brady</button>
          <button>Zara</button>
          <button>Supreme</button>
          <button>Armani</button>
        </div>
        </div>
    </div>
  );
};

export default RightBar;
