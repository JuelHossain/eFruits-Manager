import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import Confirm from "../../utilites/Confirm/Confirm";
const InventoryList = ({ _id, name, price, qty, weight, photo, remove }) => {
  // const [showConfirm, setShowConfirm] = useState(false);
  const [newPrice, setNewPrice] = useState(price);
  const [newQty, setNewQty] = useState(qty);
  const per = weight?.toLowerCase().includes("p" || "e") ? "Pcs" : "Kg";
  const plusRef = useRef();
  const minusRef = useRef();
  const plusIconRef = useRef();
  const minusIconRef = useRef();
  const priceRef = useRef();
  const priceButtonRef = useRef();
  const qtyButtonRef = useRef();
  const qtyRef = useRef();

  return (
    <tr className="w-full h-16 p-2 rounded border flex justify-between shadow-md items-center gap-3">
      {/* photo */}
      <td className="flex gap-6 items-center w-42">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src={photo}
          alt={name}
        />
        {/* name  */}
        <p className=" w-28 text-left">{name}</p>
      </td>

      {/* price  */}
      <td className="flex gap-2 text-left w-48">
        {/* price title  */}
        <p className="w-10">Price:</p>

        {/* price showing inside a button  */}
        <button
          className="w-12 border flex justify-start items-center"
          ref={priceButtonRef}
          onClick={() => {
            priceRef.current.classList.remove("hidden");
            priceRef.current.focus();
            priceButtonRef.current.classList.add("hidden");
          }}
        >
          {newPrice}
        </button>

        {/* price editing input field  */}
        <input
          className="w-12 hidden appearance-none outline-none border"
          onChange={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            } else {
              setNewPrice(e.target.value);
            }
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              e.target.value = 0;
            }
          }}
          type="number"
          name="minus"
          ref={priceRef}
          defaultValue={price}
        />

        {/* currency per  */}
        <p>Taka {per}</p>
      </td>

      {/* quantity  */}
      <td className="flex items-center gap-2 w-60">
        {/* quantity title  */}
        <p className="w-16">Quantity:</p>
        {/* minus button  */}
        <button
          className="w-10 border flex justify-center items-center"
          onClick={() => {
            minusRef.current.classList.remove("hidden");
            minusRef.current.focus();
            minusIconRef.current.classList.add("hidden");
          }}
          ref={minusIconRef}
        >
          <MinusIcon className="h-5"></MinusIcon>
        </button>

        {/* minus input field  */}
        <input
          className="w-10 hidden outline-none appearance-none  border"
          onChange={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            } else {
              setNewQty(parseInt(qty) - parseInt(e.target.value));
            }
          }}
          onBlur={(e) => {
            minusRef.current.classList.add("hidden");
            minusIconRef.current.classList.remove("hidden");
          }}
          type="number"
          name="minus"
          ref={minusRef}
        />
        {/* qty showing inside a button  */}
        <button
          className="w-16 border flex justify-start items-center"
          ref={qtyButtonRef}
          onClick={() => {
            qtyRef.current.classList.remove("hidden");
            qtyRef.current.focus();
            qtyButtonRef.current.classList.add("hidden");
          }}
        >
          {newQty}
        </button>

        {/* qty editing input field  */}
        <input
          className="w-16 hidden appearance-none outline-none border"
          onBlur={(e) => {
            if (e.target.value === "") {
              e.target.value = 0;
            }
          }}
          onChange={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            } else {
              setNewQty(e.target.value);
            }
            setNewQty(e.target.value);
          }}
          type="number"
          name="minus"
          ref={qtyRef}
          defaultValue={newQty}
        />
        {/* plus button  */}
        <button
          className="w-10 border flex justify-center items-center "
          onClick={() => {
            plusRef.current.classList.remove("hidden");
            plusRef.current.focus();
            plusIconRef.current.classList.add("hidden");
          }}
          ref={plusIconRef}
        >
          <PlusIcon className="h-5"></PlusIcon>
        </button>

        {/* plus input  */}
        <input
          className="w-10 hidden appearance-none outline-none border"
          onChange={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            } else {
              setNewQty(parseInt(qty) + parseInt(e.target.value));
            }
          }}
          onBlur={(e) => {
            plusRef.current.classList.add("hidden");
            plusRef.current.value = 0;
            plusIconRef.current.classList.remove("hidden");
          }}
          type="number"
          name="plus"
          ref={plusRef}
        />
        <p>{per}</p>
      </td>

      {/* delete button  */}
      <td>
        <button
          className="w-8 flex justify-end hover:text-red-500"
          onClick={() => {
            // setShowConfirm(true);
            remove(_id);
            console.log(_id);
          }}
        >
          <TrashIcon className="h-8"></TrashIcon>
        </button>
      </td>
      {/* {showConfirm&& <Confirm></Confirm>} */}
    </tr>
  );
};

export default InventoryList;
