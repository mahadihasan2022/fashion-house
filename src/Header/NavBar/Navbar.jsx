import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import nav from "../../images/nav.svg";
import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { List } from "@mui/material";

const Navbar = (props) => {
  const { user, logoutHandler } = useAuth();
  const navigate = useNavigate();

  const userProfile = () =>{


    navigate('/profile');
  }

  return (
    <div className="navbar">
      <div className="card">
        <div className="above">
          <ul>
            <li>Deals</li>
            <li>Coupons</li>
            <li>Trams & Conditions</li>
            <li>Shipping</li>
            <li>Help Center</li>
            <li>Chat</li>
          </ul>
        </div>
        <div className="middle">
          <div className="left">
            <div className="header-name">
              <h1>Fashion</h1>
              <span>House</span>
            </div>
            <div className="search">
              <SearchOutlinedIcon />
              <input type="text" placeholder="Search...." />
            </div>
          </div>
          <div className="right">
            <div className="sign">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "orange" }}
              >
                <h1>Sign In</h1>
                <span>Email & Account</span>
              </Link>
            </div>
            <div className="review">
              <Link
                to="/review"
                style={{ textDecoration: "none", color: "orange" }}
              >
                <h1>Check Our</h1>
                <span>Products Review</span>
              </Link>
            </div>
            <div className="cart">
              <ShoppingCartOutlinedIcon style={{ fontSize: "35px" }} />
            </div>
            <div className="theme">
              <DarkModeOutlinedIcon style={{ fontSize: "35px" }} />
            </div>
          </div>
        </div>
        <div className="down">
          <div className="start">
            <img src={nav} alt="" />
          </div>
          <div className="end">
            <ul>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <HomeOutlinedIcon style={{ fontSize: "20px" }} />
              </Link>
              <Link
                to="/promotion"
                style={{ textDecoration: "none", color: "black" }}
              >
                Promotion<sup>Hot</sup>
              </Link>
              <Link
                to="/newItems"
                style={{ textDecoration: "none", color: "black" }}
              >
                New Product
              </Link>
              <Link
                to="/blogs"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blogs
              </Link>
              <Link
                to="/contactUs"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="end-right">
            <div onClick={userProfile}
              style={{
                height: "50px",
                width: "50px",
                overflow: "hidden",
                background: "#3f71cc",
                textAlign: "center",
                borderRadius: "50%",
                color: "white",
                cursor:'pointer'
              }}
            >
              {user?.photoURL ? (
                <img
                  style={{ width: 55, borderRadius: "50%" }}
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <div style={{ fontSize: "45px" }}>
                  <PermIdentityOutlinedIcon
                    style={{ fontSize: "45px", color: "black" }}
                  />
                </div>
              )}
            </div>
            {user?.email ? (
              <button
                onClick={logoutHandler}
                style={{ textDecoration: "none", color: "black", backgroundColor:"indianred", fontStyle:"italic", fontWeight:"bold", border:"none",cursor:'pointer', padding:'0px 10px'}}
              >
                Logout
              </button>
            ) : (
              <Link
                style={{ textDecoration: "none", color: "black",fontStyle:"italic", fontWeight:"bold",cursor:'pointer',display:"flex", alignItems:'center' }}
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
