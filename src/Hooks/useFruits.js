import axios from "axios";
import { useEffect, useReducer, useState } from "react";

const useFruits = (page, size) => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [c, refetch] = useReducer((s) => s + 1, 0);
  useEffect(() => {
    const url = `/fruits?page=${page}&size=${size}`;
    axios(url)
      .then((res) => {
        setFruits(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("There was some server side Error");
      });
  }, [page, size, c]);
  return { fruits, setFruits, loading, error, refetch };
};
export default useFruits;
