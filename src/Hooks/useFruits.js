import axios from "axios";
import { useEffect, useState } from "react";

const useFruits = (page,size) => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
  const url = `/fruits?page=${page}&size=${size}`;
    axios(url)
      .then(res => setFruits(res.data));
  }, [page,size]);
  return [fruits, setFruits];
};
export default useFruits;
