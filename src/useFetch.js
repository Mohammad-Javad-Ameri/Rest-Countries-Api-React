import {useState,useEffect,useCallback} from 'react'

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getdata = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getdata();
  }, [url, getdata]);
  return { loading, data };
}
 
export default useFetch;