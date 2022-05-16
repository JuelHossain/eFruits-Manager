import { PlusIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCount from "../../Hooks/useCount";
import useFruits from "../../Hooks/useFruits";
// import useFruits from "../../Hooks/useFruits";
import Loading from "../Shared/Loading/Loading";
import FruitCard from "./FruitCard";

const Fruits = ({ slice, hidden }) => {
  const [size, setSize] = useState(12);
  const [pageCount] = useCount(size);
  const [page, setPage] = useState(0);
  const [fruits] = useFruits(page, slice?slice:size);
 
  if (fruits.length === 0) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-xl">
        <h1 className="text-4xl text-center mb-10">Fruits-Available</h1>
        <div className="flex flex-col justify-center gap-8">
          <div
            className="grid grid-cols-1 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
          2xl:grid-cols-4 gap-4 justify-items-center"
          >
            {fruits.map((fruit) => (
              <FruitCard
                key={fruit._id}
                _id={fruit._id}
                name={fruit.name}
                price={fruit.price}
                qty={fruit.qty}
                photo={fruit.photo}
                supplier={fruit.supplier}
                description={fruit.description}
                weight={fruit.weight}
              ></FruitCard>
            ))}
            <div
              className={`w-full rounded border flex justify-center items-center shadow-xl hover:bg-pink-500 hover:text-white ${hidden}`}
            >
              <Link to={"/addfruits"}>
                <PlusIcon className="h-full w-full p-20"></PlusIcon>
                {/* <p className="text-2xl pt-3 font-bold">Add A Fruits</p> */}
              </Link>
            </div>
          </div>
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
            defaultValue={size}
          >
            <option value="6" >6</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>
        </div>
      </div>
    );
  }
};
export default Fruits;
