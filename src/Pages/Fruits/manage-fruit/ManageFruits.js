import React from "react";
import { useParams } from "react-router-dom";

import Loading from "../../../Components/Loading";
import { useFruitContext } from "../../../context/fruit-context/FruitContext";

import FooterButtons from "../../../Components/shared/FooterButtons";
import Delivered from "./Delivered";
import Description from "./Description";
import Name from "./Name";
import Photo from "./Photo";
import Price from "./Price";
import Quantity from "./Quantity";
import SuppliedBy from "./SuppliedBy";
import UpdateButton from "./UpdateButton";

const ManageFruits = () => {
  const { id } = useParams();
  const [{ loading }] = useFruitContext(id);

  if (loading) {
    return <Loading />;
  }

  return (
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
  );
};

export default ManageFruits;
