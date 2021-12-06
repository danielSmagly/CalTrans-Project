import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Item1 = () => {
  return (
    <>
        <TitleStyle>REGULATORY STATUS</TitleStyle>
    </>
  );
}

const Item2 = () => {
  return(
    <>
      <Grid container spacing ={1}>
        <Grid item xs={2}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
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

        <Grid item xs={8.6}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
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

        
        <Grid item xs={10.6}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "PLACS(PERMITS,LICENSES,AGREEMENTS,CERTIFICATIONS)SPECIFYING TEMPORARY BMP REQIREMENTS"
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