export const fetchData = apiUrl => {
  return fetch(apiUrl).then(results => {
    return results.json();
  });
};
