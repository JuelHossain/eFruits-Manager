import { useReducer } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useFruitContext } from "../../../context/fruit-context/FruitContext";
import useFruitActions from "../../../context/fruit-context/useFruitActions";
import auth from "../../../firebase";

export default function Price() {
  const [show, toggle] = useReducer((state) => !state, false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { updateFToTheServer } = useFruitActions();
  const [{ fruit }] = useFruitContext();
  const { price, weight } = fruit;
  return (
    <td className="flex gap-2 text-left w-60 items-center">
      <p className="w-10">Price:</p>
      <input
        className="w-12 appearance-none outline-none border cursor-auto"
        onChange={updateFToTheServer}
        onBlur={toggle}
        onDoubleClick={() => (user ? toggle() : navigate("/login"))}
        min={0}
        type="number"
        name="minus"
        value={price}
        readOnly={!show}
      />

      <p className="w-24">Taka {weight}</p>
    </td>
  );
}
