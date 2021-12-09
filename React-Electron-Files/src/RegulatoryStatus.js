import * as React from 'react';
import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
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
  'None',
  'U.S. Army Corps of Engineer - Federal CWA Section 404 Dredge and Fill Permit',
  'U.S. Fish and Wildlife Service - Federal ESA Section 7 - Biological Opinion for flora and fauna',
  'U.S. Nation Marine Fisheries Service - Federal ESA Section 7 - Biological Opnion for fisheries',
  'California Department of Fish and Wildlife - California ESA Inccidental Take Permit',
  'California RWQCB - Federal CWA Section 401 Water Quality Certification',
  'Califonia Department of Fish and Wildlife Service - California FI..E Code Section 1602 Lake or Stream Bed Alteration Agreement',
  'California Coastal Commission - Coastal Development Permit',
  'San Fransisco Bay Conservation and Development Commission - San Fransisco Bay Conservation and Development Permit',
  'Californa Resources Agency - Flood Protection Board Encroachment Permit',
  'Califonia SWRCB - Statewide General WDRs for Discharges to Land with a Low Threat to Water Quality',
  'California RWQCB - Waste Discharge Requirements for Dewatering and other Low Threat Discharges to Surface Waters',
  'California State Lands Commision - PRC 1766.9 Public Agency Lease Agreement',
  'Other (Indicate other Stormwater related PLACS)',
];

const rwqcb = [
  'North Coast - Region 1',
  'San Francisco - Region 2',
  'Central Coast - Region 3',
  'Los Angeles - Region 4',
  'Central Valley - Region 5 Sacramento',
  'Central Valley - Region 5 Fresno',
  'Central Valley - Region 5 Redding',
  'Lahontan - Region 6 - South Lake Tahoe',
  'Lahontan - Region 6 - Victorville',
  'Colorado River - Region 7',
  'Santa Ana - Region 8',
  'San Diego - Region 9',

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
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const [personName2, setPersonName2] = React.useState([]);

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName2(typeof value === 'string' ? value.split(',') : value);
  };
  return(
    <>
      <Grid container spacing ={1}>
      <Grid item xs={3}>
          
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label" fontSize="1">SWPPP OR WPCP</InputLabel>
              <Select
                labeId="demo-simple-select-label"
                id="demo-simple-select"
                //value = {age}
                label= "SWPPP OR WPCP"
                //onChange={changeHandle}
                >
                <MenuItem value={1}>None</MenuItem>
                <MenuItem value={2}>SWPPP</MenuItem>
                <MenuItem value={3}>WPCP</MenuItem>
                </Select>

            </FormControl>
          
        </Grid>

        <Grid item xs={13}>
          
            <FormControl fullWidth >
              <InputLabel id="demo-multiple-chip-label">RWQCB(S)</InputLabel>
              <Select 
              
              label="RWQCB(S)"
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
              {rwqcb.map((name) => (
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
          
        </Grid>

        
        <Grid item xs={16}>
          
          <FormControl fullWidth>
        <InputLabel id="demo-multiple-chip-label">PLACS</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          label="PLACS"
          value={personName2}
          onChange={handleChange2}
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
              style={getStyles(name, personName2, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          
        </Grid>
      </Grid>
      </>
   );
};
  
export default function RegulatoryStatus() {
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
