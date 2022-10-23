import { useReducer } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase";

export default function Price({ v }) {
  const [show, toggle] = useReducer((state) => !state, false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { fruit, updateFToTheServer } = v;
  const { price, weight } = fruit;
  return (
    <td className="flex gap-2 text-left w-60 items-center">
      <p className="w-10">Price:</p>
      <input
        className="w-12 appearance-none outline-none border cursor-auto"
        onChange={updateFToTheServer}
        onBlur={toggle}
        onDoubleClick={() => {
          if (user) {
            if (!show) toggle();
          } else {
            navigate("/login");
          }
        }}
        min={0}
        type="number"
        name="price"
        value={price}
        readOnly={!show}
      />

      <p className="w-24">Taka {weight}</p>
    </td>
  );
}
