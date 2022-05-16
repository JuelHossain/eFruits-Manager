import React from 'react';
import Fruits from '../Fruits/Fruits';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner';
import Benifits from './Benifits';
import Stocks from './Stocks';

const Home = () => {
    return (
      <div className="m-10">
        <Banner></Banner>
        <Fruits slice={8} hidden='hidden'></Fruits>
        <Inventory slice={6} home={true}></Inventory>
        <Stocks></Stocks>
        <Benifits></Benifits>
      </div>
    );
};

export default Home;