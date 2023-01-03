import React from 'react';
import Carouselimg from '../Carouselpalyer/Carouselimg';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {
    return (
        <div className='home-section'>
           <Carouselimg></Carouselimg>
            <HomeDetails></HomeDetails>
        </div>
    );
};

export default Home;