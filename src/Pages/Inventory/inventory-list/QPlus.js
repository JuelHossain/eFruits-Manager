import { useFruitContext } from "../../../context/FruitContext";
import useQuantity from "../../../Hooks/useQuantity";

/* eslint-disable jsx-a11y/no-autofocus */
export default function QPlus() {
  const v = useFruitContext();
  const {
    restockInput,
    toStock,
    clickHandler,
    enterKeyHandler,
    doubleClickHandler,
    changeHandler,
    blurHandler
  } = useQuantity(v, { plus: true, send: true });

  return (
    <input
      readOnly={!restockInput}
      value={restockInput ? toStock : "+"}
      autoFocus={restockInput}
      type={restockInput ? "number" : "text"}
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
