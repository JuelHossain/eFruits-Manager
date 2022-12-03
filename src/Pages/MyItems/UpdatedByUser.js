import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Components/Loading";
import auth from "../../firebase";
import useFruits from "../../Hooks/useFruits";
import InventoryList from "../Inventory/inventory-list/InventoryList";

function UpdatedByUser() {
  const [user, loading] = useAuthState(auth);

  const { fruits, loading: fruitsLoading, refetch, error } = useFruits();

  if (loading || fruitsLoading) {
    return (
      <tr className="flex justify-center">
        <td>
          <Loading />
        </td>
      </tr>
    );
  }
  if (error) {
    return <tr>{error}</tr>;
  }
  return (
    <>
      {fruits
        .filter((fruit) => fruit.updatedBy === user.email)
        .map((fruit) => {
          const { _id } = fruit;
          return <InventoryList key={_id} id={_id} refetch={refetch} />;
        })}
    </>
  );
}

export default UpdatedByUser;
