import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setResponse(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.code);
      }
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
