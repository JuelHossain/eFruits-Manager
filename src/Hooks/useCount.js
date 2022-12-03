import axios from "axios";
import { useEffect, useState } from "react";

const useCount = (size) => {
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios("/fruitsCount")
      .then((res) => {
        const { count } = res.data;
        const pages = Math.ceil(count / size);
        setPageCount(pages);
        setLoading(false);
      })
      .catch(() => {
        setError("there was some error");
        setLoading(false);
      });
  });
  return [pageCount, loading, error];
};

export default useCount;
