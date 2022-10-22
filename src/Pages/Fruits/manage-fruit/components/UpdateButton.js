import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";
import auth from "../../../../firebase";
import update from "../../../../utils/update";

const UpdateButton = () => {
  const [user] = useAuthState(auth);
  const [{ fruit }] = useFruitContext();

  const handleUpdate = () => {
    const { _id, ...rest } = fruit;
    const newFruit = {
      ...rest,
      delivered: 500,
      updatedBy: user?.email,
    };
    //sending data to the server
    update(newFruit, fruit._id, "Fruit has been updated");
  };
  return (
    <button
      className="flex justify-center items-center h-20 relative w-full border text-xl font-bold gap-2 hover:bg-pink-600 hover:text-white"
      onClick={handleUpdate}
    >
      Update
    </button>
  );
};

export default UpdateButton;
