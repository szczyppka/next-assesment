import { useEffect, useState, useRef } from "react";
const useDebouncedSearch = (fetchData, delay = 500) => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (query) {
      setLoading(true);
      setShows([]);

      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        fetchData(query).then((result) => {
          setShows(reduceResult(result));
          setLoading(false);
        });
      }, delay);

      return () => clearTimeout(timer.current);
    }
  }, [query, delay, fetchData]);

  const reduceResult = (value) => {
    return value.slice(0, 4).map((entry) => entry.show);
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return { query, shows, loading, onChange };
};

export default useDebouncedSearch;
