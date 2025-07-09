import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const columns = [
  { label: "ID", minWidth: 70 },
  { label: "Name", minWidth: 170 },
  { label: "Email", minWidth: 100 },
  { label: "Address", minWidth: 170, align: "right" },
  { label: "Role", minWidth: 170, align: "right" },
  { label: "Actions", minWidth: 170, align: "right" },
];
const getKeyFromLabel = (label) => {
  return label.toLowerCase();
};

let idCounter = 0;

function createData(name, email, address, role) {
  return {
    id: ++idCounter,
    name,
    email,
    address,
    role,
  };
}

const rows = [
  createData("Ahmed", "ahmed@example.com", "Cairo", "Admin"),
  createData("Sara", "sara@example.com", "Alexandria", "Doctor"),
  createData("Mohamed", "mohamed@example.com", "Giza", "Nurse"),
  createData("Fatma", "fatma@example.com", "Luxor", "Receptionist"),
];

function AdminTables() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="p-2 ">
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="py-5 px-1  mb-5 my-3 "
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "600" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const key = getKeyFromLabel(column.label);
                      if (key === "actions") {
                        return (
                          <TableCell key={column.label} align={column.align}>
                            <div className="flex items-center justify-end gap-1">
                              <span className="text-xl text-blue-600 cursor-pointer">
                                <FaEdit />
                              </span>{" "}
                              <span className="text-xl text-red-600 cursor-pointer">
                                <MdDelete />
                              </span>
                            </div>
                          </TableCell>
                        );
                      }
                      const value = row[key];
                      return (
                        <TableCell key={column.label} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[7, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
export default AdminTables;
