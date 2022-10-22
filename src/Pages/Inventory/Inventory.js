import { ArrowCircleRightIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";
import useFruits from "../../Hooks/useFruits";
import deleteFruit from "../../utils/delete";
import InventoryList from "./InventoryList";

const Inventory = ({ slice, home }) => {
  const [fruits, setFruits] = useFruits();
  const handleRemove = (id) => {
    const proceed = window.confirm();
    if (proceed) {
      deleteFruit(id);
      setFruits(fruits.filter((fruit) => fruit._id !== id));
    }
  };
  if (fruits.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div className="container m-auto text-center mt-10 mb-20 px-2 sm:px-10 py-16 shadow-xl">
      <h1 className="text-4xl text-center mb-10">Available-Stocks</h1>
      <table className="flex flex-col justify-center mx-auto gap-2">
        <tbody className="flex justify-center flex-col gap-2 w-full overflow-x-auto ">
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
        <tfoot>
          <tr className="w-full h-16 rounded border flex  justify-between shadow-md items-center ">
            <td className="w-1/2 hover:bg-pink-600 hover:text-white rounded">
              <Link
                to={"/addfruits"}
                className="p-4 flex justify-center items-center gap-4"
              >
                <PlusCircleIcon className="h-7 hidden sm:block"></PlusCircleIcon>
                <p className="md:text-xl font-bold">Add Fruits</p>
              </Link>
            </td>
            <td className="w-1/2 hover:bg-pink-600 hover:text-white border-l rounded">
              <Link
                to={"/myitems/addedbyme"}
                className="p-4 flex justify-center items-center gap-4"
              >
                <p className=" font-bold md:text-xl">My Items</p>
                <ArrowCircleRightIcon className="h-7 hidden sm:block"></ArrowCircleRightIcon>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Inventory;
