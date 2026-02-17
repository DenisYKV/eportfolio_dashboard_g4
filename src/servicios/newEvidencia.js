function newEvidencia(evidencia) {
  return fetch(`${API_URL}/evidencias`, {
    method: "POST",
    body: JSON.stringify(evidencia),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .catch(() => ({}));
}

export default newEvidencia;