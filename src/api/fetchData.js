export const fetchData = async (query) => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  return await response.json();
};
