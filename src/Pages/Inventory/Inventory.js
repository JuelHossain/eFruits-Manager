import { ArrowCircleRightIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
import Loading from "../../Components/Loading";
import useFruits from "../../Hooks/useFruits";
import InventoryList from "./inventory-list/InventoryList";
import TableFooter from "./TableFooter";

const footerLinks = [
  { name: "Add Fruits", link: "/addfruits", Icon: PlusCircleIcon },
  { name: "My Items", link: "/myitems/addedbyme", Icon: ArrowCircleRightIcon }
];
export default function Inventory({ slice }) {
  const { fruits, loading, refetch } = useFruits();
  const fruitsLists = fruits.slice(0, slice).map((fruit) => {
    const { _id } = fruit;
    return <InventoryList key={_id} id={_id} refetch={refetch} />;
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container m-auto text-center mt-10 mb-20 px-2 sm:px-10 py-16 shadow-xl">
      <h1 className="text-4xl text-center mb-10">Available-Stocks</h1>
      <table className="flex flex-col justify-center mx-auto gap-2">
        <tbody className="flex justify-center flex-col gap-2 w-full overflow-x-auto ">
          {fruitsLists}
        </tbody>
        <TableFooter links={footerLinks} />
      </table>
    </div>
  );
}
