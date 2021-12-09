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
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Item1 = () => {
  return (
    <>
        <TitleStyle><p1>REGULATORY STATUS</p1></TitleStyle>
    </>
  );
}

const Item2 = () => {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
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
          <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
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
