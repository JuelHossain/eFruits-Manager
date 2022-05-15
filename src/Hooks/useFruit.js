import axios from "axios";
import { useEffect, useState } from "react";

const useFruit = (id) => {
  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `/fruits/${id}`;
    axios(url)
      .then(res => setFruit(res.data));
  });
  return [ fruit, setFruit ];
};
export default useFruit;
