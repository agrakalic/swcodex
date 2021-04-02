import { useEffect, useState, useContext } from 'react';
import { Context } from '../context';

const useFetch = (endpoint) => {
  const context = useContext(Context);
  const cache = context.getCache();

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelRequest = false;
    if (!endpoint) return;

    const fetchData = async () => {
      setStatus('fetching');
      setError(null);
      if (cache[endpoint]) {
        const data = cache[endpoint];
        setStatus('done');
        setData(data);
      } else {
        try {         
          const response = await fetch(endpoint);
          const data = await response.json();
          if (cancelRequest) return;
          context.setCache(endpoint, data);
          setStatus('done');
          setData(data);
        } catch (error) {
          if (cancelRequest) return;
          setStatus('error');
          setError(error.message);
        }
      }
    };

    fetchData();

    return () => {
      cancelRequest = true;
    };
  }, [endpoint]);

  return {
    status,
    error,
    data,
  };
};

export default useFetch;
