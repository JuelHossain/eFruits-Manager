
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import useFruits from "../../Hooks/useFruits";
import deleteFruit from "../../utilites/delete";
import InventoryList from "../Inventory/InventoryList";
import Loading from "../Shared/Loading/Loading";

const AddedByUser = () => {
  const [user, loading] = useAuthState(auth);
  const [fruits, setFruits] = useFruits();
  const handleRemove = (id) => {
    const proceed = window.confirm();
    if (proceed) {
      deleteFruit(id)
      setFruits(fruits.filter((fruit) => fruit._id !== id));
    }
  };
  if (loading || fruits.length === 0) {
    return <tr className="flex justify-center"><td><Loading></Loading></td></tr>
  }
  console.log(fruits);
  return (
    <>
      {fruits
        .filter((fruit) => fruit.addedBy === user.email)
        .map((fruit) => (
          <InventoryList
            key={fruit._id}
            _id={fruit._id}
            name={fruit.name}
            price={fruit.price}
            qty={fruit.qty}
            photo={fruit.photo}
            supplier={fruit.supplier}
            description={fruit.description}
            weight={fruit.weight}
            remove={handleRemove}
          ></InventoryList>
        ))}
    </>
  );
};

export default AddedByUser;
