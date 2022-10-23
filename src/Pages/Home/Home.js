import React from "react";
import Fruits from "../Fruits/Fruits";
import Inventory from "../Inventory/Inventory";
import Banner from "./Banner";
import Stocks from "./Stocks";

export default function Home() {
  return (
    <div className="container mx-auto my-10">
      <Banner />
      <Fruits slice={8} hidden="hidden" />
      <Inventory slice={6} home />
      <Stocks />
    </div>
  );
}
