import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';




const Item1 = () => {
  return (
    <>
        <TitleStyle><p1>REGULATORY STATUS</p1></TitleStyle>
    </>
  );
}
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

const PLACS = [
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
function getStyles(PLACS, personPLACS, theme) {
  return {
    fontWeight:
      personPLACS.indexOf(PLACS) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Item2 = (event) => {
  
  return(
    <>
      <Grid container spacing ={1}>
        <Grid item xs={3}>
          <Box sx={{minWidth: 100}}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label" fontSize="1">SWPPP OR WPCP</InputLabel>
              <Select
                labeId="demo-simple-select-label"
                id="demo-simple-select"
                value = {age}
                label= "SWPPP OR WPCP"
                onChange={handleChange}
                >
                <MenuItem value={1}>None</MenuItem>
                <MenuItem value={2}>SWPPP</MenuItem>
                <MenuItem value={3}>WPCP</MenuItem>
                </Select>

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
            <FormControl fullWidth sx={{mt: 0.6}} >
              <InputLabel id="demo-multiple-chip-label">PLACS</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiplevalue={personPLACS}
                onCange={handleChange}
                input={<OutlinedInput id = "select-multiple-chip" label = "chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>                  
                )}
                MenuProps={MenuProps}
        >
          {PLACSs.map((PLACS) => (
            <MenuItem
              key={PLACS}
              value={PLACS}
              style={getStyles(PLACS, personPLACS, theme)}
            >
              {PLACS}
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
  const theme = useTheme();
  const [personPLACS, setPersonPLACS] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonPLACS(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
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
};