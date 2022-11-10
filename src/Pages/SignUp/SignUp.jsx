import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Header/NavBar/Navbar";
import './signUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const handleVisitLoginPage = () => {
    navigate("/login");
  };

  return (
    <div>
        <Navbar/>
      <div className="signUp">
        <div className="card">
          <div className="left">
            <h1> Register Now...</h1>
            <form>
              <input type="text" placeholder="name" />
              <input type="email" name="" id="" placeholder="email" />
              <input type="password" name="" id="" placeholder="password" />
              <input
                type="password"
                name=""
                id=""
                placeholder="conform password"
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="right">
            <h1>Welcome To Our Website</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              veritatis, labore accusamus pariatur quas cumque debitis neque?
              Tempore, perspiciatis officia dicta et reprehenderit fuga animi,
              consequuntur delectus aut quae rerum?
            </p>
            <span>If you have already an account!!</span>
            <button onClick={handleVisitLoginPage}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
