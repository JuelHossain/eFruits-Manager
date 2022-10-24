import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../firebase";

const add = (fruit, func) => {
  axios
    .post("/fruits", fruit)
    .then((res) => {
      if (res.data.acknowledged) func();
      toast.success("Fruit Has Been Added To The Inventory");
    })
    .catch(() => {
      signOut(auth);
      localStorage.removeItem("accessToken");
    });
};

export default add;
