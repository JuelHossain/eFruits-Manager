import { PencilAltIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
const InventoryList = ({ _id, name, price, qty, weight, photo, remove }) => {
  // const [showConfirm, setShowConfirm] = useState(false);
  const [newPrice, setNewPrice] = useState(price);
  const [newQty, setNewQty] = useState(qty);
  const per = weight?.toLowerCase().includes("p" || "e") ? "Pcs" : "Kg";
  //reference of elements
  const plusRef = useRef();
  const minusRef = useRef();
  const plusIconRef = useRef();
  const minusIconRef = useRef();
  const priceRef = useRef();
  const priceButtonRef = useRef();
  const qtyButtonRef = useRef();
  const qtyRef = useRef();
  //updating the items
  const url = `https://efruits-management.herokuapp.com/fruits/${_id}`;
  const updatedfruit = {
    price: newPrice,
    qty: newQty,
  };
  //sending data to the server
  fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updatedfruit),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        console.log("succes");
      }
    });
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
      <td className="flex gap-2 text-left w-60">
        {/* price title  */}
        <p className="w-10">Price:</p>

        {/* price showing inside a button  */}
        <button
          className="w-12 border flex justify-start items-center"
          ref={priceButtonRef}
          onDoubleClick={() => {
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
          defaultValue={newPrice}
        />

        {/* currency per  */}
        <p>Taka {weight}</p>
      </td>

      {/* quantity  */}
      <td className="flex items-center gap-2 w-72">
        {/* quantity title  */}
        <p className="w-16">Quantity:</p>
        {/* minus button  */}
        <button
          ref={minusIconRef}
          className="w-20 border flex justify-center items-center"
          onClick={() => {
            setNewQty(parseInt(newQty) - 1);
          }}
          onDoubleClick={() => {
            setNewQty(parseInt(parseInt(newQty) + 2));
            minusRef.current.classList.remove("hidden");
            minusRef.current.focus();
            minusIconRef.current.classList.add("hidden");
          }}
        >
          Delivered
          {/* <MinusIcon className="h-5"></MinusIcon> */}
        </button>

        {/*minus input field  */}
        <input
          className="w-20 hidden outline-none appearance-none  border"
          onChange={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            }
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setNewQty(parseInt(newQty) - parseInt(e.target.value));
              minusRef.current.classList.add("hidden");
              minusIconRef.current.classList.remove("hidden");
            }
          }}
          onBlur={(e) => {
            setNewQty(parseInt(newQty) - parseInt(e.target.value));
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
          onDoubleClick={() => {
            qtyButtonRef.current.classList.add("hidden");
            qtyRef.current.classList.remove("hidden");
            qtyRef.current.focus();
          }}
        >
          {newQty}
        </button>

        {/* qty editing input field  */}
        <input
          className="w-16 hidden appearance-none outline-none border"
          onBlur={(e) => {
            qtyButtonRef.current.classList.remove("hidden");
            qtyRef.current.classList.add("hidden");
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
            setNewQty(parseInt(newQty) + 1);
          }}
          onDoubleClick={() => {
            setNewQty(parseInt(newQty - 2));
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
            }
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setNewQty(parseInt(newQty) + parseInt(e.target.value));
              plusRef.current.classList.add("hidden");
              plusIconRef.current.classList.remove("hidden");
              qtyButtonRef.current.refresh();
            }
          }}
          onBlur={(e) => {
            setNewQty(parseInt(newQty) + parseInt(e.target.value));
            plusRef.current.classList.add("hidden");
            plusIconRef.current.classList.remove("hidden");
          }}
          type="number"
          name="plus"
          ref={plusRef}
        />
        <p>{per}</p>
      </td>

      {/*Edit and delete button  */}

      <td className="flex justify-between items-center gap-4">
        <Link
          to={`/update/${_id}`}
          className="w-8 flex justify-end hover:text-red-500"
        >
          <PencilAltIcon className="h-7"></PencilAltIcon>
        </Link>
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
