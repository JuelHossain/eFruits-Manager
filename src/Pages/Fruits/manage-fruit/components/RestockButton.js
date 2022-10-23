/* eslint-disable jsx-a11y/no-autofocus */
import React from "react";
import { useFruitContext } from "../../../../context/FruitContext";
import useQuantity from "../../../../Hooks/useQuantity";

export default function RestockButton() {
  const v = useFruitContext();
  const {
    clickHandler,
    enterKeyHandler,
    doubleClickHandler,
    changeHandler,
    blurHandler,
    restockInput,
    toStock
  } = useQuantity(v, { plus: true });

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
}
