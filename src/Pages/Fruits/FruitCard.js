import { CurrencyBangladeshiIcon } from "@heroicons/react/outline";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";

export default function FruitCard({ _id, name, price, qty, weight, photo, supplier, description }) {
  const [user] = useAuthState(auth);
  return (
    <div className="p-2 rounded border flex-col space-between shadow-xl  ">
      {/* photo and name */}
      <div className="relative h-52 border rounded">
        <img className="rounded w-full h-full object-cover " src={photo} alt={name} />
        <p className="absolute h-14 bottom-0 w-full bg-stone-900 flex items-center justify-center text-2xl opacity-50 text-white font-semibold">
          {name}
        </p>
      </div>
      {/* weight price quantity */}
      <div className="flex my-1 border justify-between items-center rounded ">
        <p className="w-2/6 text-xl border-r h-12 flex items-center justify-center">
          {weight || "1kg"}
        </p>
        <p className="w-2/6 text-xl border-r h-12 flex items-center justify-center ">
          {price}
          <CurrencyBangladeshiIcon className="w-4 inline" />
        </p>
        <p className="w-2/6 text-xl h-12 flex items-center justify-center">
          {qty}
          <small>{weight?.toLowerCase().includes("p" || "e") ? "pcs" : "kg"}</small>
        </p>
      </div>
      {/* supplier and description  */}
      <div>
        <p className=" rounded h-12 flex items-center justify-center border text-lg">
          Supplier: {supplier}
        </p>
        <p className="text-left px-1 text-justify h-28 overflow-hidden hover:overflow-auto border my-1 rounded snap-stop">
          {description}
        </p>
      </div>
      {user && (
        <Link
          to={`/update/${_id}`}
          className="bg-pink-500 w-full flex - items-center justify-center h-12 text-white font-semibold text-xl rounded hover:bg-amber-600 ">
          Manage
        </Link>
      )}
    </div>
  );
}
