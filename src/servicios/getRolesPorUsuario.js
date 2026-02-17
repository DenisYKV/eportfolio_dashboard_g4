function getRolesPorUsuario(usuario) {
  return fetch(``)
    .then((res) => res.json())
    .then((data) => {
      return data?.roles ?? data ?? [];
    })
    .catch(() => []);
}

export default getRolesPorUsuario;
