import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import AdminReview from './AdminReview';
import NewAR from './NewAdminReview';
import Child from './ObservationChild';
import Parent from './ObservationParent';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import ObservationParent from './ObservationParent';



const Item1 = () => {
    return (
        <>
            <TitleStyle2>
                <p1>SUMMARY OF FINDINGS AND CORRECTIVE ACTION STATUS</p1>
            </TitleStyle2>
          <br />
            <TitleStyle>
                <p1>STORMWATER CONTRACT ADMINISTRATION SUMMARY</p1>
            </TitleStyle>
        </>
        );
};

const Item2 = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [date, setDate] = React.useState();

    const handleChangeT = (newValue) => {
        setDate(newValue);
    };

    const [TF, setTF] = React.useState('');
    const handleChangeY = (event) => {
        setTF(event.target.value)
    }


    const [Test, setTest] = React.useState('');
    const handleChangeTest = (event) => {
        setTest(event.target.value)
    }

    var Yes, No = null;
    if (Test.includes(date)) {
        Yes = "Yes"
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={1.3}>
                    <Box sx={{ minWidth: 100 }}>
                        <FormControl fullWidth>
                            <TextField
                                label="FINDING NO."
                                multiline
                                rows={1}
                                defaultValue = {"A1"}
                                disabled
                            >
                            </TextField>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={6.2}>
                    <Box sx={{ minWidth: 400 }}>
                    <FormControl fullWidth>
                            <Child/>
                            <Parent/>
                        </FormControl>
                    </Box>
                </Grid>


                <Grid item xs={1.3}>
                    <Box sx={{ minWidth: 100 }}>
                    <FormControl fullWidth>
                    <Select
                defaultValue = "No"
                value = {TF}
                label = "Corrected?"
                onChange={handleChangeTest}
                
                >
                    
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>


                <Grid item xs={2}>
                    <Box sx={{ minWidth: 240 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                label="Date Completed"
                                value={date}
                                onChange={handleChangeT}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
            </Grid>
            </>
    );
};

const Item3 = () => {
    return (
        <>
            <TitleStyle>
                <p1>CONSTRUCTION SITE BMP SUMMARY</p1>
            </TitleStyle>
        </>
    );
};

const Item4 = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={1.3}>
                    <Box sx={{ minWidth: 100 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">Finding No.</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="FINDING NO."
                                onChange={handleChange}
                            >
                                <MenuItem value={11}>B1</MenuItem>
                                <MenuItem value={21}>B2</MenuItem>
                                <MenuItem value={31}>B3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={6.2}>
                    <Box sx={{ minWidth: 400 }}>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">Finding Description Summary</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="BMP CATEGORY"
                                onChange={handleChange}
                            >
                                <MenuItem value={11}>Description 1</MenuItem>
                                <MenuItem value={21}>Description 2</MenuItem>
                                <MenuItem value={31}>Description 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={1.3}>
                    <Box sx={{ minWidth: 100 }}>
                    <FormControl fullWidth>
                    <TextField
                id="outlined-multiline-static"
                label="Corrected?"
                multiline
                rows={1}
                placeholder="Yes/No"
                fullWidth
                />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box sx={{ minWidth: 240 }}>
                    <FormControl fullWidth sx={{ m: 0.6 }} variant="filled">
                    <TextField
                id="outlined-multiline-static"
                label="Date of Corrective Action Completion"
                multiline
                rows={1}
                placeholder="Date goes here"
                fullWidth
                />
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default function FindingSummary({ObservationParent, ObservationChild}) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={11}>
          <Grid item xs={12}>
            <Item1/>
          </Grid>
          <Grid item xs={12}>
            <Item2 ObsParent={ObservationParent}>{ObservationChild} </Item2>
          </Grid>
          <Grid item xs={12}>
            <Item3/>
          </Grid>
          <Grid item xs={12}>
            <Item4/>
          </Grid>
        </Grid>
      </Box>
    );
  };

const TitleStyle2 = styled.div`
    text-align: center;
    font-size: 1.10rem;
    font-weight: 500;
`;

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
`;
