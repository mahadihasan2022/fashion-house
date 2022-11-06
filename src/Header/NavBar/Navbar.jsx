import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutLinedIcon from "@mui/icons-material/WbSunnyOutlined";
import nav from "../../images/nav.svg";
import "./navbar.scss";
import { Link } from "react-router-dom";







const Navbar = () => {
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
            <Link to="/login" style={{textDecoration:"none", color:"orange"}}><h1>Sign In</h1>
            <span>Email & Account</span></Link>
        </div>
        <div className="review">
            <Link to="/review" style={{textDecoration:"none", color:"orange"}}><h1>Check Our</h1>
            <span>Products Review</span></Link>
        </div>
        <div className="cart">
            <ShoppingCartOutlinedIcon style={{fontSize:"35px"}}/>
        </div>
        <div className="theme">
            <DarkModeOutlinedIcon style={{fontSize:"35px"}}/>
        </div>
      </div>
        </div>
        <div className="down">
            <div className="start">
        <img src={nav} alt="" />
            </div>
            <div className="end">
                <ul>
                    <li>Home</li>
                    <li>Promotion<sup>Hot</sup></li>
                    <li>New Product</li>
                    <li>Blogs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
