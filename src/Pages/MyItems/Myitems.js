import {
  ArrowCircleRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
const Myitems = () => {
  //up

  return (
    <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-xl">
      <div className="text-2xl h-16 flex justify-center items-center gap-8 mb-10">
        <NavLink
          to={"/myitems/addedbyme"}
          className={({ isActive }) =>
            isActive
              ? "bg-pink-500 text-white border h-16 flex justify-center items-center w-72"
              : " flex justify-center items-center border h-16 w-72 hover:bg-pink-500 hover:text-white"
          }
        >
          Added By You
        </NavLink>
        <NavLink
          to={"/myitems/updatedbyme"}
          className={({ isActive }) =>
            isActive
              ? "bg-pink-500 text-white border h-16 flex justify-center items-center w-72"
              : "flex justify-center items-center border h-16 w-72 hover:bg-pink-500 hover:text-white"
          }
        >
          Updated By You
        </NavLink>
      </div>
      <table className="flex justify-center mx-auto">
        <tbody className="flex justify-center flex-col gap-2 w-full">
          <Outlet />
          <tr className="w-full h-16 rounded border flex  justify-between shadow-md items-center gap-2">
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
              <Link
                to={"/inventory"}
                className="p-4 flex justify-center items-center gap-4"
              >
                <p className="text-xl font-bold">Go To Inventory</p>
                <ArrowCircleRightIcon className="h-7"></ArrowCircleRightIcon>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Myitems;
