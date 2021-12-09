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
        QList1 = "A1 - Is an updated SWPPP available at the construction site?"
        QList2 = "A2 - Was the SWPPP and any amendments prepared and signed by a certified QSD?"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("Training")) {
        QList1 = "B1 - Do the WPCM and any dedicated QSPs and QSDs have current certifications?"
        QList2 = "B2 - Is the contractor conducting the required stormwater training and maintaining adequate records of this training?"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("SMARTS")) {
        QList1 = "C1 - Has the most recently required Stormwater Annual Report been properly certified and uploaded into SMARTS?"
        QList2 = "None"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("Active Treatment Systems")) {
        QList1 = "D1 - For projects that use an ATS, does the ATS operation meet all the requirements of the CGP, Attachment F?"
        QList2 = "None"
        QList3 = "None"
        QList4 = "None"
    } else if (category.includes("Monitoring and Reporting")) {
        QList1 = "E1 - Are inspections, monitoring, and reporting procedures performed as required documented in the project files?"
        QList2 = "E2 - If a NAL/NEL is exceeded, has a construction site and run-on evaluation been prepared and documented in the project files?"
        QList3 = "E3 - Have NAL Exceedance Reports been submitted to the SWRCB within 10 days of the conclusion of storm events?"
        QList4 = "None"
    } else if (category.includes("Tahoe CGP-Specific Requirements")) {
        QList1 = "F1 - For projects subject to the Taho CGP, for Restoration projects, is there a detailed Restoration Monitoring Plan as part of the CSMRP?"
        QList2 = "F2 - For projects subject to the Taho CGP, If the project has activities within 100 year floodplains and stream environmental zones (SEZ) within the Lake Tahoe basin; are there waste discharge prohibition exemptions on file?"
        QList3 = "F3 - For projects subject to the Taho CGP, have all turbidity and pH analytical results collected from field instruments been reported in SMARTS within 5 days after the conclusion of a storm event?"
        QList4 = "None"
    }

    var autoStandRef = null;
    if (category.includes("Plans and Permits") && question === 10){
        autoStandRef = "SPECs, 13-1.03A General"
    } else if (category.includes("Plans and Permits") && question === 20){
        autoStandRef = "SPECs, 13-3.01A Summary"
    } else if (category.includes("Training") && question === 10){
        autoStandRef = "SPECs, 13-1.01D(3)(a) General"
    } else if (category.includes("Training") && question === 20){
        autoStandRef = "SPECs, 13-1.01D(2) Training"
    } else if (category.includes("SMARTS") && question === 10){
        autoStandRef = "SPECs, 13-3.01B(8) Storm Water Annual Report"
    } else if (category.includes("Active Treatment Systems") && question === 10){
        autoStandRef = "SPECs, 13-8.01A Summary"
    } else if (category.includes("Monitoring and Reporting") && question === 10){
        autoStandRef = "SPECs, 13-3.01B(4) Site Inspection Reports"
    } else if (category.includes("Monitoring and Reporting") && question === 20){
        autoStandRef = "SPECs, 13-3.01B(6)(b) Numeric Action Level Exceedance Report"
    }

    var autoStand = null;
    if (category.includes("Plans and Permits") && question === 10){
        autoStand = "Retain a printed copy of the authorized WPCP or SWPPP at the job site."
    } else if (category.includes("Plans and Permits") && question === 20){
        autoStand = "You may assign a QSD other than the WPC manager to develop the SWPPP"
    } else if (category.includes("Training") && question === 10){
        autoStand = "The WPC manager must be a QSP if the project requires a WPCP. The WPC manager must be a QSD if the project requires a SWPPP."
    } else if (category.includes("Training") && question === 20){
        autoStand = "2. Conduct weekly training meetings covering: 2.1 Deficiencies and corrective actions for water pollution control practices; 2.2 water pollution control practices required for work activities during the week; 2.3 Spill prevention and control; 2.4 Material delivery, storage, usage, and disposal; 2.5 Waste management; 2.6 Non-stormwater management procedures"
    } else if (category.includes("SMARTS") && question === 10){
        autoStand = "Submit the storm water annual report before July 15th if construction occurs from July 1st through June 30th or within 15 days after the Contract acceptance if construction ends before June 30th"
    } else if (category.includes("Active Treatment Systems") && question === 10){
        autoStand = "Design, installation, operation, and monitoring of an ATS and monitoring of the treated effluent must comply with Attachment F of NPDES General Permit for Stormwater Discharges Associated with Construction and Land Disturbance Activities (Order No. 2009-0009-DWQ, NPDES no. CAS000002)."
    } else if (category.includes("Monitoring and Reporting") && question === 10){
        autoStand = "The WPC manager must submit the following informational submittals within 24 hours of completing a weekly inspection: 1. Completed Stormwater Site Inspection Report form."
    } else if (category.includes("Monitoring and Reporting") && question === 20){
        autoStand = "Whenever a NAL is exceeded, notify the Engineer and submit a NAL exceedance report within 48 hours after the conclusion of a storm event."
    }

    return(
        <>
            <Box sx ={{flexGrow: 1, mt: 1}}>
                <Grid container spacing={1} columns={16}>
                    <Grid item xs={2}>
                    <FormControl fullWidth> 
                <TextField
                    label="Finding No."
                    
                    id="outlined-multiline-static"
                    multiline
                    rows={1}
                    defaultValue = {"A1"}
                    disabled
                    fullWidth
                />
                </FormControl>

                </Grid>

                <Grid item xs={9}>
                    
                <FormControl fullWidth> 
                    <InputLabel id="demo-simple-select-label" fontSize="1">Administrative Category</InputLabel>
                    <Select
                        label="Administrative Category"
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
                </Grid>


                <Grid item xs={5}>
                    
                <FormControl fullWidth> 
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
                
                </Grid>
                </Grid>
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
                    value = {autoStandRef}
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
                    value = {autoStand}
                />
            </Box>
            <br/>
            <CAStyle>
                <p1>
                    Corrective Action Taken:
                </p1>
            </CAStyle>
            <br/>
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

