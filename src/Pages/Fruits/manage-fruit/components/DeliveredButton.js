/* eslint-disable jsx-a11y/no-autofocus */
import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";
import useQuantity from "../../../../Hooks/useQuantity";

function DeliveredButton() {
  const v = useFruitContext();

  const {
    clickHandler,
    enterKeyHandler,
    doubleClickHandler,
    changeHandler,
    blurHandler,
    deliverInput,
    toDeliver
  } = useQuantity(v);

  return (
    <input
      readOnly={!deliverInput}
      value={deliverInput ? toDeliver : "Delivered"}
      autoFocus={deliverInput}
      type={deliverInput ? "number" : "text"}
      min={0}
      className="w-1/3 h-full text-center font-bold sm:text-xl outline-none appearance-none  border cursor-pointer"
      onClick={clickHandler}
      onKeyDown={enterKeyHandler}
      onDoubleClick={doubleClickHandler}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  );
}

export default DeliveredButton;
