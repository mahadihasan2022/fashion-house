import React from "react";
import { useNavigate } from "react-router-dom";
import "./rightbar.scss";

const RightBar = () => {
  const navigate = useNavigate();

  const handleOnSaree = () =>{
    navigate('./saree');
  }
  const handleOnShirt = () =>{
    navigate('./shirt');
  }




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
          <button onClick={handleOnSaree}>Saree</button>
          <button onClick={handleOnShirt}>Shirt</button>
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
    </div>
  );
};

export default RightBar;
