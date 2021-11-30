import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(categories, findings) {
  return { categories, findings };
}

const rows = [
  createData('Soil Stabilization'),
  createData('Sediment Control'),
  createData('Tracking Control'),
  createData('Wind Erosion Control'),
  createData('Non-Storm Water'),
  createData('Waste Management'),
  createData('Tahoe CGP-Specific Requirements'),
  createData('Total'),
];

/*const rows2 = [
  
];
*/
const Item1 = () => {
  return (
      <>
          <TextField
              id="outlined-multiline-static"
              label="Number of Findings"
              multiline
              rows={1}
              placeholder="Enter the number of findings"
              fullWidth
              />
      </>
)
};

export default function Counter() {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell>Number of Findings</TableCell>
          </TableRow>
          
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.categories}</TableCell>
              <TableCell align="right">{
                
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={2}>
                      <Item1/>
                    </Grid>
                  </Grid>
                </Box>}
                
                </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
        


  );
}