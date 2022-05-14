import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../../Shared/Loading/Loading";
import { ArrowCircleRightIcon, CurrencyBangladeshiIcon, PlusCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";
import { toast } from "react-toastify";

const ManageFruits = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  //styles
  const inputButton =
    "border m-2 p-3 w-96 hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-3 focus:animate-pulse";
  //getting fruit
  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `https://efruits-management.herokuapp.com/fruits/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, []);
  let { name, price, qty, photo, supplier, description, weight, delivered } =
    fruit;
  // states
  // getting fruit information

  const update = (e) => {
    e.preventDefault();
    const newFruit = {
      name: nameInput.current.value,
      price: priceInput.current.value,
      qty: qtyInputRef.current.value,
      weight: weightInput.current.value,
      photo: photoUrlRef.current.value,
      supplier: supplierRef.current.value,
      description: descriptionRef.current.value,
      delivered: deliveredRef.current.value,
      updatedBy: user?.email,
    };
    const url = `https://efruits-management.herokuapp.com/fruits/${id}`;
    //sending data to the server
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFruit),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("successfully updated");
        }
      });
  };

  //values
  const per = weight?.toLowerCase().includes("p") ? "Pcs" : "Kg";
  //reference of elements
  const nameInput = useRef();
  const priceInput = useRef();
  const weightInput = useRef();
  const minusInputRef = useRef();
  const plusInputRef = useRef();
  const minusButtonRef = useRef();
  const plusButtonRef = useRef();
  const qtyInputRef = useRef();
  const deliveredRef = useRef();
  const descriptionRef = useRef();
  const supplierRef = useRef();
  const photoUrlRef = useRef();
  //api
  if (Object.keys(fruit).length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div className=" container mx-auto text-center m-16 flex justify-center w-[1000px] flex flex-col gap-4 ">
      {/* card container  */}
      <div className="flex justify-center items-center">
        {/* left side div  */}
        <div className="flex flex-col border shadow-md justify-between items-center w-[500px] p-4 gap-2">
          {/* name  */}
          <div className="flex justify-center items-center  relative w-full h-20">
            <input
              placeholder="Name"
              ref={nameInput}
              type="text"
              className="focus:outline-none text-4xl overflow-hidden font-bold text-center border h-20"
              defaultValue={name}
            />
          </div>
          <div
            className="relative"
            onMouseOut={() => {
              photoUrlRef.current.classList.add("hidden");
            }}
            onMouseOver={() => {
              photoUrlRef.current.classList.remove("hidden");
            }}
          >
            <img
              className="w-[450px] h-[450px] object-cover"
              src={photo}
              alt=""
            />
            <input
              onBlur={(e) => {
                e.target.classList.add("hidden");
              }}
              className=" focus:outline-pink-500  hidden absolute h-36 w-[450px] border p-4 text-xl bottom-0 left-0"
              defaultValue={photo}
              ref={photoUrlRef}
              type="text"
            />
          </div>
          {/* price  */}
          <div className="flex gap-2 justify-between items-center w-full  border h-20">
            {/* price title  */}
            <p className="w-1/3 text-2xl h-full flex justify-center items-center border-r">
              Price
            </p>

            {/* price editing input field  */}
            <div className="w-1/3 text-2xl h-full flex justify-center items-center relative">
              <input
                className="w-full text-2xl appearance-none outline-none  h-full cursor-auto text-center"
                min={0}
                type="number"
                ref={priceInput}
                defaultValue={price}
              />
              <CurrencyBangladeshiIcon className="text-xl absolute bottom-6 right-8 w-6 "></CurrencyBangladeshiIcon>
            </div>

            {/* currency per  */}
            <input
              className="w-1/3 text-2xl appearance-none outline-none  h-full cursor-auto text-center border-l"
              type="text"
              ref={weightInput}
              defaultValue={weight}
            />
          </div>
        </div>

        {/* right side div  */}

        <div className="flex flex-col border shadow-md justify-between items-center w-[500px] p-4 gap-2">
          {/* quantity  */}
          <div className="flex flex-col items-center gap-2 w-full ">
            {/* quantity title  */}
            <div className="flex justify-center items-center h-20 relative w-full border text-3xl font-bold ">
              {" "}
              <p>Quantity</p>
            </div>
            <div className="flex w-full h-20 justify-center items-center">
              {/* minus button  */}
              <button
                ref={minusButtonRef}
                className="w-1/3 h-full border flex justify-center items-center text-2xl font-bold"
                onClick={() => {
                  if (qtyInputRef.current.value) {
                    qtyInputRef.current.value--;
                    deliveredRef.current.value++;
                  }
                }}
                onDoubleClick={() => {
                  if (qtyInputRef.current.value) {
                    minusInputRef.current.classList.remove("hidden");
                    minusInputRef.current.focus();
                    minusButtonRef.current.classList.add("hidden");
                    qtyInputRef.current.value =
                      parseInt(qtyInputRef.current.value) + 2;
                    deliveredRef.current.value -= 2;
                  }
                }}
              >
                Delivered
                {/* <MinusIcon className="h-5"></MinusIcon> */}
              </button>

              {/*minus input field  */}
              <input
                className="w-1/3 h-full text-center font-bold text-2xl hidden outline-none appearance-none  border"
                min={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                   minusInputRef.current.classList.add("hidden");
                   minusButtonRef.current.classList.remove("hidden");
                  }
                }}
                onBlur={(e) => {
                  qtyInputRef.current.value = parseInt(qtyInputRef.current.value) - parseInt(e.target.value);
                  if (qtyInputRef.current.value) {
                    deliveredRef.current.value =
                      parseInt(deliveredRef.current.value) +
                      parseInt(e.target.value);
                  } 
                  minusInputRef.current.classList.add("hidden");
                  minusButtonRef.current.classList.remove("hidden");
                  e.target.value = 0;
                }}
                type="number"
                ref={minusInputRef}
              />

              {/*input field  */}
              <div className="w-1/3 h-full flex justify-center items-center border relative">
                <input
                  className="w-full h-full text-2xl font-bold text-center appearance-none outline-none "
                  min={0}
                  type="number"
                  defaultValue={qty}
                  ref={qtyInputRef}
                />
                <span className="absolute right-8 font-bold">{per}</span>
              </div>

              {/* plus button  */}
              <button
                className="w-1/3 h-full border flex justify-center items-center text-2xl font-bold"
                onClick={() => {
                  qtyInputRef.current.value++;
                  if (qtyInputRef.current.value < 0) {
                    qtyInputRef.current.value = 0;
                  }
                }}
                onDoubleClick={() => {
                  if (qtyInputRef.current.value) {
                    qtyInputRef.current.value =
                      parseInt(qtyInputRef.current.value) - 2;
                  }
                  plusInputRef.current.classList.remove("hidden");
                  plusInputRef.current.focus();
                  plusButtonRef.current.classList.add("hidden");
                }}
                ref={plusButtonRef}
              >
                Restock
                {/* <PlusIcon className="h-full p-5"></PlusIcon> */}
              </button>

              {/* plus input  */}
              <input
                className="w-1/3 h-full text-center font-bold text-2xl hidden outline-none appearance-none  border"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    plusInputRef.current.classList.add("hidden");
                    plusButtonRef.current.classList.remove("hidden");
                  }
                }}
                onBlur={(e) => {
                  qtyInputRef.current.value =
                    parseInt(qtyInputRef.current.value) +
                    parseInt(e.target.value);
                  plusInputRef.current.classList.add("hidden");
                  plusButtonRef.current.classList.remove("hidden");
                  e.target.value = 0;
                }}
                min={0}
                type="number"
                ref={plusInputRef}
              />
            </div>
            <div className="flex justify-center items-center h-20 relative w-full border text-xl font-bold ">
              <p className="text-xl font-bold ">
                Total Delivered:{" "}
                <input
                  className="w-20 text-xl focus:outline-none"
                  type="number"
                  ref={deliveredRef}
                  defaultValue={delivered}
                  readOnly
                />
              </p>
            </div>
            <div className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 ">
              Supplied By:{" "}
              <input
                className=" w-40 text-xl focus:outline-none "
                type="text"
                ref={supplierRef}
                defaultValue={supplier}
              />
            </div>
            <textarea
              defaultValue={description}
              ref={descriptionRef}
              className=" resize-none h-[11.6rem] w-full p-2 text-lg focus:outline-none border"
            ></textarea>
          </div>
          <button
            className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 hover:bg-pink-600 hover:text-white"
            onClick={update}
          >
            Update
          </button>
        </div>
      </div>

      {/* footer buttons  */}
      <div className="w-full h-16 rounded border flex  justify-between shadow-md items-center ">
        <div className="w-1/2 hover:bg-pink-600 hover:text-white rounded">
          <Link
            to={"/addfruits"}
            className="p-4 flex justify-center items-center gap-4"
          >
            <PlusCircleIcon className="h-7"></PlusCircleIcon>
            <p className="text-xl font-bold">Add A Fruits In Inventory</p>
          </Link>
        </div>
        <div className="w-1/2 hover:bg-pink-600 hover:text-white border-l rounded">
          <Link
            to={"/inventory"}
            className="p-4 flex justify-center items-center gap-4"
          >
            <p className="text-xl font-bold">Go To Inventory</p>
            <ArrowCircleRightIcon className="h-7"></ArrowCircleRightIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageFruits;
