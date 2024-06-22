import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

function createData(name, acceso, rueda, paquete ) {
  return { name, acceso, rueda, paquete  };
}

const rows = [
  createData('Acceso XV Aniversario', '2 Accesos','6 Accesos', ),
  createData('Acceso a Rueda de Nogocios', <DoneIcon color='success'/>, <DoneIcon color='success'/>),
  createData('Paqute Expositor', <DoneIcon color='success'/>, <DoneIcon color='success'/>),
  
];

export default function Table2() {
  return (
    <TableContainer component={Paper}>
      <Table   sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stands</TableCell>
            <TableCell align="center">Stand</TableCell>
            <TableCell align="center">Pabellon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.acceso}</TableCell>
              <TableCell align="center">{row.rueda}</TableCell>
              <TableCell align="center">{row.paqute}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}