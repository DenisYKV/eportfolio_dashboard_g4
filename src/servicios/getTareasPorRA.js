function getTareasPorRA(ra) {
  return fetch(``)
    .then((res) => res.json())
    .then((data) => data ?? [])
    .catch(() => []);
}

export default getTareasPorRA;
