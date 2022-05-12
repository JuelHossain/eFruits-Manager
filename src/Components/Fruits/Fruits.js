import { PlusIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import useFruits from "../../Hooks/useFruits";
import Loading from "../Shared/Loading/Loading";
import FruitCard from "./FruitCard/FruitCard";

const Fruits = ({ slice, hidden }) => {
  const [fruits] = useFruits();
  console.log(fruits);
  if (fruits.length === 0) {
    console.log(fruits);
    return <Loading></Loading>;
  } else {
    return (
      <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-xl">
        <h1 className="text-4xl text-center mb-10">Fruits-Available</h1>
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3
          2xl:grid-cols-4 gap-4 justify-items-center"
          >
            {fruits.slice(0, slice).map((fruit) => (
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
              className={`w-80 rounded border flex justify-center items-center shadow-xl hover:bg-pink-500 hover:text-white " ${hidden}`}
            >
              <Link to={"/addfruits"}>
                <PlusIcon className="h-52 mt-2p-2"></PlusIcon>
                <p className="text-2xl pt-3 font-bold">Add A Fruits</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Fruits;
