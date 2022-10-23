import { ArrowCircleRightIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import TableFooter from "../Inventory/TableFooter";

const navlinks = [
  { name: "Added By You", link: "/myitems/addedbyme" },
  { name: "Updated By You", link: "/myitems/updatedbyme" }
];

const footerlinks = [
  { name: "Add Fruits", link: "/addfruits", Icon: PlusCircleIcon },
  { name: "Inventory", link: "/inventory", Icon: ArrowCircleRightIcon }
];

export default function MyItems() {
  const navLists = navlinks.map((list) => {
    const { name, link } = list;
    return (
      <NavLink
        key={link}
        to={link}
        className={({ isActive }) =>
          isActive
            ? "bg-pink-500 text-white border h-16 flex justify-center items-center w-72"
            : " flex justify-center items-center border h-16 w-72 hover:bg-pink-500 hover:text-white"
        }>
        {name}
      </NavLink>
    );
  });

  return (
    <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-xl">
      <div className="text-2xl h-16 flex justify-center items-center gap-8 mb-10">{navLists}</div>
      <table className="flex justify-center mx-auto">
        <tbody className="flex justify-center flex-col gap-2 w-full">
          <Outlet />
          <TableFooter links={footerlinks} />
        </tbody>
      </table>
    </div>
  );
}
