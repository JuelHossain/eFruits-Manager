import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../firebase";

const deleteFruit = (id) => {
  const url = `/fruits/${id}`;
  axios
    .delete(url)
    .then((res) => {
      if (res.data.acknowledged) {
        toast.success("fruit has been deleted successfully");
      }
    })
    .catch(() => {
      signOut(auth);
      localStorage.removeItem("accessToken");
    });
};

export default deleteFruit;
