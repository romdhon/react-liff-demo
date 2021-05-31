import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ConfigTableInfo from './ConfigTableInfo';

const useStyles = makeStyles({
  table: {
    // minWidth: 650
  }
});

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <Paper>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Topic</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.topic}</TableCell>
              <TableCell align="center">{item.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
