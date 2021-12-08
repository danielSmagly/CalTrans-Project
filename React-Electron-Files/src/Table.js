import * as React from 'react';
import CounterDos from './CounterDos'
import Counter from './Counter'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import styled from 'styled-components'

export default function Table() {
    return (
        <>
        <ReviewStyle><p1>REVIEW REPORT SUMMARY</p1></ReviewStyle>
        
        
            <Box sx={{ flexGrow: 1, mt: 1}}>
                <Grid container spacing={0} columns={16}>
                    <Grid item xs={8}>
                        <Counter/>
                    </Grid>
                    <Grid item xs={8}>
                        <CounterDos/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

const ReviewStyle = styled.div`
font-size: 1.18rem;
line-height: normal;
font-weight: bold;
`