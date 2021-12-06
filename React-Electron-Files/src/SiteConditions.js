import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Item1 = () => {
  return (
    <>
        <TitleStyle>SITE CONDITIONS</TitleStyle>
    </>
  );
}

const Item2 = () => {
  return(
    <>
      <Grid container spacing ={1}>
        <Grid item xs={6.2}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "WEATHER CONDITIONS"
              multiline
              rows={1}
              placeholder="CONDITIONS HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={4.6}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "PROJECT RISK LEVEL"
              multiline
              rows={1}
              placeholder="RISK LEVEL HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        
        <Grid item xs={6.2}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "RECIEVING WATER BODYS(S)"
              multiline
              rows={1}
              placeholder="BODIES OF WATER HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={4.6}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "PERCENT COMPLETE BY TIME"
              multiline
              rows={1}
              placeholder="PERCENT HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={3.53}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "TOTAL DISTURBED SOIL AREA(DSA)(ACRES)"
              multiline
              rows={1}
              placeholder="DSA HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={3.53}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "ACTIVE DSA(ACRES)"
              multiline
              rows={1}
              placeholder="ACTIVE DSA HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={3.53}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth sx={{m: 0.6}} variant = "filled">
              <TextField
              id = "outlined-mutiline-static"
              label = "INACTIVE DSA(ACRES)"
              multiline
              rows={1}
              placeholder="INACTIVE DSA HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>


      
      </Grid>
      </>
   );
};
  
export default function SiteConditions() {
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