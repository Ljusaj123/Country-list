import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState({ isError: false, message: "" });
  console.log("aaaaa");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        const data = result.data;
        setData(data);
      } catch (error) {
        setError({ isError: true, message: "Something went wrong" });
      } finally {
        setLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
