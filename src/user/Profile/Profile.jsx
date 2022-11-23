import React from "react";
import Navbar from "../../Header/NavBar/Navbar";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import useAuth from "../../hooks/useAuth";
import './profile.scss';

const Profile = () => {
  const { user, logoutHandler } = useAuth();

  return (
 <div>
    <Navbar/>
       <div style={{ paddingTop: "40px" , paddingBottom:'60px'}} className="profile-container">
      <div
        style={{
          paddingTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="text-center border border-info p-5 m-5 rounded-pill"
      >
        <div
          style={{
            height: 55,
            width: 55,
            overflow: "hidden",
            background: "#3f71cc",
            textAlign: "center",
            borderRadius: "50%",
            color: "white",
          }}
        >
          {user?.photoURL ? (
            <img
              style={{ width: 55, borderRadius: "50%" }}
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <div style={{ fontSize: "55px" }}>
              <PermIdentityOutlinedIcon
                style={{ fontSize: "55px", color: "black" }}
              />
            </div>
          )}
        </div>
        <h2><span style={{paddingRight:'10px', fontSize:'35px'}}>Name:</span>{user.displayName}</h2>
        <h4><span style={{paddingRight:'10px', fontSize:'20px'}}>Email:</span>{user.email}</h4>
        <button
          onClick={logoutHandler}
          className="btn"
          style={{
            backgroundColor: "indianred",
            fontStyle: "italic",
            fontWeight: "bold",
            color: "black",
            padding: "15px 40px",
            cursor: "pointer",
          }}
        >
          LogOut
        </button>
      </div>
    </div>
 </div>
  );
};

export default Profile;
