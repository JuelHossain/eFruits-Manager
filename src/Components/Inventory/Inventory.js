
import { ArrowCircleRightIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import useFruits from "../../Hooks/useFruits";
import Confirm from "../../utilites/Confirm/useConfirm";
import deleteFruit from "../../utilites/delete";
import Loading from "../Shared/Loading/Loading";
import InventoryList from "./InventoryList";

const Inventory = ({ slice, home }) => {
  const [fruits, setFruits] = useFruits();
  // const [confirm, setConfirm] = useState({
  //   message: '',
  //   hidden: false,
  //   received: false
  // })
  // const received = value => {
  //   console.log(value);
  //   value ?
  //     setConfirm({
  //       hidden: false,
  //       received: true
  //     }) : setConfirm({ hidden: false });
  // }
  //updating
  const  handleRemove = (id) => {
    // setConfirm({
    //   message: 'Are You sure?',
    //   hidden: true
    // });
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
    <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-xl">
      <h1 className="text-4xl text-center mb-10">Available-Stocks</h1>
      <table className="flex flex-col justify-center mx-auto gap-2">
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
        <tfoot className="w-full h-16 rounded border flex  justify-between shadow-md items-center">
          <tr className="w-full h-full flex justify-center items-center">
            <td className="w-1/2 hover:bg-pink-600 hover:text-white rounded">
              <Link
                to={"/addfruits"}
                className="p-4 flex justify-center items-center gap-4"
              >
                <PlusCircleIcon className="h-7"></PlusCircleIcon>
                <p className="text-xl font-bold">Add A Fruits In Inventory</p>
              </Link>
            </td>
            <td className="w-1/2 hover:bg-pink-600 hover:text-white border-l rounded">
              {home ? (
                <Link
                  to={"/inventory"}
                  className="p-4 flex justify-center items-center gap-4"
                >
                  <p className="text-xl font-bold">Go To Inventory</p>
                  <ArrowCircleRightIcon className="h-7"></ArrowCircleRightIcon>
                </Link>
              ) : (
                <Link
                  to={"/myitems/addedbyme"}
                  className="p-4 flex justify-center items-center gap-4"
                >
                  <p className="text-xl font-bold">Go To Your Items</p>
                  <ArrowCircleRightIcon className="h-7"></ArrowCircleRightIcon>
                </Link>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
      {/* {confirm.hidden && <Confirm message={confirm.message} send={received}></Confirm> } */}
    </div>
  );
};

export default Inventory;
