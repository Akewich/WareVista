import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Forthdata.scss";

function createDataTable(name: string, Quantity: number, Day: string): any {
  return { name, Quantity, Day };
}
const rows = [
  createDataTable("Cluth", 5, "10/4/2567"),
  createDataTable("Tranmission", 70, "10/4/2567"),
  createDataTable("Drive shaft", 40, "10/4/2567"),
  createDataTable("Differential", 10, "10/4/2567"),
  createDataTable("Idler Arm", 20, "10/4/2567"),
  createDataTable("Car battery", 50, "10/4/2567"),
  createDataTable("Various sensor", 100, "10/4/2567"),
];
export const Forthdata = () => {
  return (
    <div className="forthData">
      <h2>Data4</h2>
      <TableContainer component={Paper}>
        <Table sx={{ width: 735 }} aria-label="simple table">
          <TableHead>
            <TableRow className="headTable">
              <TableCell>Name</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((rows) => (
              <TableRow
                key={rows.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {rows.name}
                </TableCell>
                <TableCell align="center">{rows.Quantity}</TableCell>
                <TableCell align="right">{rows.Day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
