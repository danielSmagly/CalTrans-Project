import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline';
import styled from 'styled-components';


export default function ResponsiveDatePickers() {
  const [value, setValue] = React.useState(new Date());

  return (
    <>
      <CssBaseline />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={1.5}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Formater>
                <MobileDatePicker
                  label="Choose a date"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Formater>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={10.5}>
          <Box sx={{ minWidth: 130 }}>
              <TextField 
                id="outlined-multiline-static"
                label="VERIFIED BY (Print Name and Title)"
                multiline
                rows={1}
                placeholder="Enter Name and Title"
                fullWidth
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>

  );
}

const Formater = styled.div`
display: block;

`