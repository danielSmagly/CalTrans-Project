import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

  const [district, setDistrict] = React.useState('');

  const handleChange = (event) => {
    setDistrict(event.target.value);
  };

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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" fontSize="1">DISTRICT</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                label="DISTRICT"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </FormControl>
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

