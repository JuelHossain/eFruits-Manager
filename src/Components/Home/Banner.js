import React from "react";
import banner from "../../banner.jpg";
const Banner = () => {
  return (
    <div className="container mx-auto shadow-xl p-2">
      <img className="mx-auto w-full object-cover" src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
