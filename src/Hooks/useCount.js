import axios from "axios";
import { useEffect, useState } from "react";

const useCount = (size) => {
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    axios("/fruitsCount").then((res) => {
      const { count } = res.data;
      const pages = Math.ceil(count / size);
      setPageCount(pages);
    });
  });
  return [pageCount, setPageCount];
};

export default useCount;
