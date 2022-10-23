import {
  setFruit,
  setId,
  setToDeliver,
  setToStock,
  toggleDeliverInput,
  toggleRestockInput,
  updateAFruit
} from "./fruit-action-types";
import { useFruitContext } from "./FruitContext";

export default function useFruitActions() {
  // eslint-disable-next-line no-empty-pattern
  const [{ handleUpdate }, dispatch] = useFruitContext();

  const toggleDInput = () => {
    dispatch({ type: toggleDeliverInput });
  };

  const toggleSInput = () => {
    dispatch({ type: toggleRestockInput });
  };

  const setToD = (value) => {
    dispatch({ type: setToDeliver, payload: value });
  };

  const setToS = (value) => {
    dispatch({ type: setToStock, payload: value });
  };

  const setF = (value) => {
    dispatch({ type: setFruit, payload: value });
  };

  const setI = (value) => {
    dispatch({ type: setId, payload: value });
  };

  const updateAF = (name, value) => {
    dispatch({ type: updateAFruit, payload: { [name]: value } });
  };

  const updateF = (e) => {
    dispatch({
      type: updateAFruit,
      payload: { [e.target.name]: e.target.value }
    });
  };
  const updateFToTheServer = (e) => {
    dispatch({
      type: updateAFruit,
      payload: { [e.target.name]: e.target.value }
    });
    handleUpdate();
  };

  return {
    toggleDInput,
    toggleSInput,
    setToD,
    setToS,
    setF,
    setI,
    updateAF,
    updateF,
    updateFToTheServer
  };
}
