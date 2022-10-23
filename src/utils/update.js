import axios from "axios";
import { toast } from "react-toastify";

const update = (id, newFruit, message) => {
  const url = `/fruits/${id}`;
  // sending data to the server
  axios.put(url, newFruit).then((res) => {
    if (res.data.acknowledged && message) {
      toast.success(message);
    }
  });
};
export default update;
