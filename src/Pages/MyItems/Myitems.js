import { ArrowCircleRightIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function MyItems() {
  // up

  return (
    <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-xl">
      <div className="text-2xl h-16 flex justify-center items-center gap-8 mb-10">
        <NavLink
          to="/myitems/addedbyme"
          className={({ isActive }) =>
            isActive
              ? "bg-pink-500 text-white border h-16 flex justify-center items-center w-72"
              : " flex justify-center items-center border h-16 w-72 hover:bg-pink-500 hover:text-white"
          }>
          Added By You
        </NavLink>
        <NavLink
          to="/myitems/updatedbyme"
          className={({ isActive }) =>
            isActive
              ? "bg-pink-500 text-white border h-16 flex justify-center items-center w-72"
              : "flex justify-center items-center border h-16 w-72 hover:bg-pink-500 hover:text-white"
          }>
          Updated By You
        </NavLink>
      </div>
      <table className="flex justify-center mx-auto">
        <tbody className="flex justify-center flex-col gap-2 w-full">
          <Outlet />
          <tfoot>
            <tr className="w-full h-16 rounded border flex  justify-between shadow-md items-center ">
              <td className="w-1/2 hover:bg-pink-600 hover:text-white rounded">
                <Link to="/addfruits" className="p-4 flex justify-center items-center gap-4">
                  <PlusCircleIcon className="h-7 hidden sm:block" />
                  <p className="md:text-xl font-bold">Add Fruits</p>
                </Link>
              </td>
              <div className="w-1/2 hover:bg-pink-600 hover:text-white border-l rounded">
                <Link to="/inventory" className="p-4 flex justify-center items-center gap-4">
                  <p className=" font-bold md:text-xl">Inventory</p>
                  <ArrowCircleRightIcon className="h-7 hidden sm:block" />
                </Link>
              </div>
            </tr>
          </tfoot>
        </tbody>
      </table>
    </div>
  );
}
