import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import NeedHelp from '../../Components/NeedHelp/NeedHelp';
import Navbar from '../../Header/NavBar/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <AboutUs/>
                <NeedHelp/>
            </div>
            
        </div>
    );
};

export default Blogs;