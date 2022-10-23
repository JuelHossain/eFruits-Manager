import React, { useReducer } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase";
import QMinus from "./QMinus";
import QPlus from "./QPlus";

export default function Quantity({ v }) {
  const [show, toggle] = useReducer((state) => !state, false);
  const { fruit, updateFToTheServer } = v;
  const { qty, weight } = fruit;

  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const per = weight?.toLowerCase().includes("p") ? "Pcs" : "Kg";

  return (
    <td className="flex items-center gap-2 w-72">
      <p className="w-16">Quantity:</p>
      <QMinus v={v} />
      <input
        className="w-14  appearance-none outline-none border  text-center "
        value={qty}
        min={0}
        type="number"
        name="qty"
        readOnly={!show}
        onChange={updateFToTheServer}
        onBlur={toggle}
        onDoubleClick={() => (user ? toggle() : navigate("/login"))}
      />
      <QPlus v={v} />
      <p>{per}</p>
    </td>
  );
}
