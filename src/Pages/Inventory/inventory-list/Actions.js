/* eslint-disable no-shadow */
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useFruitContext } from "../../../context/FruitContext";
import auth from "../../../firebase";

export default function Actions() {
  const { fruit, deleteFruit, refetch } = useFruitContext();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  return (
    <td className="flex justify-between items-center gap-4">
      <Link to={`/update/${fruit?._id}`} className="w-8 flex justify-end hover:text-red-500">
        <PencilAltIcon className="h-7" />
      </Link>
      <button
        type="button"
        className="w-8 flex justify-end hover:text-red-500"
        onClick={() => (user ? deleteFruit(refetch) : navigate("/login"))}>
        <TrashIcon className="h-8" />
      </button>
    </td>
  );
}
