import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "../../Header/NavBar/Navbar";
import { GiFlowerPot } from "react-icons/gi";
import { BsTelephonePlusFill } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import "./Contact.scss";
import BookingModal from "../../Components/BookingModal/BookingModal";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us about our</h1>
        <h2>
          <GiFlowerPot style={{ color: "#be123c", fontSize: "70px" }} />
          <span>Fashion House</span>
          <GiFlowerPot style={{ color: "#be123c", fontSize: "70px" }} />
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          style={{ fontFamily: " 'Pompiere', cursive" }}
        >
          <Typewriter
            options={{
              strings: [
                "We are love to show you how you can get more traffic and leads, increase your sales productivity, provide  better costumer service or all of the above. Here are a few ways to reach out of our sales team.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <div className="container-gridBox">
          <div className="grid-container">
           <div className="card-container">
           <div className="icon">
              <BsTelephonePlusFill
                style={{
                  fontSize: "60px",
                  color: "#047857",
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
              />
            </div>
            <div className="details">
              <h3>Call us directly at</h3>
              <h4>01409117333</h4>
              <h5>Gmail: mahadi35-2848@diu.edu.bd</h5>
            </div>


           </div>

            <div className="card-container">
              <div className="icon">
                <IoIosChatbubbles
                  style={{
                    fontSize: "60px",
                    color: "#fdba74",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                />
              </div>
              <div className="details">
                <h6>Chat with our sales team.</h6>
                <button>Chat With Me</button>
              </div>
            </div>
          </div>
          <div className="appointment">
            <h1>Job Appointment</h1>
            <h6>To schedule time to speck with one of our sales representatives complete
                 the from amd click submit to choose a date and time that work for you. </h6>
                 <div>
                    <BookingModal/>
                 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
