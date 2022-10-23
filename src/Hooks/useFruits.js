import axios from "axios";
import { useEffect, useState } from "react";

const useFruits = (page, size) => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
  }, [page, size]);
  return [{ fruits, setFruits }, loading, error];
};
export default useFruits;
