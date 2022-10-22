import { toast } from "react-toastify";
import { useFruitContext } from "./FruitContext";
import useFruitActions from "./useFruitActions";

const useQuantity = (plus) => {
  const [{ fruit, deliverInput, restockInput, toDeliver, toStock }] =
    useFruitContext();

  const { updateAF, toggleDInput, setToD, toggleSInput, setToS } =
    useFruitActions();

  const { qty, delivered } = fruit;

  const qtyHandler = (value) => {
    if (value) {
      value = parseInt(value);
      if (plus) {
        updateAF("qty", qty + value);
      } else {
        if (value <= qty && qty > 0) {
          updateAF("qty", qty - value);
          updateAF("delivered", parseInt(delivered) + value);
        } else {
          toast("There is not enough stock");
        }
      }
    }
  };

  const blurHandler = (e) => {
    if (plus && restockInput) {
      qtyHandler(toStock);
      toggleSInput();
    } else if (deliverInput) {
      qtyHandler(toDeliver);
      toggleDInput();
    }
  };

  const enterKeyHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      blurHandler(e);
    }
  };

  const clickHandler = () => {
    if (plus) {
      if (!restockInput) {
        qtyHandler(1);
      }
    } else {
      if (!deliverInput) {
        qtyHandler(1);
      }
    }
  };

  const doubleClickHandler = () => {
    if (plus) {
      if (!restockInput) {
        updateAF("qty", qty - 2);
        toggleSInput();
        setToS(0);
      }
    } else {
      if (!deliverInput && qty > 0) {
        updateAF("qty", qty + 2);
        updateAF("delivered", delivered - 2);
        toggleDInput();
        setToD(0);
      }
    }
  };

  const changeHandler = (e) => {
    if (plus) {
      setToS(e.target.value);
    } else {
      setToD(e.target.value);
    }
  };

  return {
    qtyHandler,
    blurHandler,
    clickHandler,
    doubleClickHandler,
    enterKeyHandler,
    changeHandler,
  };
};

export default useQuantity;
