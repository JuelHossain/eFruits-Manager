import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";

const InventoryList = ({ name, price, qty, weight, photo, supplier }) => {
  const per = weight?.toLowerCase().includes("p" || "e") ? "Pcs" : "Kg";
  return (
    <div className="w-full h-16 p-2 rounded border flex justify-between shadow-2xl items-center">
      {/* photo and name */}
      <div className="flex w-92 items-center justify-start gap-6">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src={photo}
          alt={name}
        />
        <p className=" w-24 text-left">{name}</p>
      </div>

      {/* name price quantity  */}
      <div className="flex justify-start w-[300px] gap-8">

        {/* price  */}
        <p className="w-42 text-left">
          Price: {price} Taka {per}
        </p>
        {/* quantity  */}

        <div className="w-42  justify-start flex items-center gap-1">
          <p className="">Quantity:</p>
          <button className="w-4 h-4 border">
            <MinusIcon></MinusIcon>
          </button>
          <p>{qty}</p>
          <button className="w-1/9 h-4 border">
            <PlusIcon></PlusIcon>
          </button>
          <p>{per}</p>
        </div>
      </div>

      {/* delete button  */}
      <button className="w-6 flex justify-end">
        <TrashIcon className="h-8"></TrashIcon>
      </button>
    </div>
  );
};

export default InventoryList;
