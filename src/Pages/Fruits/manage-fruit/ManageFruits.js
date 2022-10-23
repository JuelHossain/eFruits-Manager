import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../../../Components/Loading";

import FooterButtons from "../../../Components/shared/FooterButtons";
import { FruitProvider } from "../../../context/FruitContext";
import useFruit from "../../../Hooks/useFruit";
import Delivered from "./components/Delivered";
import Description from "./components/Description";
import Name from "./components/Name";
import Photo from "./components/Photo";
import Price from "./components/Price";
import Quantity from "./components/Quantity";
import SuppliedBy from "./components/SuppliedBy";
import UpdateButton from "./components/UpdateButton";

export default function ManageFruits() {
  const { id } = useParams();
  const [values, loading] = useFruit(id);

  if (loading) {
    return <Loading />;
  }

  return (
    <FruitProvider value={values}>
      <div className="container mx-auto text-center sm:my-16 flex justify-center flex-col gap-4 p-3 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full mx-auto lg:h-[700px]">
          <div className="flex flex-col border shadow-md justify-between items-center p-4 gap-2 h-full w-full">
            <Name />
            <Photo />
            <Price />
          </div>

          <div className="flex flex-col border shadow-md justify-between items-center p-4 gap-2 h-full w-full">
            <div className="flex flex-col items-center gap-2 w-full ">
              <Quantity />
              <Delivered />
              <SuppliedBy />
              <Description />
            </div>
            <UpdateButton />
          </div>
        </div>
        <FooterButtons />
      </div>
    </FruitProvider>
  );
}
