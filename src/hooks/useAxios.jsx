import axios from "axios";
import { useEffect, useState } from "react";

/////////=>>> don't understand the param part here (and axios via function is tricky)

const UseAxios = (param) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(param);
      setResponse(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false); // why this set to false???
    }
  };

  //   const fetchData2 = async () => {
  //     const res = await axios({
  //       url: "https://api.coingecko.com/api/v3/search/search/trending",
  //       method: "get",
  //     });
  //     console.log(res.data);
  //   };
  useEffect(() => {});

  useEffect(() => {
    fetchData(param); // It will call a function, so no need to write whole function inside this useEffect
    // fetchData2();
  }, []);

  return { response, loading, error };
};

export default UseAxios;
