import React from 'react';
import Confirm from '../../utilites/Confirm/Confirm';
import Fruits from '../Fruits/Fruits';
import Banner from './Banner/Banner';

const Home = () => {
    return (
      <div className="m-10">
        <button onClick={()=><Confirm></Confirm>}>show</button>
        <Banner></Banner>
        <Fruits></Fruits>

        <Confirm></Confirm>
      </div>
    );
};

export default Home;