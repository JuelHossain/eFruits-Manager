import React from 'react';
import banner from '../../../banner.jpg'
const Banner = () => {
    return (
      <div className="container mx-auto shadow-2xl p-20 pt-0 m-10">
        <img className='mx-auto w-full object-cover' src={banner} alt="banner" />
      </div>
    );
};

export default Banner;