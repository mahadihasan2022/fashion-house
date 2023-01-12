import React from "react";
import { useNavigate } from "react-router-dom";
import contact from "../../images/contact.svg";
import faceSmile from "../../images/faceSmile.svg";
import message from "../../images/message.svg";
import "./NeedHelp.scss";

const NeedHelp = () => {

  const navigate = useNavigate();

  const handleOurContact = () =>{
    navigate('/contact');
  }
  const handleShowAbout = () =>{
    navigate('/about');
  }
  const handleAddFurom = () =>{
    navigate('/forum');
  }



  return (
    <div className="needHelp">
      <div className="help-container">
        <h1 className="text-center font-bold italic text-6xl">Need Help?</h1>
        <p className="text-3xl font-bold italic text-center pt-4">
          If you Want !!!
        </p>
      </div>
      <div className="container">
        <div className="card-container">
          <div className="card">
            <img src={contact} alt="" />
          </div>
          <div className="card-details">
            <h1>
              Contact Us
            </h1>
            <p>
              Diam platea nisi proin taciti laoreet consequat curabitur
            </p>
            <div className="btn-info">
              <button onClick={handleOurContact} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                Visit Now
              </button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img src={faceSmile} alt="" />
          </div>
          <div className="card-details">
            <h1>
              About Us
            </h1>
            <p>
              Diam platea nisi proin taciti laoreet consequat curabitur
            </p>
            <div className="btn-info">
              <button onClick={handleShowAbout} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                Visit Now
              </button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <img  src={message} alt="" />
          </div>
          <div className="card-details">
            <h1>
              Forum
            </h1>
            <p>
              Diam platea nisi proin taciti laoreet consequat curabitur
            </p>
            <div className="btn-info">
              <button onClick={handleAddFurom} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                Visit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;