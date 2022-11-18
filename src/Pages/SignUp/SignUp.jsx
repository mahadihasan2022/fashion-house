import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Header/NavBar/Navbar";
import useAuth from "../../hooks/useAuth";
import "./signUp.scss";
const SignUp = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { createUserWithEmailAndPasswordHandler } = useAuth();
  const { register, handleSubmit, reset, formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, confirmPassword } = data;
    if (password === confirmPassword) {
      createUserWithEmailAndPasswordHandler(name, email, password);
      reset();
    }
  };

  const navigate = useNavigate();

  const handleVisitLoginPage = () => {
    navigate("/login");
  };
 

  return (
    <div>
      <NavBar />
      <div className="signUp">
        <div className="card">
          <div className="left">
            <h1> Register Now...</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register("name", { required: true })}
                id="Name"
                label="Name"
                variant="standard"
                className="form-control mt-3"
              />
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
              {errors.password && (
                <p className="text-start text-danger">
                  Give Password minimum 6 characters
                </p>
              )}
              <TextField
                type={isShowPassword ? "text" : "password"}
                {...register("confirmPassword", { required: true })}
                id="Confirm-Password"
                label="Confirm Password"
                variant="standard"
                className="form-control mt-3"
              />
              <div className="text-start">
                <input
                  type="checkbox"
                  name=""
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />{" "}
                show password
              </div>
              <br />
            <div className="button">
            <input
                type="submit"
                value="Sign in"
              />
            </div>
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
