import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, year, period, status, addTime, resTime, inspector) {
  return { id, name, year, period, status, addTime, resTime, inspector };
}

const rows = [
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
  createData('000005', '12-korxona shakli', 2021, 'yanvar-iyul', 'Qoralama', '23.08.2021 09:43:28', '11.07.2021 17:48:13', 'Эшмуродов Ғанишер Ашрафович тел: (0371) 202-81-45'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{mt: 2}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Nomi</StyledTableCell>
            <StyledTableCell align="center">Yil</StyledTableCell>
            <StyledTableCell align="center">Davr</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Topshirilgan vaqt</StyledTableCell>
            <StyledTableCell align="center">Natija javobi vaqti</StyledTableCell>
            <StyledTableCell align="center">Inspector ma'lumotlari</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.year}</StyledTableCell>
              <StyledTableCell align="center">{row.period}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.addTime}</StyledTableCell>
              <StyledTableCell align="center">{row.resTime}</StyledTableCell>
              <StyledTableCell align="center">{row.inspector}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
