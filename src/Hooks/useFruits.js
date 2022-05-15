import axios from "axios";
import { useEffect, useState } from "react";

const useFruits = () => {
  const [fruits, setFruits] = useState([]);
  const url = `/fruits`;
  useEffect(() => {
    axios(url)
      .then(res => setFruits(res.data));
  }, []);
  return [fruits, setFruits];
};
export default useFruits;
