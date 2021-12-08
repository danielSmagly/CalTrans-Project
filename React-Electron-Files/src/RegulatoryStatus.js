import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const Item1 = () => {
  return (
    <>
        <TitleStyle><p1>REGULATORY STATUS</p1></TitleStyle>
    </>
  );
}

const Item2 = () => {
  return(
    <>
      <Grid container spacing ={1}>
        <Grid item xs={3}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth >
              <TextField
              id = "outlined-mutiline-static"
              label = "SWPPP OR WPCP"
              multiline
              rows={1}
              placeholder="SWPPP OR WPCP HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth >
              <TextField
              id = "outlined-mutiline-static"
              label = "RWQCB(S)"
              multiline
              rows={1}
              placeholder="RWQCB(S) HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        
        <Grid item xs={11}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth sx={{mt: 0.6}} >
              <TextField
              id = "outlined-mutiline-static"
              label = "PLACS (PERMITS,LICENSES,AGREEMENTS,CERTIFICATIONS)SPECIFYING TEMPORARY BMP REQIREMENTS"
              multiline
              rows={1}
              placeholder="BODIES OF WATER HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      </>
   );
};
  
export default function RegulatoryStatus() {
  return(
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2} columns={11}>
        <Grid item xs={12}>
          <Item1/>
        </Grid>
        <Grid item xs={12}>
          <Item2/>
        </Grid>
      </Grid>
    </Box>
  );
};

const TitleStyle = styled.div`
  background-color: #abc0d4l
  font-size: 1.10rem;
  font-weight: 500;
`;
