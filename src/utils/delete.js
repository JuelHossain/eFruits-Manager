import axios from "axios";
import { toast } from "react-toastify";

const deleteFruit = (id) => {
     const url = `/fruits/${id}`;
     axios.delete(url).then((res) => {
         if (res.data.acknowledged) {
           toast.success("fruit has been deleted successfully");
         }
     });
}

export default deleteFruit;