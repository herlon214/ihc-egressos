// Libs
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  tableHeader: {
    textAlign: 'center'
  },
  tableData: {
    textAlign: 'center'
  }
})

const TableComponent = ({ classes, headers, data }) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            { Object.keys(headers).map(header => <TableCell className={classes.tableHeader}>{headers[header]}</TableCell>) }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, key) => {
            return (
              <TableRow key={item.id}>
                { Object.keys(headers).map((header) => <TableCell className={classes.tableData}>{ item.get(header) }</TableCell>) }
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(TableComponent)
