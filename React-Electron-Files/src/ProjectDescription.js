import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const Item1 = () => {
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        label="PROJECT DESCRIPTION"
        multiline
        rows={4}
        placeholder="Enter Project Description"
        fullWidth
      />
    </>
  )
};

const Item2 = () => {
  return (
    <>
      <Box sx={{ ml: 1 }}>
        <Grid container spacing={1} columns={8}>
          <Grid item xs={6}>
            <TextField style={{ minWidth: '25rem' }}
              id="outlined-multiline-static"
              label="CONTRACT NUMBER/CO/RTE/PM"
              multiline
              rows={1}
              placeholder="Enter Contract Number/CO/RTE/PM"
              fullWidth
            />
          </Grid>

          <Grid item xs={2}>
            <TextField style={{ minWidth: '7rem' }}
              id="outlined-multiline-static"
              label="DISTRICT"
              multiline
              rows={1}
              placeholder="District"
              fullWidth
            />
          </Grid>

          <Grid item xs={3}>
            <TextField style={{ minWidth: '10rem' }}
              id="outlined-multiline-static"
              label="WDID NUMBER"
              multiline
              rows={1}
              placeholder="Enter WDID Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <TextField style={{ minWidth: '18.5rem' }}
              id="outlined-multiline-static"
              label="PROJECT NAME"
              multiline
              rows={1}
              placeholder="Enter Project Name"
              fullWidth
            />
          </Grid>


        </Grid>
      </Box>
    </>

  )
};

export default function ProjectDescription() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columns={16}>
        <Grid item xs={8}>
          <Item1 />
        </Grid>
        <Grid item xs={8}>
          <Item2 />
        </Grid>
      </Grid>
    </Box>
  );
};
