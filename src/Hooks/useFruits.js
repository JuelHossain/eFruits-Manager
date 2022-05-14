import { useEffect, useState } from "react";

const useFruits = () => {
  const [fruits, setFruits] = useState([]);
  const url = `https://efruits-management.herokuapp.com/fruits`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return [fruits, setFruits];
};
export default useFruits;
