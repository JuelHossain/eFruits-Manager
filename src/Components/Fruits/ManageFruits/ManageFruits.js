import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowCircleDownIcon, ArrowCircleUpIcon, RefreshIcon } from "@heroicons/react/outline";
const ManageFruits = () => {
  //styles
  const span="text-left absolute left-[300px] bottom-6 opacity-50"
  const inputStyle = "border m-2 p-3 w-96 focus:outline-0 focus:animate-pulse pr-28";
  const inputButton =
    "border m-2 p-3 w-96 hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-3 focus:animate-pulse";
  //updating
  const updateFruits = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/fruits/${id}`;
    const updatedname = e.target.name.value;
    const updatedprice = e.target.price.value;
    const updatedphoto = e.target.photo.value;
    const updatedqty = e.target.quantity.value;
    const updatedweight = e.target.weight.value;
    const updatedsupplier = e.target.supplier.value;
    const updateddescription = e.target.description.value;
    const updatedfruit = {
      name: updatedname,
      price: updatedprice,
      photo: updatedphoto,
      qty: updatedqty,
      weight: updatedweight,
      supplier: updatedsupplier,
      description: updateddescription,
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
        console.log("success", data);
        e.target.reset();
      });
  };
  const { id } = useParams();
  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/fruits/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  });
  const { name, price, qty, photo, supplier, description, weight } = fruit;

  return (
    <div className=" container mx-auto text-center m-20 flex justify-center">
      <div className="flex flex-col border shadow-xl justify-center items-center">
        {" "}
        <p className="text-8xl font-bold">{name}</p>
        <img className="" src={photo} alt="" />
      </div>
      <div className=" p-6 w-[500px] h-[700px] shadow-2xl flex flex-col gap-2 justify-center items-center ">
        <p className="m-2 text-xl text-pink-600">Update Fruit Information</p>

        <form
          required
          className="flex flex-col text-center"
          onSubmit={updateFruits}
        >
          <div className="relative">
            <input
              className={inputStyle}
              name="name"
              placeholder="Name"
              defaultValue={name}
            />
            <span className={span}>Name</span>
          </div>
          <div className="relative">
            <input
              className={inputStyle}
              type="number"
              name="price"
              placeholder="Price"
              defaultValue={price}
            />
            <span className={span}>Price</span>
          </div>
          <div className="relative">
            <input
              className={inputStyle}
              type="number"
              name="quantity"
              placeholder="Quantity"
              defaultValue={qty}
            />
            <span className={span}>Quantity</span>
          </div>
          <div className="relative">
            <input
              className={inputStyle}
              type="text"
              name="weight"
              placeholder="Weight"
              defaultValue={weight}
            />
            <span className={span}>Weight</span>
          </div>
          <div className="relative">
            <input
              className={inputStyle}
              name="photo"
              placeholder="Photo-Url"
              defaultValue={photo}
            />
            <span className={span}>PhotoURL</span>
          </div>
          <div className="relative">
            <input
              className={inputStyle}
              name="supplier"
              placeholder="Supplier Name"
              defaultValue={supplier}
            />
            <span className={span}>Supplier</span>
          </div>
          <div className="relative ">
            <input
              className={[inputStyle]}
              type="textArea"
              name="description"
              placeholder="Description"
              defaultValue={description}
            />
            <span className={span}>Description</span>
          </div>
          <input className={inputButton} type="submit" value="Update Fruit" />
          <Link className={inputButton} to={"/inventory"}>Go to Inventory <br />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ManageFruits;
