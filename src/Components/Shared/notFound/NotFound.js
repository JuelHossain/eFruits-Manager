import React from 'react';
import error from './5203299.jpg'

const NotFound = () => {
    return (
            <div className=" container mx-auto text-center m-20 ">
            <div className=" mx-auto p-10 w-full h-[600px] shadow-xl flex justify-center items-center ">
                <img className='w-auto h-full' src={error} alt="" />
                    
      </div>
        </div>
    );
};

export default NotFound;