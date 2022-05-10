import React from 'react';
import Fruits from '../Fruits/Fruits';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='m-10'>
            <Banner></Banner>
            <Fruits></Fruits>
        </div>
    );
};

export default Home;