import {
  setFruit,
  setId,
  setLoading,
  setToDeliver,
  setToStock,
  toggleDeliverInput,
  toggleRestockInput,
  updateAFruit,
} from "./fruit-action-types";

const fruitReducer = (state, action) => {
  switch (action.type) {
    case toggleDeliverInput:
      return { ...state, deliverInput: !state.deliverInput };

    case toggleRestockInput:
      return { ...state, restockInput: !state.restockInput };

    case setToDeliver:
      return { ...state, toDeliver: action.payload };

    case setToStock:
      return { ...state, toStock: action.payload };

    case setFruit:
      return { ...state, fruit: action.payload };

    case setId:
      return { ...state, id: action.payload };

    case updateAFruit: {
      return { ...state, fruit: { ...state.fruit, ...action.payload } };
    }

    case setLoading: {
      return { ...state, loading: action.payload };
    }

    default:
      return state;
  }
};
export default fruitReducer;
