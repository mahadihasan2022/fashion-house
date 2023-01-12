import React from "react";
import usersSolid from "../../images/usersSolid.svg";
import slack from "../../images/slack.svg";
import nfc from "../../images/nfc.svg";
import { useNavigate } from "react-router-dom";
import './AboutUs.scss';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleOnclick = () =>{
    navigate('/questionBox');
  }
  const HandleClickPrestigious = () =>{
    navigate('/prestigious');
  }
  const handleOnclickCummunity = () =>{
    navigate('/community');
  }



  return (
   
      <div className="about">
        <div className=" about-container">
          <div className="text-container">
            <h1>
              The Most
            </h1>
            <h2>
              Interesting Digital
            </h2>
            <h3>
              In The World.
            </h3>
          </div>
          <div className="details-container">
            <p>
              Blandit semper ac mi montes neque nostra vivamus dictum
              ullamcorper phasellus. Gravida metus viverra massa netus tortor
              nullam pharetra. Nunc leo auctor congue mus convallis scelerisque
              maecenas condimentum dictum dolor.
            </p>
            <div className="btn-info">
              <button>
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card-container">
            <div className="card">
              <img src={usersSolid} alt="" />
            </div>
            <div className="card-details">
              <h1>
                Fantastic support
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="btn-info">
                <button onClick={handleOnclick}>
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <img src={slack} alt="" />
            </div>
            <div className="card-details">
              <h1>
                Prestigious
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="btn-info">
                <button onClick={HandleClickPrestigious} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <img src={nfc} alt="" />
            </div>
            <div className="card-details">
              <h1>
                Community
              </h1>
              <p>
                Diam platea nisi proin taciti laoreet consequat curabitur
              </p>
              <div className="btn-info">
                <button onClick={handleOnclickCummunity} className="w-28 h-8 bg-pink-500 rounded-sm font-bold italic">
                  Visit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;