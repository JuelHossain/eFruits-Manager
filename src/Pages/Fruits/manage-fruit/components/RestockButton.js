import React from "react";
import { useFruitContext } from "../../../../context/fruit-context/FruitContext";
import useQuantity from "../../../../context/fruit-context/useQuantity";

const RestockButton = () => {
  const [{ restockInput, toStock }] = useFruitContext();

  const {
    clickHandler,
    enterKeyHandler,
    doubleClickHandler,
    changeHandler,
    blurHandler,
  } = useQuantity(true);

  return (
    <input
      readOnly={!restockInput}
      value={restockInput ? toStock : "Restock"}
      autoFocus={restockInput}
      type={restockInput ? "number" : "text"}
      min={0}
      className="w-1/3 h-full text-center font-bold sm:text-xl outline-none appearance-none  border cursor-pointer"
      onClick={clickHandler}
      onKeyDown={enterKeyHandler}
      onDoubleClick={doubleClickHandler}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  );
};

export default RestockButton;
