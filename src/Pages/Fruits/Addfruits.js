import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import add from "../../utils/add";

export default function Addfruits() {
  const [user] = useAuthState(auth);
  // styles
  const inputStyle = "border w-full focus:outline-0 focus:animate-pulse h-12 p-2";
  const inputButton =
    "border w-full hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2 focus:animate-pulse h-12 p-2";

  // adding fruits to the server.
  const addFruits = (e) => {
    const value = (n) => e.target[n].value;

    e.preventDefault();
    const name = value("name");
    const price = value("price");
    const photo = value("photo");
    const qty = value("quantity");
    const weight = value("weight");
    const supplier = value("supplier");
    const description = value("description");
    const addedBy = user.email;
    const fruit = {
      name,
      price,
      photo,
      qty,
      weight,
      supplier,
      description,
      addedBy
    };
    const resetForm = () => e.target.reset();
    // sending data to the server
    add(fruit, resetForm);
    // resetting the form.
  };
  return (
    <div className=" container mx-auto text-center m-20">
      <div className="max-w-md mx-auto py-6 px-2   shadow-xl flex flex-col gap-2 justify-center items-center ">
        <p className="m-2 text-xl text-pink-600">Add Fruit to Inventory</p>
        <form required className="w-full  flex flex-col gap-3" onSubmit={addFruits}>
          <input className={inputStyle} name="name" placeholder="Name" required />
          <input className={inputStyle} type="number" name="price" placeholder="Price" />

          <input className={inputStyle} type="number" name="quantity" placeholder="Quantity" />
          <input className={inputStyle} type="text" name="weight" placeholder="Weight" />
          <input className={inputStyle} name="photo" placeholder="Photo-Url" required />
          <input className={inputStyle} name="supplier" placeholder="Supplier Name" />

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
}
