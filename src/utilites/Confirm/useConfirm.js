import React from 'react';

const Confirm = ({ message, send,}) => {
    return (
        <div  className={ `fixed left-0 top-0 w-full h-full bg-stone-100/30 overflow-hidden z-2 flex justify-center items-center`
}>
            <div className=" flex flex-col w-96 h-28 bg-stone-900 mx-auto  rounded-2xl shadow-xl items-center justify-center gap-2">
                <p className="text-stone-200 text-xl font-bold ">{ message}</p>
        <div className="flex justify-center items-center gap-4">
                <button className='bg-green-500 text-white  w-20 h-10 rounded-lg hover:opacity-60 font-semibold' onClick={() => {
                        send(false);
          }}>No</button>
                <button className='bg-red-500 text-white  w-20 h-10 rounded-lg hover:opacity-60 font-semibold' onClick={() => {
                        send(true);
          }} >Yes</button>
        </div>
      </div>
        </div>
    )
};

export default Confirm;