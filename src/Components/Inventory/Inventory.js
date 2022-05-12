import { PlusIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import useFruits from "../../Hooks/useFruits";
import InventoryList from "./InventoryList";

const Inventory = () => {
  const [fruits, setFruits] = useFruits();
  //updating 
  
  const handleRemove = (_id) => {
    const proceed = window.confirm();
    if (proceed) {
      const url = `http://localhost:5000/fruits/${_id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
          console.log("deleted successfully")
          }
        });
      setFruits(fruits.filter(fruit => fruit._id !== _id));

    }
  }
  console.log(fruits);
  return (
    <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-2xl">
      <h1 className="text-4xl text-center mb-10">Available Stocks</h1>
      <table className="flex justify-center mx-auto">
        <tbody className="flex justify-center flex-col gap-2 w-full">
          {fruits.map((fruit) => (
            <InventoryList
              key={fruit._id}
              _id={fruit._id}
              name={fruit.name}
              price={fruit.price}
              qty={fruit.qty}
              photo={fruit.photo}
              supplier={fruit.supplier}
              description={fruit.description}
              weight={fruit.weight}
              remove={handleRemove}
            ></InventoryList>
          ))}
          <tr className="w-full h-16 p-2 rounded border flex justify-center shadow-md items-center gap-3 hover:bg-pink-600 hover:text-white">
            <Link to={"/addfruits"} className="p-4 flex justify-center items-center gap-4">
              <PlusIcon className="h-7"></PlusIcon>
              <p className="text-xl font-bold">Add A Fruits In Inventory</p>
            </Link>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
