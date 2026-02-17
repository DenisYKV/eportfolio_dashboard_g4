import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function BasicTable({ columns = [], rows = [], rowKey = "id" }) {
  // Si no pasan columns, las genera con las keys del primer row
  const cols =
    columns.length > 0
      ? columns
      : rows.length > 0
      ? Object.keys(rows[0]).map((k) => ({ field: k, header: k }))
      : [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {cols.map((col) => (
              <TableCell key={col.field}>{col.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, idx) => {
            const keyValue = row?.[rowKey] ?? idx;

            return (
              <TableRow key={keyValue}>
                {cols.map((col) => (
                  <TableCell key={col.field}>
                    {row?.[col.field] != null ? String(row[col.field]) : ""}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}

          {rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={cols.length || 1}>
                No hay datos para mostrar.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
