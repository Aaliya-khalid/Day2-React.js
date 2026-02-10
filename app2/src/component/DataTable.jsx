import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const Datatable = () => {
  return (
    <div style={{marginTop:'50px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Place</TableCell>
                        <TableCell>Age</TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Aaliya</TableCell>
                        <TableCell>Aluva</TableCell>
                        <TableCell>21</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
      
    </div>
  )
}

export default Datatable
