import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import styled from 'styled-components';

const ARTitle = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TitleStyle>
                        <p1>STORMWATER CONTRACT ADMINISTRATION REVIEW</p1>
                    </TitleStyle>
                </Grid>
            </Grid>
        </Box>
    )
}

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
`;

export default ARTitle