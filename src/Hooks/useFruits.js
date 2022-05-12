import { useEffect, useState } from "react";

const useFruits = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("https://efruits-management.herokuapp.com/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return [fruits,setFruits];
};
export default useFruits;
