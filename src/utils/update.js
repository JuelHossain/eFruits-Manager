import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../firebase";

const update = (id, newFruit, message) => {
  const url = `/fruits/${id}`;
  // sending data to the server
  axios
    .put(url, newFruit)
    .then((res) => {
      if (res.data.acknowledged && message) {
        toast.success(message);
      }
    })
    .catch(() => {
      signOut(auth);
      localStorage.removeItem("accessToken");
    });
};
export default update;
