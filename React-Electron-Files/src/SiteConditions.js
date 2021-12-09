import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


const Item1 = () => {
  return (
    <>
        <TitleStyle>SITE CONDITIONS</TitleStyle>
    </>
  );
}

const Item2 = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
      setAge(event.target.value);
  };

  return(
    <>
      <Grid container spacing ={1}>
        <Grid item xs={10}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth>
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
        <Grid item xs={6}>
            <Box sx={{ minWidth: 130 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" fontSize="1">PROJECT RISK LEVEL</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="PROJECT RISK LEVEL"
                    onChange={handleChange}
                     >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>Tahoe</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        
        <Grid item xs={10}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth>
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

        <Grid item xs={6}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth >
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

        <Grid item xs={5.3}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth>
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

        <Grid item xs={5.3}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth>
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

        <Grid item xs={5.3}>
          <Box sx={{minWidth:100}}>
            <FormControl fullWidth>
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
  background-color: #abc0d4l
  font-size: 1.10rem;
  font-weight: 500;
`;