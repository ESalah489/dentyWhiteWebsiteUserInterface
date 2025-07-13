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
function AdminTables({ columns, rows, DeleteUserById }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  rows = rows.map((user) => ({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone || "N/A",
    role: user.role,
    address: user.address,
    age: user.age,
    clientWork: user.clientWork || "N/A",
  }));
  return (
    <div className="p-2">
      <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="py-5 px-1 mb-5 my-3"
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
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const key =
                        column.key ??
                        column.label.toLowerCase().replace(/\s/g, "");

                      if (key === "actions") {
                        return (
                          <TableCell key={column.label} align={column.align}>
                            <div className="flex items-center justify-end gap-1">
                              <span className="text-xl text-blue-600 cursor-pointer">
                                <FaEdit />
                              </span>
                              <span
                                className="text-xl text-red-600 cursor-pointer"
                                onClick={() => DeleteUserById(row._id)}
                              >
                                <MdDelete />
                              </span>
                            </div>
                          </TableCell>
                        );
                      }
                      let value;
                      if (key === "address") {
                        const { city, street, country, postalCode } =
                          row.address || {};
                        value = `${street || ""}, ${city || ""}, ${
                          country || ""
                        } (${postalCode || ""})`;
                      } else {
                        value = row[key] ?? "N/A";
                      }

                      return (
                        <TableCell key={column.label} align={column.align}>
                          {value}
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
