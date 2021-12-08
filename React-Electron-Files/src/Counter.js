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

import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

export default function Counter() {

    const [countPPS, setCountPPS] = React.useState(0)
    function incrementCountPPS() {
        setCountPPS(prevCount => prevCount + 1)
    }
    function decrementCountPPS() {
        setCountPPS(prevCount => prevCount - 1)
    }


    const [countTRN, setCountTRN] = React.useState(0)
    function incrementCountTRN() {
        setCountTRN(prevCount => prevCount + 1)
    }
    function decrementCountTRN() {
        setCountTRN(prevCount => prevCount - 1)
    }


    const [countSMA, setCountSMA] = React.useState(0)
    function incrementCountSMA() {
        setCountSMA(prevCount => prevCount + 1)
    }
    function decrementCountSMA() {
        setCountSMA(prevCount => prevCount - 1)
    }


    const [countATS, setCountATS] = React.useState(0)
    function incrementCountATS() {
        setCountATS(prevCount => prevCount + 1)
    }
    function decrementCountATS() {
        setCountATS(prevCount => prevCount - 1)
    }


    const [countMAR, setCountMAR] = React.useState(0)
    function incrementCountMAR() {
        setCountMAR(prevCount => prevCount + 1)
    }
    function decrementCountMAR() {
        setCountMAR(prevCount => prevCount - 1)
    }


    const [countTSR, setCountTSR] = React.useState(0)
    function incrementCountTSR() {
        setCountTSR(prevCount => prevCount + 1)
    }
    function decrementCountTSR() {
        setCountTSR(prevCount => prevCount - 1)
    }




    const style = {
        fontSize: 20
    }

    return (
        <>


            <TitleStyle>
                <p1>STORMWATER CONTRACT ADMINISTRATION</p1>
            </TitleStyle>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Categories</TableCell>
                            <TableCell align="right">Number of Findings</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Plans and Permits</TableCell>
                            <TableCell align="right">{
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0} columns={8}>
                                        <Grid item xs={8}>
                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountPPS}>
                                                <RemoveIcon />
                                            </IconButton>

                                            <span style={style}> {countPPS} </span>

                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountPPS}>
                                                <AddIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left">Training</TableCell>
                            <TableCell align="right">{
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0} columns={8}>
                                        <Grid item xs={8}>
                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountTRN}>
                                                <RemoveIcon />
                                            </IconButton>

                                            <span style={style}> {countTRN} </span>

                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountTRN}>
                                                <AddIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left">SMARTS</TableCell>
                            <TableCell align="right">{
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0} columns={8}>
                                        <Grid item xs={8}>
                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountSMA}>
                                                <RemoveIcon />
                                            </IconButton>

                                            <span style={style}> {countSMA} </span>

                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountSMA}>
                                                <AddIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left">Active Treatment Systems</TableCell>
                            <TableCell align="right">{
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0} columns={8}>
                                        <Grid item xs={8}>
                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountATS}>
                                                <RemoveIcon />
                                            </IconButton>

                                            <span style={style}> {countATS} </span>

                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountATS}>
                                                <AddIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left">Monitoring and Reporting</TableCell>
                            <TableCell align="right">{
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0} columns={8}>
                                        <Grid item xs={8}>
                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountMAR}>
                                                <RemoveIcon />
                                            </IconButton>

                                            <span style={style}> {countMAR} </span>

                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountMAR}>
                                                <AddIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>}
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell align="left">Tahoe CGP-Specific Requirements</TableCell>
                            <TableCell align="right">{
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0} columns={8}>
                                        <Grid item xs={8}>
                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={decrementCountTSR}>
                                                <RemoveIcon />
                                            </IconButton>

                                            <span style={style}> {countTSR} </span>

                                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={incrementCountTSR}>
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
                                            <span style={style}> {countTSR + countPPS + countTRN + countSMA + countMAR + countATS} </span>
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

const TitleStyleYes = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
    
    
`;
