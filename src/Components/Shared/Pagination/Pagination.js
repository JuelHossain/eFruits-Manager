import React, { useState } from 'react';
import useCount from '../../../Hooks/useCount';

const Pagination = ({hidden}) => {
      const [size, setSize] = useState(6);
      const [pageCount] = useCount(size);
      const [page, setPage] = useState(0);
    return (
        <div className={`h-16 bg-stone-900 flex justify-between items-center rounded-lg ${hidden}`}>
          {[...Array(pageCount).keys()].map((number) => (
            <button key={number}
              onClick={() => {
                setPage(number);
              }}
              className={page === number ? "bg-pink-500 border-l text-white font-bold text-2xl w-full h-full w-full " : "border-l text-white font-bold text-2xl w-full h-full hover:bg-pink-500"}>{number+1}</button>
            
          ))}<select className="w-1/4 h-full bg-stone-500 text-white font-bold text-2xl focus:outline-none text-center "
            onChange={e => {
              setSize(e.target.value);
            }}
            defaultValue={6}
          >
            <option value="6" >6</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>
    )
};

export default Pagination;