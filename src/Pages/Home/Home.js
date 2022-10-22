import React from "react";
import Fruits from "../Fruits/Fruits";
import Inventory from "../Inventory/Inventory";
import Banner from "./Banner";
import Stocks from "./Stocks";

const Home = () => {
  return (
    <div className="container mx-auto my-10">
      <Banner></Banner>
      <Fruits slice={8} hidden="hidden" />
      <Inventory slice={6} home={true} />
      <Stocks />
    </div>
  );
};

export default Home;
