import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {
  Paper,
  Card,
  CardContent,
  Table,
  TableBody,
  TableFooter,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F5F6FA",
    color: '#A3A6B4',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type()': {
    backgroundColor: '#FFFFFF',
    color: '#4D4F5C'
  }
}));

function createData(location, views, sales, conversion, total) {
  return { location, views, sales, conversion, total };
}

const rows = [
  createData('google.com', 3746, 752, 43, '19,291'),
  createData('facebook.com', 8126, 728, 32, '17,638'),
  createData('twitter.com', 8836, 694, 28, '16,218'),
  createData('Direct,email,IM', 1173, 645, 24, '14,421'),
  createData('linkedin.com', 2739, 539, 20, '12,370'),
  createData('instagram.com', 2739, 539, 20, '12,370'),
];

export default function AppReferreTableList() {

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' color="text.secondary" gutterBottom>
          Referrer
        </Typography>
        <TableContainer component={Paper} sx={{
          width: '100%',
          '@media (max-width: 470px)': {
            width: 305,
          },
         }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell align="left">Views</StyledTableCell>
                <StyledTableCell align="left">Sales</StyledTableCell>
                <StyledTableCell align="left">Conversion</StyledTableCell>
                <StyledTableCell align="left">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.location}>
                  <StyledTableCell component="th" scope="row">
                    {row.location}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.views}</StyledTableCell>
                  <StyledTableCell align="left">{row.sales}</StyledTableCell>
                  <StyledTableCell align="left">{row.conversion}%</StyledTableCell>
                  <StyledTableCell align="left">${row.total}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <Typography variant='body2' color="#3B86FF" sx={{ mx: '15px', my: '10px' }}>
                Show More
              </Typography>
            </TableFooter>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
