import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PokemonTable({ pokemonData }) {
  if (!pokemonData) {
    return null; // or loading indicator, error message, etc.
  }
  const { height, weight, types } = pokemonData;

  const cellStyle = {
    fontSize: "20px", // Change this value to adjust the font size
  };

  return (
    <TableContainer component={Paper} sx={{ height: "fit-content" }}>
      <Table
        size="big"
        aria-label="a dense table"
        sx={{
          backgroundColor: "#f8f8ff",
          alignItems: "center",
        }}
      >
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={cellStyle}>Height</TableCell>
            <TableCell sx={cellStyle}>{height}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={cellStyle}>Weight</TableCell>
            <TableCell sx={cellStyle}>{weight}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell sx={cellStyle}>Types</TableCell>
            {types.map((typeData, index) => (
              <TableCell key={index} sx={cellStyle}>
                {typeData.type.name}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
