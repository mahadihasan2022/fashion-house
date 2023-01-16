import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import zara from "../../images/zara.svg";
import Supreme from "../../images/Supreme.svg";
import richMan from "../../images/richMan.png";
import armani from "../../images/armani.svg";
import easy from "../../images/easy.svg";
import raymond from "../../images/raymond.svg";
import Navbar from "../../Header/NavBar/Navbar";
import "./Prestigious.scss";

const Prestigious = () => {
  return (
    <div>
      <Navbar />
      <div className="prestigious">
        <h1>Our Website Prestigious</h1>
        <div className="prestigious-container">
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={richMan} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>RICH-MAN</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={easy} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>EASY</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img className="pt-10 pr-2 w-16" src={zara} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>ZARA</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={Supreme} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>SUPREME</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={armani} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>ARMANI</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className="prestigious-body">
            <div className="prestigious-img">
              <img src={raymond} alt="" />
            </div>
            <div className="prestigious-tittle">
              <h2>RAYMOND</h2>
              <div className="prestigious-icon">
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarFill style={{ color: "#eab308", fontSize: "25px" }} />
                <BsStarHalf style={{ color: "#eab308", fontSize: "25px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prestigious;
