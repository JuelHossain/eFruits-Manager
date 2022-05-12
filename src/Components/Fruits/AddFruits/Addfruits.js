import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase";
const Addfruits = () => {
  const [user] = useAuthState(auth);
  //styles
  const inputStyle = "border m-2 p-3 w-96 focus:outline-0 focus:animate-pulse";
  const inputButton =
    "border m-2 p-3 w-96 hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-3 focus:animate-pulse";
  const addFruits = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const photo = e.target.photo.value;
    const qty = e.target.quantity.value;
    const weight = e.target.weight.value;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;
    const addedBy = user.email;
    const fruit = {
      name,
      price,
      photo,
      qty,
      weight,
      supplier,
      description,
      addedBy,
    };

    //sending data to the server
    fetch("https://efruits-management.herokuapp.com/fruits", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fruit),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Fruit Has Been Added To The Inventory");
        e.target.reset();
      });
  };
  return (
    <div className=" container mx-auto text-center m-20">
      <div className=" mx-auto p-6 w-[500px] h-[700px] shadow-xl flex flex-col gap-2 justify-center items-center ">
        <p className="m-2 text-xl text-pink-600">Add Fruit to Inventory</p>
        <form
          required
          className="flex flex-col text-center"
          onSubmit={addFruits}
        >
          <input
            className={inputStyle}
            name="name"
            placeholder="Name"
            required
          />
          <input
            className={inputStyle}
            type="number"
            name="price"
            placeholder="Price"
          />

          <input
            className={inputStyle}
            type="number"
            name="quantity"
            placeholder="Quantity"
          />
          <input
            className={inputStyle}
            type="text"
            name="weight"
            placeholder="Weight"
          />
          <input
            className={inputStyle}
            name="photo"
            placeholder="Photo-Url"
            required
          />
          <input
            className={inputStyle}
            name="supplier"
            placeholder="Supplier Name"
          />

          <input
            className={inputStyle}
            type="textArea"
            name="description"
            placeholder="Description"
          />
          <input className={inputButton} type="submit" value="Add Fruits" />
        </form>
      </div>
    </div>
  );
};

export default Addfruits;
