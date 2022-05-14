import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import useFruits from "../../Hooks/useFruits";
import InventoryList from "../Inventory/InventoryList";
import Loading from "../Shared/Loading/Loading";

const AddedByUser = () => {
  const [user, loading] = useAuthState(auth);
  const [fruits, setFruits] = useFruits();
  const handleRemove = (_id) => {
    const proceed = window.confirm();
    if (proceed) {
      const url = `https://efruits-management.herokuapp.com/fruits/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.info("item deleted successfully");
          }
        });
      setFruits(fruits.filter((fruit) => fruit._id !== _id));
    }
  };
  if (loading || fruits.length === 0) {
    return <Loading></Loading>;
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
