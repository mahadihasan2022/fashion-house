import React from 'react';
import LeftBar from '../../Header/LeftBar/LeftBar';
import Navbar from '../../Header/NavBar/Navbar';
import RightBar from '../../Header/RightBar/RightBar';
import Home from '../Home/Home';

const HomeIndex = () => {
    return (
        <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Home />
          </div>
          <RightBar />
        </div>
      </div>
    );
};

export default HomeIndex;