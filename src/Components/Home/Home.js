import React from 'react';
import Fruits from '../Fruits/Fruits';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';

const Home = () => {
    return (
      <div className="m-10">
        <Banner></Banner>
        <Fruits slice={6} hidden='hidden'></Fruits>
        <Inventory slice={6} hidden='hidden'></Inventory>
      </div>
    );
};

export default Home;