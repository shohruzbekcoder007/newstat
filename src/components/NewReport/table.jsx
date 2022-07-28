import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Link } from '@mui/material';

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

function createData(name, period, addTime, holati, action) {
  return { name, period, addTime, holati, action };
}

const rows = [
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Чораклик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Йиллик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Чораклик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Йиллик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Йиллик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Чораклик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
  createData('12-korxona shakli', 'Ойлик', 'ҳисобот давридан кейинги ойнинг 5-санасидан кечиктирмай', 'Ochiq', ''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{mt: 2}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nomi</StyledTableCell>
            <StyledTableCell align="center">Davriyligi</StyledTableCell>
            <StyledTableCell align="center">Topshirilish muddati</StyledTableCell>
            <StyledTableCell align="center">Holati</StyledTableCell>
            <StyledTableCell align="center">Amaliyot</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center"><Link href="#" underline="none">{row.name}</Link></StyledTableCell>
              <StyledTableCell align="center">{row.period}</StyledTableCell>
              <StyledTableCell align="center">{row.addTime}</StyledTableCell>
              <StyledTableCell align="center">{row.holati}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="outlined">Yaratish</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
