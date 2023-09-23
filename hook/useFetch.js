import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("////////////////////////////////////////////////////////////////////////////");
  console.log("/////////////////////////////////////////////////////////////////////////cz");
  console.log("query :",query);


  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
      job_requirements:"under_3_years_experience"
    },
    headers: {
      'X-RapidAPI-Key': '19d49732b3mshe53fe639fa87257p13fee9jsn998971964a98',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };



  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
