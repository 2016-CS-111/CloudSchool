import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, city, province, ownership, actions) {
  id += 1;
  return { id, name, city, province, ownership, actions};
}

const rows = [
  createData('Uet', 'Lahore', 'Punjab', 'Govt', 'Edit/Delete'),
  createData('Fast', 'Lahore', 'Punjab', 'Private', 'Edit/Delete'),
  createData('Nust', 'Islamabad', 'Fedral', 'Semi-Govt', 'Edit/Delete'),
  createData('Giki', 'Swabi','KPK', 'Private', 'Edit/Delete'),
  createData('Comsats', 'Lahore', 'Lahore', 'Private', 'Edit/Delete'),
];

function CustomizedTable(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>            
            <CustomTableCell numeric>Name</CustomTableCell>
            <CustomTableCell numeric>City</CustomTableCell>
            <CustomTableCell numeric>Province</CustomTableCell>
            <CustomTableCell numeric>Ownership</CustomTableCell>
            <CustomTableCell numeric>Actions</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell numeric>{row.name}</CustomTableCell>
                <CustomTableCell numeric>{row.city}</CustomTableCell>
                <CustomTableCell numeric>{row.province}</CustomTableCell>
                <CustomTableCell numeric>{row.ownership}</CustomTableCell>
                <CustomTableCell padding="checkbox">
                    <IconButton aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit">
                        <EditIcon />
                    </IconButton>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);