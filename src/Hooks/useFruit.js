import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase";
import add from "../utils/add";
import update from "../utils/update";

const useFruit = (id) => {
  const [user] = useAuthState(auth);
  const initialFruitValue = {
    name: "",
    price: "",
    photo: "",
    qty: "",
    weight: "",
    supplier: "",
    description: "",
    delivered: 0,
    addedBy: user?.email
  };
  const url = `/fruits/${id}`;
  const [fruit, setFruit] = useState(initialFruitValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [initial, setInitial] = useState(false);

  const resetToInitial = () => {
    setFruit(initialFruitValue);
  };
  const addFruit = (e) => {
    e.preventDefault();
    add(fruit, resetToInitial);
  };
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

  const updateFruit = (e) => {
    e.preventDefault();
    const { _id, ...restFruit } = fruit;
    const newFruit = {
      ...restFruit,
      updatedBy: user?.email
    };
    update(id, newFruit, `${fruit.name} has been updated successfully`);
  };

  const deleteFruit = (refetch) => {
    // eslint-disable-next-line no-shadow
    refetch();
    axios.delete(url).then((res) => {
      if (res.data.acknowledged) {
        toast.success("fruit has been deleted successfully");
      }
    });
  };

  useEffect(() => {
    if (id) {
      axios(url)
        .then((res) => {
          setFruit(res.data);
          setLoading(false);
        })
        .catch(() => {
          setError("There was some server side Error");
        });
    } else {
      setLoading(false);
      setInitial(true);
    }
  }, [id, url]);

  return [
    {
      initial,
      fruit,
      updateF,
      updateAF,
      updateFruit,
      deleteFruit,
      updateFToTheServer,
      sendF,
      addFruit,
      resetToInitial
    },
    loading,
    error
  ];
};
export default useFruit;
