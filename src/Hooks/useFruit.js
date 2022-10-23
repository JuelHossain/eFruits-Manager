import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase";
import update from "../utils/update";

const useFruit = (id) => {
  const url = `/fruits/${id}`;
  const [fruit, setFruit] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);

  const updateF = (e) => {
    setFruit((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const sendF = (patch) => {
    const { _id, ...restFruit } = fruit;
    const newFruit = {
      ...restFruit,
      ...patch,
      updatedBy: user?.email
    };
    update(id, newFruit);
  };

  const updateAF = (value, send) => {
    setFruit((f) => ({ ...f, ...value }));
    if (send) sendF(value);
  };

  const updateFToTheServer = (e) => {
    updateF(e);
    sendF({ [e.target.name]: e.target.value });
  };

  const updateFruit = () => {
    const { _id, ...restFruit } = fruit;
    const newFruit = {
      ...restFruit,
      updatedBy: user?.email
    };
    update(id, newFruit, `${fruit.name} has been updated successfully`);
  };

  const deleteFruit = () => {
    axios.delete(url).then((res) => {
      if (res.data.acknowledged) {
        toast.success("fruit has been deleted successfully");
      }
    });
  };

  useEffect(() => {
    axios(url)
      .then((res) => {
        setFruit(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("There was some server side Error");
      });
  }, [id, url]);

  return [
    { fruit, updateF, updateAF, updateFruit, deleteFruit, updateFToTheServer, sendF },
    loading,
    error
  ];
};
export default useFruit;
