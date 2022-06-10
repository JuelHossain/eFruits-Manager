import React from "react";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="container mx-auto shadow-xl p-2">
      <img className="w-full h-full object-cover " src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
