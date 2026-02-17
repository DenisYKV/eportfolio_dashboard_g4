function getMisModulosMatriculados(usuario) {
  return fetch(``)
    .then((res) => res.json())
    .then((data) => data ?? [])
    .catch(() => []);
}

export default getMisModulosMatriculados;
