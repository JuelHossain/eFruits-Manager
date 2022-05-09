import React from 'react';

const FruitCard = ({name,price,qty,photo,supplier,description}) => {
    return (
      <div className="w-80 p-2 rounded border flex-col space-between shadow-2xl">
        <div className='relative h-72 border rounded'>
          <img className='w-full h-full object-cover' src={photo} alt={name} />
          <p className="absolute bottom-0 w-full bg-stone-500 p-2 text-2xl opacity-40 text-white font-semibold">{name}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='w-3/5 text-xl border p-2'>Price: {price}</p>
          <p className='w-2/5 text-xl border p-2'>{qty}</p>
            </div>
            <div >
                <p className=' rounded p-2 border text-lg'>Supplier: {supplier}</p>
                <p className='text-left p-2 text-justify'>{description.substr(0,100)}</p>
            </div>
            <button className='bg-pink-500 w-full p-2 text-white font-semibold text-xl rounded hover:bg-amber-600'>Manage</button>
      </div>
    );
};

export default FruitCard;