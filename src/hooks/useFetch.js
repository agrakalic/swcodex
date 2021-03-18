import { useEffect, useState, useContext } from 'react';
import { Context } from '../context';

const useFetch = (endpoint) => {
  const context = useContext(Context);
  const cache = context.getCache();
  
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
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
          cache[endpoint] = data;
          context.setCache(cache);
          setStatus('done');
          setData(data);
        } catch (error) {
          setStatus('error');
          setError(error.message);
        }
      }
    };

    fetchData();
  }, [cache, context, endpoint]);

  return {
    status,
    error,
    data,
  };
};

export default useFetch;
