import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, TableFooter, TablePagination } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
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
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
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

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
