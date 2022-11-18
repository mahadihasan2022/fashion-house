import React from "react";
import useAuth from "../hooks/useAuth";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Navbar from "../Header/NavBar/Navbar";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div>
        <Navbar/>
      <div className="text-center border border-info p-5 m-5 rounded-pill">
        <h4>{user.displayName}</h4>
        <p>{user.email}</p>
        <div style={{ height: 55, width: 55, overflow: 'hidden', background: '#3f71cc', textAlign: 'center', borderRadius: '50%', color: 'white' }}>
                        {
                            user?.photoURL ?
                                <img style={{ width: 55, borderRadius: '50%' }} src={user?.photoURL} alt="" />
                                :
                                <div style={{ fontSize: '50px' }}>
                                    <AccountCircleOutlinedIcon style={{fontSize:"50px"}}/>
                                </div>
                        }
                    </div>
       
      </div>
    </div>
  );
};

export default UserProfile;
