import { ArrowCircleRightIcon, PlusCircleIcon } from "@heroicons/react/solid";
import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../../../Components/Loading";

import { FruitProvider } from "../../../context/FruitContext";
import useFruit from "../../../Hooks/useFruit";
import FruitForm from "../components/FruitForm";

const footerLinks = [
  { name: "Inventory", link: "/inventory", Icon: PlusCircleIcon },
  { name: "Your Fruits", link: "/myitems/addedbyme", Icon: ArrowCircleRightIcon }
];

export default function ManageFruits() {
  const { id } = useParams();
  const [values, loading] = useFruit(id);

  if (loading) {
    return <Loading />;
  }

  return (
    <FruitProvider value={values}>
      <FruitForm flinks={footerLinks} />
    </FruitProvider>
  );
}
