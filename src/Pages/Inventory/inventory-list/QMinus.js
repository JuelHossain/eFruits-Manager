import { useFruitContext } from "../../../context/fruit-context/FruitContext";
import useQuantity from "../../../context/fruit-context/useQuantity";

/* eslint-disable jsx-a11y/no-autofocus */
export default function QMinus() {
  const [{ deliverInput, toDeliver }] = useFruitContext();
  const { clickHandler, enterKeyHandler, doubleClickHandler, changeHandler, blurHandler } =
    useQuantity();

  return (
    <input
      readOnly={!deliverInput}
      value={deliverInput ? toDeliver : "Delivered"}
      autoFocus={deliverInput}
      type={deliverInput ? "number" : "text"}
      min={0}
      className="w-10 hidden outline-none appearance-none  border"
      onClick={clickHandler}
      onKeyDown={enterKeyHandler}
      onDoubleClick={doubleClickHandler}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  );
}
