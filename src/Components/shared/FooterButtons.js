import React from "react";
import { Link } from "react-router-dom";

import { ArrowCircleRightIcon, PlusCircleIcon } from "@heroicons/react/solid";

export default function FooterButtons() {
  return (
    <div className="w-full h-16 rounded border flex  justify-between shadow-md items-center ">
      <div className="w-1/2 hover:bg-pink-600 hover:text-white rounded">
        <Link to="/addfruits" className="p-4 flex justify-center items-center gap-4">
          <PlusCircleIcon className="h-7" />
          <p className="md:text-xl font-bold">Add A Fruits</p>
        </Link>
      </div>
      <div className="w-1/2 hover:bg-pink-600 hover:text-white border-l rounded">
        <Link to="/inventory" className="p-4 flex justify-center items-center gap-4">
          <p className=" font-bold md:text-xl">Inventory</p>
          <ArrowCircleRightIcon className="h-7" />
        </Link>
      </div>
    </div>
  );
}
