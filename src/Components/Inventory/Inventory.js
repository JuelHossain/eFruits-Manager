import { PlusIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import useFruits from "../../Hooks/useFruits";
import Loading from "../Shared/Loading/Loading";
import InventoryList from "./InventoryList";

const Inventory = ({ slice, hidden }) => {
  const [fruits, setFruits] = useFruits();
  //updating
  const handleRemove = (_id) => {
    const proceed = window.confirm();
    if (proceed) {
      const url = `http://localhost:5000/fruits/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
          }
        });
      setFruits(fruits.filter((fruit) => fruit._id !== _id));
    }
  };
  if (fruits.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-xl">
      <h1 className="text-4xl text-center mb-10">Available-Stocks</h1>
      <table className="flex flex-col justify-center mx-auto">
        <tbody className="flex justify-center flex-col gap-2 w-full md:overflow-auto">
          {fruits.slice(0, slice).map((fruit) => (
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
        </tbody>
        <tfoot
          className={`${hidden} w-full h-16 p-2 rounded border flex justify-center shadow-md items-center gap-3 hover:bg-pink-600 hover:text-white`}
        >
          <td>
            <Link
              to={"/addfruits"}
              className="p-4 flex justify-center items-center gap-4"
            >
              <PlusIcon className="h-7"></PlusIcon>
              <p className="text-xl font-bold">Add A Fruits In Inventory</p>
            </Link>
          </td>
        </tfoot>
      </table>
    </div>
  );
};

export default Inventory;
