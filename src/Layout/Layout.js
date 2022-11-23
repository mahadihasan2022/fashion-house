import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftBar from '../Header/LeftBar/LeftBar';
import Navbar from '../Header/NavBar/Navbar';
import RightBar from '../Header/RightBar/RightBar';

const Layout = () => {
    return (
        <div>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      );
    };

export default Layout;