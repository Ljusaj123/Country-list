import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState({ isError: false, message: "" });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url);
        const data = result.data;
        setData(data);
        setError({ isError: false, message: "" });
      } catch (error) {
        if (error.response.data.status === 404) {
          setError({
            isError: true,
            message: "There is no country for inserted data",
          });
        } else {
          setError({ isError: true, message: error.message });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
