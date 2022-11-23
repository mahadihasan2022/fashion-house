import { TextField } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Header/NavBar/Navbar";
import useAuth from "../../hooks/useAuth";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { googleSignInHandler, signInWithEmailAndPasswordHandler } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPasswordHandler(data?.email, data?.password);
    reset();
  };

  const handleVisitToRegisterPage = () => {
    navigate("/signUp");
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="text-center mt-4 mb-4 ">
          {location?.pathname === "/login" ? (
            ""
          ) : (
            <div>
              {/* <h3 className="text-danger fw-bolder">Please Sign in or Login</h3> */}
            </div>
          )}
        </div>
        <div className="card">
          <div className="left">
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              ducimus, aspernatur consequatur repudiandae voluptatibus
              cupiditate veritatis dolore reiciendis magni, ullam cum itaque ut
              facilis hic quas! Iste officiis cum itaque.
            </p>
            <span>Don't you have an account?</span>
            <div className="btn">
              <button onClick={handleVisitToRegisterPage}>SignUp</button>
            </div>
          </div>
          <div className="right">
            <h1>Login Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                type="email"
                {...register("email", { required: true })}
                id="Email"
                label="Email"
                variant="standard"
                className="form-control mt-3"
              />
              <TextField
                type={isShowPassword ? "text" : "password"}
                {...register("password", { required: true, minLength: 6 })}
                id="Password"
                label="Password"
                variant="standard"
                className="form-control mt-3"
              />
              <button>Login</button>
            </form>
            <h2 style={{ textAlign: "center" }}>------------Or------------</h2>
            <div className="button">
            <button onClick={googleSignInHandler} className="btn btn-primary">
              <span className="text-success bg-light rounded-circle p-2">
                <SocialIcon
                  url="https://google.com/jaketrent"
                  fgColor={(2, 42, 42, 0.9)}
                  bgColor="cornsilk"
                />
              </span>{" "}
              Log in with Google
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
