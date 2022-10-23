/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-this-in-sfc */
import { createContext, useContext } from "react";

export const FruitContext = createContext();

export function FruitProvider({ value, children }) {
  return <FruitContext.Provider value={value}>{children}</FruitContext.Provider>;
}

export const useFruitContext = () => useContext(FruitContext);
