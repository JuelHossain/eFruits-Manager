import React from 'react';
import Fruits from '../Fruits/Fruits';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='text-center m-20'>
            <Banner></Banner>
            <Fruits></Fruits>
        </div>
    );
};

export default Home;