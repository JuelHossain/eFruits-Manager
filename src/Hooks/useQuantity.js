import { useReducer, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase";

const useQuantity = (v, options) => {
  const { plus, send } = options ?? {};
  const [deliverInput, toggleDInput] = useReducer((st) => !st, false);
  const [restockInput, toggleSInput] = useReducer((st) => !st, false);
  const [toDeliver, setToD] = useState(0);
  const [toStock, setToS] = useState(0);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const { fruit, updateAF } = v;

  const { qty, delivered } = fruit;
  const nQty = parseInt(qty, 10);
  const nDelivered = parseInt(delivered, 10);

  const qtyHandler = (value) => {
    if (value) {
      // eslint-disable-next-line no-param-reassign
      value = parseInt(value, 10);
      if (plus) {
        const plusValue = { qty: nQty + value };
        updateAF(plusValue, send);
      } else if (value <= nQty && qty > 0) {
        const minusValue = { qty: nQty - value, delivered: nDelivered + value };
        updateAF(minusValue, send);
      } else {
        toast("There is not enough stock");
      }
    }
  };

  const blurHandler = () => {
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
    if (user) {
      if (plus) {
        if (!restockInput) {
          qtyHandler(1);
        }
      } else if (!deliverInput) {
        qtyHandler(1);
      }
    } else {
      navigate("/login");
    }
  };

  const doubleClickHandler = () => {
    if (plus) {
      if (!restockInput) {
        updateAF({ qty: nQty - 2 }, send);
        toggleSInput();
        setToS(0);
      }
    } else if (!deliverInput && qty > 0) {
      updateAF({ qty: nQty + 2, delivered: nDelivered - 2 }, send);
      toggleDInput();
      setToD(0);
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
    deliverInput,
    restockInput,
    toDeliver,
    toStock,
    qtyHandler,
    blurHandler,
    clickHandler,
    doubleClickHandler,
    enterKeyHandler,
    changeHandler
  };
};

export default useQuantity;
