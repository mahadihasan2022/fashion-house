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
  const handleOnTShirt = () =>{
    navigate('./Tshirt');
  }
  const handleOnPant = () =>{
    navigate('./pant');
  }
  const handleOnPanjabi = () =>{
    navigate('./panjabi');
  }
  const handleOnTops = () =>{
    navigate('./tops');
  }
  const handleOnJacket = () =>{
    navigate('./jacket');
  }
  const handleOnCoats = () =>{
    navigate('./coats');
  }
  const handleOnHalfPant = () =>{
    navigate('./half-pant');
  }
  const handleOnTights = () =>{
    navigate('./tights');
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
          <button onClick={handleOnTShirt}>T-Shirt</button>
          <button onClick={handleOnPant}>Pant</button>
          <button onClick={handleOnPanjabi}>Panjabi</button>
          <button onClick={handleOnTops}>Tops</button>
          <button onClick={handleOnJacket}>Jacket</button>
          <button onClick={handleOnCoats}>Coats</button>
          <button onClick={handleOnHalfPant}>Half-Pant</button>
          <button onClick={handleOnTights}>Tights</button>
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
