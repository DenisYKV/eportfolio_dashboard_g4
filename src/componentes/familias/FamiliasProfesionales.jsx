import BasicTable from "../tablas/BasicTable";
import useFamiliasProfesionales from "../hooks/useFamiliasProfesionales";

function FamiliasProfesionales() {
  const { lista, cargando } = useFamiliasProfesionales();

  const columns = [
    { field: "id", header: "ID" },
    { field: "codigo", header: "Código" },
    { field: "nombre", header: "Nombre" },
    { field: "descripcion", header: "Descripción" },
  ];

  if (cargando) return <p>Cargando familias profesionales...</p>;

  return (
    <div>
      <h2>Familias profesionales</h2>
      <BasicTable columns={columns} rows={lista} rowKey="id" />
    </div>
  );
}

export default FamiliasProfesionales;
