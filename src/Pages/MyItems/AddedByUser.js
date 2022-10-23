import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Components/Loading";
import auth from "../../firebase";
import useFruits from "../../Hooks/useFruits";
import InventoryList from "../Inventory/inventory-list/InventoryList";

export default function AddedByUser() {
  const [user, loading] = useAuthState(auth);
  const { fruits, loading: fruitsLoading, refetch } = useFruits();

  if (loading || fruitsLoading) {
    return (
      <tr className="flex justify-center">
        <td>
          <Loading />
        </td>
      </tr>
    );
  }
  return (
    <>
      {fruits
        .filter((fruit) => fruit.addedBy === user.email)
        .map((fruit) => {
          const { _id } = fruit;
          return <InventoryList key={_id} id={_id} refetch={refetch} />;
        })}
    </>
  );
}
