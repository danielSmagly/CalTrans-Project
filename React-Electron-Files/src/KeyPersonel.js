import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';


const Item1 = () => {
  return (
    <>
        <TitleStyle>KEY PERSONNEL</TitleStyle>
    </>
  );
}

const Item2 = () => {
  return(
    <>
      <Grid container spacing ={1}>
        <Grid item xs={10}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth>
              <TextField
              id = "outlined-mutiline-static"
              label = "IQA REVIEWER"
              multiline
              rows={1}
              placeholder="IQA"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth>
              <TextField
              id = "outlined-mutiline-static"
              label = "REVIEW DATE"
              multiline
              rows={1}
              placeholder="REVIEW DATE HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        
        <Grid item xs={10}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth>
              <TextField
              id = "outlined-mutiline-static"
              label = "RESIDENT ENGINEER(RE)"
              multiline
              rows={1}
              placeholder="RE HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth>
              <TextField
              id = "outlined-mutiline-static"
              label = "RE PHONE NUMBER"
              multiline
              rows={1}
              placeholder="RE PHONE HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={16}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth>
              <TextField
              id = "outlined-mutiline-static"
              label = "REVIEW PARTICIPANTS"
              multiline
              rows={1}
              placeholder="REVIEW PARTICIPANTS HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={10}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth>
              <TextField
              id = "outlined-mutiline-static"
              label = "CONSTRUCTION COMPANY"
              multiline
              rows={1}
              placeholder="CONSTRUCTION COMPANY HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth>
              <TextField
              id = "outlined-mutiline-static"
              label = "WATER POLLUTION CONTROL MANAGER(WPCM)"
              multiline
              rows={1}
              placeholder="WPCM HERE"
              fullWidth
              />
            </FormControl>
          </Box>
        </Grid>


      
      </Grid>
      </>
   );
};
  
export default function KeyPersonnel() {
  return(
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16}>
          <Item1/>
        </Grid>
        <Grid item xs={16}>
          <Item2/>
        </Grid>
      </Grid>
    </Box>
  );
};

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
`;