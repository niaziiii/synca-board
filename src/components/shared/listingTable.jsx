import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const CustomTable = ({ headers, data }) => {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
      <Table contentEditable>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: 600,
                  borderRight:
                    index < headers.length - 1 ? "1px solid lightgray" : "none",
                  background: "#F3F4F8",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  sx={{
                    borderRight:
                      cellIndex < row.length - 1
                        ? "1px solid lightgray"
                        : "none",
                  }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
