import React from 'react';
import './Community.scss';
import { AiTwotoneHeart } from "react-icons/ai";
import Navbar from '../../Header/NavBar/Navbar';

const Community = () => {
    return (
 
     <div>
           <Navbar/>
        <div className='community'>
            <h1>Our Community</h1>
            <div className='community-container'>
                <div className='container'>
                    <h2>367k+</h2>
                    <h3>Subscribes</h3>
                </div>
                <div className='container'>
                    <h2>763M+</h2>
                    <p>  <AiTwotoneHeart/></p>

                </div>
                <div className='container'>
                    <h2>176M+</h2>
                    <h3>Followers</h3>
                </div>
            </div>
        </div>
     </div>

);
};

export default Community;