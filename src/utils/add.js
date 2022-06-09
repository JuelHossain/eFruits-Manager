import axios from "axios";
import { toast } from "react-toastify";

const add = (fruit,func) => {
    axios.post("/fruits", fruit).then((res) => {
        if (res.data.acknowledged)
            func();
          toast.success("Fruit Has Been Added To The Inventory");
        });
}

export default add;