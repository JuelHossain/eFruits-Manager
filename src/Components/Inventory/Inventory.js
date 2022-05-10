import React from "react";
import useFruits from "../../Hooks/useFruits";
import InventoryList from "./InventoryList";

const Inventory = () => {
  const [fruits] = useFruits();
  console.log(fruits);
  return (
    <div className="container m-auto text-center mt-10 mb-20 p-10 shadow-2xl">
      <h1 className="text-4xl text-center mb-10">Available Stocks</h1>
      <div className="flex justify-center">
        <div
                  className="flex justify-center flex-col gap-2 w-full"
        >
          {fruits.map((fruit) => (
            <InventoryList
              key={fruit._id}
              name={fruit.name}
              price={fruit.price}
              qty={fruit.qty}
              photo={fruit.photo}
              supplier={fruit.supplier}
              description={fruit.description}
              weight={fruit.weight}
            ></InventoryList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
