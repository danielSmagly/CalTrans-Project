import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import loadable from '@loadable/component';
import { Suspense } from 'react';
import Button from '@mui/material/Button';


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
    
        var YN = "No"
    if (date != null) {
        YN = "Yes"
    }

    return (
        <>
            <Grid container spacing={1} columns={16}>
                <Grid item xs={2}>
                    
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
                    
                </Grid>

                <Grid item xs={9}>
                    
                    <FormControl fullWidth>
                             <TextField
                         label = "Finding Description Summary"
                         multiline
                         fullWidth
                          >
                             </TextField>
                        </FormControl>
                    
                </Grid>


                <Grid item xs={2}>
                    
                    <FormControl fullWidth>
                    <TextField
                value={YN}
                label = "Corrected?"
                onChange={handleChange}
                    >
                                </TextField>
                        </FormControl>
                    
                </Grid>


                <Grid item xs={3}>
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                label="Date Completed"
                                value={date}
                                onChange={handleChangeT}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    
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
    const [date, setDate] = React.useState();

    const handleChangeT = (newValue) => {
        setDate(newValue);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
        var YN = "No"
    if (date != null) {
        YN = "Yes"
    }
    
    return (
        <>
            <Grid container spacing={1} columns={16}>
                <Grid item xs={2}>
                    
                        <FormControl fullWidth>
                            <TextField
                                label="FINDING NO."
                                multiline
                                rows={1}
                                defaultValue = {"B1"}
                                disabled
                            >
                            </TextField>
                        </FormControl>
                    
                </Grid>

                <Grid item xs={9}>
                    
                    <FormControl fullWidth>
                    <TextField
                         label = "Finding Description Summary"
                         multiline
                         fullWidth
                          >
                        </TextField>
                        </FormControl>
                    
                </Grid>

                <Grid item xs={2}>
                    
                    <FormControl fullWidth>
                    <TextField
                value={YN}
                label = "Corrected?"
                onChange={handleChange}
                    >
                                </TextField>
                        </FormControl>
                    
                </Grid>

                <Grid item xs={3}>
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                label="Date Completed"
                                value={date}
                                onChange={handleChangeT}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    
                </Grid>
            </Grid>
        </>
    );
};

const AdminSummaryLoad = loadable(() => import('./AdminSummaryTBs'))
const BMPSummaryLoad = loadable(() => import('./BMPSummaryTBs'))


export default function FindingSummary() {
    const [loadAR, setAR] = React.useState(() => {
        return 0
    })
    const [LoadBMP, setBMP] = React.useState(() => {
        return 0
    })
    

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16}>
            <Item1/>
          </Grid>
          <Grid item xs={16}>
          <div>
            <Button variant="outlined" onClick={() => setAR(prevAR => prevAR + 1)}>
                ADD ADMINISTRATIVE SUMMARY
            </Button>
            
            {loadAR ? (
                <Suspense fallback={<div>Loading Component...</div>}>
                    <AdminSummaryLoad/>
                </Suspense>
            ) : null}
          </div>
          <br/>
            <Item2/>
          </Grid>
          <Grid item xs={16}>
            <Item3/>
          </Grid>
          <Grid item xs={16}>
          <div>
            <Button variant="outlined" onClick={() => setBMP(prevBMP => prevBMP + 1)}>
                ADD BMP SUMMARY
            </Button>

            {LoadBMP ? (
                <Suspense fallback={<div>Loading Component...</div>}>
                    <BMPSummaryLoad/>
                </Suspense>
            ) : null}
         </div>
         <br/>
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
