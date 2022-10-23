import { useFruitContext } from "../../../context/FruitContext";
import useQuantity from "../../../Hooks/useQuantity";

/* eslint-disable jsx-a11y/no-autofocus */
export default function QMinus() {
  const v = useFruitContext();

  const {
    deliverInput,
    toDeliver,
    clickHandler,
    enterKeyHandler,
    doubleClickHandler,
    changeHandler,
    blurHandler
  } = useQuantity(v, { send: true });

  return (
    <input
      readOnly={!deliverInput}
      value={deliverInput ? toDeliver : "-"}
      autoFocus={deliverInput}
      type={deliverInput ? "number" : "text"}
      min={0}
      className="w-10 outline-none appearance-none  border text-center cursor-pointer"
      onClick={clickHandler}
      onKeyDown={enterKeyHandler}
      onDoubleClick={doubleClickHandler}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  );
}
