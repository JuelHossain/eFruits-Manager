import axios from "axios";
import { useEffect, useState } from "react";

const useFruit = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fruit, setFruit] = useState({});
  useEffect(() => {
  
  }, [id]);
  return [fruit, loading, error];
};
export default useFruit;
