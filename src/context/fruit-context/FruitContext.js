import { createContext, useContext, useEffect, useReducer } from "react";
import getFruit from "../../utils/getFruit";
import { setFruit, setId, setLoading } from "./fruit-action-types";
import fruitReducer from "./fruit-reducer";

export const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
  const initialValue = {
    deliverInput: false,
    restockInput: false,
    toDeliver: "Delivered",
    toStock: "Restock",
    fruit: {},
    id: "",
    loading: true,
  };

  const [context, dispatch] = useReducer(fruitReducer, initialValue);
  const { id } = context;

  useEffect(() => {
    if (id) {
      getFruit(id)
        .then((data) => {
          if (data.name) {
            dispatch({ type: setFruit, payload: data });
            dispatch({ type: setLoading, payload: false });
          }
        })
        .catch((err) => {
          dispatch({ type: setLoading, payload: false });
        });
    }
  }, [id]);

  return (
    <FruitContext.Provider value={[context, dispatch]}>
      {children}
    </FruitContext.Provider>
  );
};

export const useFruitContext = (id) => {
  const context = useContext(FruitContext);
  const [{}, dispatch] = context;

  useEffect(() => {
    if (id) {
      dispatch({ type: setId, payload: id });
    }
  }, [id, dispatch]);

  return context;
};
