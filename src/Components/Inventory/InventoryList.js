import {
  MinusIcon,
  PencilAltIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase";
const InventoryList = ({ _id, name, price, qty, weight, photo, remove }) => {
  const [user] = useAuthState(auth);
  // const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const [newPrice, setNewPrice] = useState(price);
  const [newQty, setNewQty] = useState(qty);
  const per = weight?.toLowerCase().includes("p") ? "Pcs" : "Kg";
  //reference of elements
  const plusInputRef = useRef();
  const minusInputRef = useRef();
  const plusButtonRef = useRef();
  const minusButtonRef = useRef();
  const priceInputRef = useRef();
  const qtyInputRef = useRef();

  // updated fruit
  const updatedfruit = {
    price: newPrice,
    qty: newQty,
  };

  //sending data to the server
  //server api
  const url = `https://efruits-management.herokuapp.com/fruits/${_id}`;
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

        {/* price editing input field  */}
        <input
          className="w-12 appearance-none outline-none border cursor-auto"
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
          onDoubleClick={(e) => {
            user ? (e.target.readOnly = false) : navigate("/login");
          }}
          type="number"
          name="minus"
          ref={priceInputRef}
          defaultValue={newPrice}
          readOnly
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
          ref={minusButtonRef}
          className="w-10 border flex justify-center items-center"
          onClick={() => {
            user ? setNewQty(parseInt(newQty) - 1) : navigate("/login");
          }}
          onDoubleClick={() => {
            setNewQty(parseInt(parseInt(newQty) + 2));
            minusInputRef.current.classList.remove("hidden");
            minusInputRef.current.focus();
            minusButtonRef.current.classList.add("hidden");
          }}
        >
          <MinusIcon className="h-5"></MinusIcon>
        </button>

        {/*minus input field  */}
        <input
          className="w-10 hidden outline-none appearance-none  border"
          onChange={(e) => {
            if (e.target.value < 0) {
              e.target.value = 0;
            }
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setNewQty(parseInt(newQty) - parseInt(e.target.value));
              minusInputRef.current.classList.add("hidden");
              minusButtonRef.current.classList.remove("hidden");
            }
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              e.target.value = 0;
            }
            setNewQty(parseInt(newQty) - parseInt(e.target.value));
            minusInputRef.current.classList.add("hidden");
            minusButtonRef.current.classList.remove("hidden");
          }}
          type="number"
          name="minus"
          ref={minusInputRef}
        />

        {/* qty editing input field  */}
        <input
          className="w-14  appearance-none outline-none border cursor-auto"
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
          onDoubleClick={(e) => {
            user ? (e.target.readOnly = false) : navigate("/login");
          }}
          type="number"
          name="minus"
          ref={qtyInputRef}
          value={newQty}
          readOnly
        />
        {/* plus button  */}
        <button
          className="w-10 border flex justify-center items-center "
          onClick={() => {
            user ? setNewQty((q) => parseInt(q) + 1) : navigate("/login");
          }}
          onDoubleClick={() => {
            setNewQty((q) => parseInt(q - 2));
            plusInputRef.current.classList.remove("hidden");
            plusInputRef.current.focus();
            plusButtonRef.current.classList.add("hidden");
          }}
          ref={plusButtonRef}
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
              plusInputRef.current.classList.add("hidden");
              plusButtonRef.current.classList.remove("hidden");
            }
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              e.target.value = 0;
            }
            setNewQty(parseInt(newQty) + parseInt(e.target.value));
            plusInputRef.current.classList.add("hidden");
            plusButtonRef.current.classList.remove("hidden");
          }}
          type="number"
          name="plus"
          ref={plusInputRef}
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
            user ? remove(_id) : navigate("/login");
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
