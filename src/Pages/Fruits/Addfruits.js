import React from "react";
import Loading from "../../Components/Loading";
import { FruitProvider } from "../../context/FruitContext";
import useFruit from "../../Hooks/useFruit";
import FruitForm from "./components/FruitForm";

export default function Addfruits() {
  const [values, loading] = useFruit();

  if (loading) {
    return <Loading />;
  }
  return (
    <FruitProvider value={values}>
      <FruitForm />
    </FruitProvider>
  );
}
