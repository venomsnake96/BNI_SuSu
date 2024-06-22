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

function createData(name, diamante, aniversario , expo, sesion) {
  return { name, diamante, aniversario , expo, sesion };
}

const rows = [
  createData('Sesion Especial XV Aniversario BNI Mosqueteros', <DoneIcon color='success'/>, <CloseIcon color='error' />, <CloseIcon color='error' />, <DoneIcon color='success'/>),
  createData('Expo', <DoneIcon color='success'/>, <DoneIcon color='success'/>, <DoneIcon color='success'/>, <DoneIcon color='success'/>),
  createData('Conferencias', <DoneIcon color='success'/>, <DoneIcon color='success'/>, <CloseIcon color='error' />, <CloseIcon color='error' />),
  createData('Ruedas de Negocios', <DoneIcon color='success'/>, <DoneIcon color='success'/>, <CloseIcon color='error' />, <CloseIcon color='error' />),
  createData('Speed Networking VIP Access',<DoneIcon color='success'/>,<CloseIcon color='error' />,<CloseIcon color='error' />, <CloseIcon color='error' />),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table   sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Acceso (individual)</TableCell>
            <TableCell align="center">Diamante</TableCell>
            <TableCell align="center">Pase <br /> 15 aniversario</TableCell>
            <TableCell align="center">Expo</TableCell>
            <TableCell align="center">Sesion <br /> Especial <br /> Mosqueteros</TableCell>
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
              <TableCell align="center">{row.diamante}</TableCell>
              <TableCell align="center">{row.aniversario}</TableCell>
              <TableCell align="center">{row.expo}</TableCell>
              <TableCell align="center">{row.sesion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}