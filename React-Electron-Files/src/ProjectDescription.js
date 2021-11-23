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
            <Box sx={{ml: 1}}>
                 <TextField style ={{width: '23rem'}}
                    id="outlined-multiline-static"
                    label="CONTRACT NUMBER/CO/RTE/PM"
                    multiline
                    rows={1}
                    placeholder="Enter Contract Number/CO/RTE/PM"
                    />

                <TextField style ={{width: '7.5rem'}}
                    id="outlined-multiline-static"
                    label="DISTRICT"
                    multiline
                    rows={1}
                    placeholder="District"
                    />
      
            <Box sx={{mt: 1.6}}>
                <TextField style ={{width: '12rem'}}
                    id="outlined-multiline-static"
                    label="WDID NUMBER"
                    multiline
                    rows={1}
                    placeholder="Enter WDID Number"
                    />

                <TextField style ={{width: '18.5rem'}}
                    id="outlined-multiline-static"
                    label="PROJECT NAME"
                    multiline
                    rows={1}
                    placeholder="Enter Project Name"
                    />
            </Box>
        </Box>
      </>
      
    )
  };

export default function ProjectDescription() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columns={16}>
        <Grid item xs={8}>
          <Item1/>
        </Grid>
        <Grid item xs={8}>
          <Item2/>
        </Grid>
      </Grid>
    </Box>
  );
};
