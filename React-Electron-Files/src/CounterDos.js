import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import styled from 'styled-components'


export default function CounterDos() {

  const [countSS, setCountSS] = React.useState(0)
  function incrementCountSS() {
    setCountSS(prevCount => prevCount + 1)
  }
  function decrementCountSS() {
    setCountSS(prevCount => prevCount - 1)
  }


  const [countSC, setCountSC] = React.useState(0)
  function incrementCountSC() {
    setCountSC(prevCount => prevCount + 1)
  }
  function decrementCountSC() {
    setCountSC(prevCount => prevCount - 1)
  }


  const [countTC, setCountTC] = React.useState(0)
  function incrementCountTC() {
    setCountTC(prevCount => prevCount + 1)
  }
  function decrementCountTC() {
    setCountTC(prevCount => prevCount - 1)
  }


  const [countWE, setCountWE] = React.useState(0)
  function incrementCountWE() {
    setCountWE(prevCount => prevCount + 1)
  }
  function decrementCountWE() {
    setCountWE(prevCount => prevCount - 1)
  }


  const [countNS, setCountNS] = React.useState(0)
  function incrementCountNS() {
    setCountNS(prevCount => prevCount + 1)
  }
  function decrementCountNS() {
    setCountNS(prevCount => prevCount - 1)
  }


  const [countWM, setCountWM] = React.useState(0)
  function incrementCountWM() {
    setCountWM(prevCount => prevCount + 1)
  }
  function decrementCountWM() {
    setCountWM(prevCount => prevCount - 1)
  }




  const style = {

    fontSize: 20,
    
  }

  const style2 = {

    fontSize: 20,
    padding: '0px 45.5px 0px 0px'
  }
  return (
    <>
      <TitleStyle>
        <p1>CONSTRUCTION SITE BEST MANAGEMENT PRACTICES - BMP</p1>
      </TitleStyle>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">CATEGORY</TableCell>
              <TableCell align="right">Number of Findings</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell align="left">Soil Stabilization</TableCell>
              <TableCell align="right">{
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={8}>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountSS}>
                        <RemoveIcon />
                      </IconButton>

                      <span style={style}> {countSS} </span>

                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountSS}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">Sediment Control</TableCell>
              <TableCell align="right">{
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={8}>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountSC}>
                        <RemoveIcon />
                      </IconButton>

                      <span style={style}> {countSC} </span>

                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountSC}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">Tracking Control</TableCell>
              <TableCell align="right">{
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={8}>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountTC}>
                        <RemoveIcon />
                      </IconButton>

                      <span style={style}> {countTC} </span>

                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountTC}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">Wind Erosion Control</TableCell>
              <TableCell align="right">{
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={8}>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountWE}>
                        <RemoveIcon />
                      </IconButton>

                      <span style={style}> {countWE} </span>

                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountWE}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">Non-Storm Water</TableCell>
              <TableCell align="right">{
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={8}>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountNS}>
                        <RemoveIcon />
                      </IconButton>

                      <span style={style}> {countNS} </span>

                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountNS}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left">Waste Management</TableCell>
              <TableCell align="right">{
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={8}>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountWM}>
                        <RemoveIcon />
                      </IconButton>

                      <span style={style}> {countWM} </span>

                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountWM}>
                        <AddIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>}
              </TableCell>
            </TableRow>


            <TableRow>
              <TableCell align="left">TOTAL</TableCell>
              <TableCell align="right">{
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={0} columns={8}>
                    <Grid item xs={8}>
                      <span style={style2}> {countTC + countSS + countSC + countWE + countNS + countWM} </span>
                    </Grid>
                  </Grid>
                </Box>}
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
    
`;
