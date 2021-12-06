import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

import NewAR from './NewAdminReview';

const Item1 = () => {
    const [category, setCategory] = React.useState('');
    const handleChangeC = (event) => {
        setCategory(event.target.value)
    }

    const [question, setQuestion] = React.useState('');
    const handleChangeQ = (event) => {
        setQuestion(event.target.value);
    }
    var QList1, QList2, QList3, QList4 = null;
    if (category.includes("Plans and Permits")) {
        QList1 = "A1 - Is the signed SWPPP available at the construction site?"
        QList2 = "A2 - Is the SWPPP (and any amendments) prepared and signed by a certified QSD?"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("Training")) {
        QList1 = "B1 - Does the WPC manager have a current certification (QSD) in the project files?"
        QList2 = "B2 - Is the contractor conducting the required stormwater training and maintaining adequate records of this training in the project files?"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("SMARTS")) {
        QList1 = "C1 - Has the Storm Water Annual Report been developed and submitted (in the project files) for the last reporting year as required?"
        QList2 = "None"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("Active Treatment Systems")) {
        QList1 = "D1 - For projects that use an ATS, has the ATS been designed and is operated by qualified personnel, and do reporting requirements appear to be up to date and documented in the project files?"
        QList2 = "None"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("Monitoring and Reporting")) {
        QList1 = "E1 - Are inspections, monitoring, and reporting procedures performed as required documented in the project files?"
        QList2 = "E2 - If a NAL is exceeded, has a construction site and run-on evaluation been prepared and documented in the project files?"
        QList3 = "E3 - Is there a QSP Communication/Management Plan included in the SWPPP or on site?"
        QList4 = "E4 - Is there a dewatering/diversion plan included as part of the SWPPP if required?"
    } else if (category.includes("Tahoe CGP-Specific Requirements")) {
        QList1 = "None"
        QList2 = "None"
        QList3 = "None"
        QList4 = "None"
    }

    return(
        <>
            <Box sx ={{mt: 1}}>
                <TextField
                    label="Finding No."
                    style ={{width: '12.5%'}}
                    id="outlined-multiline-static"
                    multiline
                    rows={1}
                    defaultValue = {"A1"}
                    disabled
                />

                <FormControl sx={{width: '62.5%'}}> 
                    <InputLabel id="demo-simple-select-label" fontSize="1">Administrative Category</InputLabel>
                    <Select
                        label="Category"
                        id="demo-simple-select-label"
                        value={category}
                        onChange={handleChangeC}
                        >
                        <MenuItem value={"Plans and Permits"}>Plans and Permits</MenuItem>
                        <MenuItem value={"Training"}>Training</MenuItem>
                        <MenuItem value={"SMARTS"}>SMARTS</MenuItem>
                        <MenuItem value={"Active Treatment Systems"}>Active Treatment Systems</MenuItem>
                        <MenuItem value={"Monitoring and Reporting"}>Monitoring and Reporting</MenuItem>
                        <MenuItem value={"Tahoe CGP-Specific Requirements"}>Tahoe CGP-Specific Requirements</MenuItem>
                    </Select>
                </FormControl>

                <FormControl  sx={{width: '25%'}}>
                    <InputLabel id="demo-simple-select-label" fontSize="1">Checklist Question No.</InputLabel>
                    <Select
                        label="Checklist Question No."
                        id="demo-simple-select-label"
                        value={question}
                        onChange={handleChangeQ}
                        >
                        <MenuItem value={10}> {QList1} </MenuItem>
                        <MenuItem value={20}> {QList2} </MenuItem>
                        <MenuItem value={30}> {QList3} </MenuItem>
                        <MenuItem value={40}> {QList4} </MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx ={{mt: 1}}>
                <TextField
                    label="Observation"
                    fullWidth
                    id="outlined-multiline-static"
                    multiline
                    rows={2}
                    placeholder="Enter Observation"
                />
            </Box>

            <Box sx ={{mt: 1}}>
                <TextField
                    label="Standard Reference"
                    fullWidth
                    id="outlined-multiline-static"
                    multiline
                    rows={1}
                    placeholder="Enter Standard Reference"
                />
            </Box>

            <Box sx ={{mt: 1}}>
                <TextField
                    label="Standard"
                    fullWidth
                    id="outlined-multiline-static"
                    multiline
                    rows={2}
                    placeholder="Enter Standard"
                />
            </Box>

            <CAStyle>
                <p1>
                    Corrective Action Taken:
                </p1>
            </CAStyle>
        </>
    )
}

export default function AdminReview() {
    const [date, setDate] = React.useState();
    const handleChangeD = (newValue) => {
        setDate(newValue);
    };  
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <br/>
                <br/>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item1 />
                    </Grid>
                </Grid>
                <Grid container spacing= {0}>
                    <Grid item xs ={1.5}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                label="Date Completed"
                                value={date}
                                onChange={handleChangeD}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={10.5}>
                        <TextField
                            label="Verified By (Print Name and Title)"
                            id="outlined-multiline-static" 
                            multiline
                            rows={1}
                            placeholder="Enter Name and Title"
                            fullWidth
                            />     
                    </Grid>
                </Grid>
            </Box>
            <NewAR/>
        </>
    )
}

const CAStyle = styled.div`
    font-size: 1.10rem;
    font-weight: 500;
`;
