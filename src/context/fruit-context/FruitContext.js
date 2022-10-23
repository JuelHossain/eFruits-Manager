/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-this-in-sfc */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import useFruits from "../../Hooks/useFruits";
import deleteFruit from "../../utils/delete";
import getFruit from "../../utils/getFruit";
import update from "../../utils/update";
import { setFruit, setId, setLoading } from "./fruit-action-types";
import fruitReducer from "./fruit-reducer";

export const FruitContext = createContext();

export function FruitProvider({ children }) {
  const [user] = useAuthState(auth);
  const [{ fruits, setFruits }] = useFruits();

  const initialValue = {
    deliverInput: false,
    restockInput: false,
    toDeliver: "Delivered",
    toStock: "Restock",
    fruit: {},
    id: "",
    loading: true,
    handleUpdate() {
      console.log(this.fruit);
      const { _id, ...rest } = this.fruit;
      const newFruit = {
        ...rest,
        updatedBy: user?.email
      };
      // sending data to the server
      update(newFruit, this.fruit._id, "Fruit has been updated");
    },
    handleDelete() {
      // eslint-disable-next-line no-alert
      const proceed = window.confirm();
      if (proceed) {
        deleteFruit(this.id);
        // eslint-disable-next-line no-underscore-dangle
        setFruits(fruits.filter((f) => f._id !== this.id));
      }
    }
  };

  const value = useReducer(fruitReducer, initialValue);
  const [{ id }, dispatch] = value;

  useEffect(() => {
    if (id) {
      getFruit(id)
        .then((data) => {
          if (data.name) {
            dispatch({ type: setFruit, payload: data });
            dispatch({ type: setLoading, payload: false });
          }
        })
        .catch(() => {
          dispatch({ type: setLoading, payload: false });
        });
    }
  }, [id, dispatch]);

  return <FruitContext.Provider value={value}>{children}</FruitContext.Provider>;
}

export const useFruitContext = (id) => {
  const context = useContext(FruitContext);
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = context;

  useEffect(() => {
    if (id) {
      dispatch({ type: setId, payload: id });
    }
  }, [id, dispatch]);

  return context;
};
