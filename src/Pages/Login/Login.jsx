import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../Header/NavBar/Navbar';
import './login.scss';

const Login = () => {
    const navigate = useNavigate();

  const handleVisitToRegisterPage = () =>{
    navigate('/signUp');
  };

    return (
        <div>
            <Navbar/>
            <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ducimus, aspernatur consequatur repudiandae voluptatibus cupiditate
            veritatis dolore reiciendis magni, ullam cum itaque ut facilis hic
            quas! Iste officiis cum itaque.
          </p>
          <span>Don't you have an account?</span>
          <button onClick={handleVisitToRegisterPage}>SignUp</button>
        </div>
        <div className="right">
          <h1>Login Us</h1>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="Your Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              placeholder="password"
            />
            <button >Login</button>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;


  
  