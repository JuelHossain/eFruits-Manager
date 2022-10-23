import { MenuAlt3Icon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav({ ...props }) {
  const [open, setOpen] = useState(false);
  // style
  const navstyle = "p-1  hover:text-orange-400 text-xl";
  const activestyle = "p-1 text-orange-400 text-xl";
  return (
    <div>
      <div className="md:hidden  relative">
        <button
          type="button"
          className="flex justify-center items-center"
          onClick={() => {
            setOpen(!open);
          }}>
          <MenuAlt3Icon className="w-7" />
        </button>
        {open && (
          <div className="absolute top-12 left-0 border bg-stone-900 w-28  flex flex-col ease-in-out duration-500">
            <Link
              to="/home"
              onClick={() => {
                setOpen(false);
              }}
              className="hover:bg-rose-500 p-2 border-b">
              Home
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="hover:bg-rose-500 p-2 border-b "
              to="/fruits">
              {" "}
              Fruits
            </Link>
            <Link
              onClick={() => {
                setOpen(false);
              }}
              className="hover:bg-rose-500 p-2 border-b"
              to="/inventory">
              inventory
            </Link>
          </div>
        )}
      </div>
      <nav {...props} className="hidden md:flex gap-3 ">
        <NavLink to="/" className={({ isActive }) => (isActive ? activestyle : navstyle)}>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? activestyle : navstyle)} to="/fruits">
          Fruits
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${activestyle}` : `${navstyle}`)}
          to="/inventory">
          Inventory
        </NavLink>
      </nav>
    </div>
  );
}
