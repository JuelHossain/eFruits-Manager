import React, { useRef, useState } from 'react';

const Confirm = () => {
    const [confirm, setConfirm] = useState(false);
    const confirmRef = useRef()
    return (
        <div ref={confirmRef} className='fixed left-0 top-0 w-full h-full bg-stone-100 overflow-hidden z-2 flex justify-center items-center'>
            <div className=" flex flex-col w-96 h-28 bg-stone-900 mx-auto  rounded-2xl shadow-xl items-center justify-center gap-2">
        <p className="text-stone-200 text-xl font-bold ">Are You Sure?</p>
        <div className="flex justify-center items-center gap-4">
                <button className='bg-green-500 text-white  w-20 h-10 rounded-lg hover:opacity-60 font-semibold' onClick={() => {
                        confirmRef.current.classList.add('hidden');
                        setConfirm(true);
          }}>No</button>
                <button className='bg-red-500 text-white  w-20 h-10 rounded-lg hover:opacity-60 font-semibold' onClick={() => {
                    confirmRef.current.classList.add("hidden");
                    setConfirm(false);
          }} >Yes</button>
        </div>
      </div>
        </div>
    );
};

export default Confirm;