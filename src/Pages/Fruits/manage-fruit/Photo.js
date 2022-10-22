import React, { useRef } from "react";
import { useFruitContext } from "../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../context/fruit-context/useFruitActions";

const Photo = () => {
  const [
    {
      fruit: { photo },
    },
  ] = useFruitContext();
  const { updateF } = useFruitActions();
  const photoUrlRef = useRef(null);

  return (
    <div
      className="relative w-full h-full flex items-center overflow-hidden"
      onMouseOut={() => {
        photoUrlRef.current.classList.add("hidden");
      }}
      onMouseOver={() => {
        photoUrlRef.current.classList.remove("hidden");
      }}
    >
      <img className="w-full object-cover" src={photo} alt="" />
      <input
        onBlur={(e) => {
          e.target.classList.add("hidden");
        }}
        className=" focus:outline-pink-500  hidden absolute h-36 w-full border p-4 text-xl bottom-0 left-0"
        value={photo}
        name="photo"
        ref={photoUrlRef}
        type="text"
        onChange={updateF}
      />
    </div>
  );
};

export default Photo;
