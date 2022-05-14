import { useEffect, useState } from "react";

const useFruit = (id) => {
  const [fruit, setFruit] = useState({});
  useEffect(() => {
    const url = `https://efruits-management.herokuapp.com/fruits/:${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruit(data));
  });
  return { fruit, setFruit };
};
export default useFruit;
