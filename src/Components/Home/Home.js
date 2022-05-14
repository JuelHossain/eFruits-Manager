import React from 'react';
import Fruits from '../Fruits/Fruits';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';
import Benifits from './Benifits/Benifits';
import Stocks from './StocksChart/Stocks';

const Home = () => {
    return (
      <div className="m-10">
        <Banner></Banner>
        <Fruits slice={6} hidden='hidden'></Fruits>
        <Inventory slice={6} home={true}></Inventory>
        <Stocks></Stocks>
        <Benifits></Benifits>
      </div>
    );
};

export default Home;