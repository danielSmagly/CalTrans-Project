import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';


export default function BMPReview() {

    const [category, setCategory] = React.useState('');
    const handleChangeCat = (event) => {
        setCategory(event.target.value)
    }

    const [type, setType] = React.useState('');
    const handleChangeType = (event) => {
        setType(event.target.value);
    }

    const [cQ, setcQ] = React.useState('');
    const handleChangecQ = (event) => {
        setcQ(event.target.value);
    }


    var TypeQuestion1, TypeQuestion2, TypeQuestion3, TypeQuestion4, TypeQuestion5, TypeQuestion6,
        TypeQuestion7, TypeQuestion8, TypeQuestion9, TypeQuestion10, TypeQuestion11, TypeQuestion12
        , TypeQuestion13, TypeQuestion14, TypeQuestion15 = null;
    if (category.includes("Soil Stabilization")) {
        TypeQuestion1 = "SS-1 :"
        TypeQuestion2 = "SS-2 :"
        TypeQuestion3 = "SS-3 :"
        TypeQuestion4 = "SS-4 :"
        TypeQuestion5 = "SS-5 :"
        TypeQuestion6 = "SS-6 :"
        TypeQuestion7 = "SS-7 :"
        TypeQuestion8 = "SS-8 :"
        TypeQuestion9 = "SS-9 :"
        TypeQuestion10 = "SS-10 :"
        TypeQuestion11 = "SS-11 :"
        TypeQuestion12 = "SS-12 :"
    } else if (category.includes("Sediment Control")) {
        TypeQuestion1 = "SC-1 :"
        TypeQuestion2 = "SC-2 :"
        TypeQuestion3 = "SC-3 :"
        TypeQuestion4 = "SC-4 :"
        TypeQuestion5 = "SC-5 :"
        TypeQuestion6 = "SC-6 :"
        TypeQuestion7 = "SC-7 :"
        TypeQuestion8 = "SC-8 :"
        TypeQuestion9 = "SC-9 :"
        TypeQuestion10 = "SC-10 :"
    } else if (category.includes("Tracking Control")) {
        TypeQuestion1 = "TC-1"
        TypeQuestion2 = "TC-2"
        TypeQuestion3 = "TC-3"
    } else if (category.includes("Wind Erosion Control")) {
        TypeQuestion1 = "WE-1 :"
    } else if (category.includes("Non-Storm Water")) {
        TypeQuestion1 = "NS-1 :"
        TypeQuestion2 = "NS-2 :"
        TypeQuestion3 = "NS-3 :"
        TypeQuestion4 = "NS-4 :"
        TypeQuestion5 = "NS-5 :"
        TypeQuestion6 = "NS-6 :"
        TypeQuestion7 = "NS-7 :"
        TypeQuestion8 = "NS-8 :"
        TypeQuestion9 = "NS-9 :"
        TypeQuestion10 = "NS-10 :"
        TypeQuestion11 = "NS-11 :"
        TypeQuestion12 = "NS-12 :"
        TypeQuestion13 = "NS-13 :"
        TypeQuestion14 = "NS-14 :"
        TypeQuestion15 = "NS-15 :"
    } else if (category.includes("Waste Management")) {
        TypeQuestion1 = "WM-1 :"
        TypeQuestion2 = "WM-2 :"
        TypeQuestion3 = "WM-3 :"
        TypeQuestion4 = "WM-4 :"
        TypeQuestion5 = "WM-5 :"
        TypeQuestion6 = "WM-6 :"
        TypeQuestion7 = "WM-7 :"
        TypeQuestion8 = "WM-8 :"
        TypeQuestion9 = "WM-9 :"
        TypeQuestion10 = "WM-10 :"
    }


    var ChecklistQ1, ChecklistQ2, ChecklistQ3, ChecklistQ4, ChecklistQ5, ChecklistQ6 = null;


    // ------ SOIL STABILIZATION ------ //
    if (type === "SS-1 :") {
        ChecklistQ1 = "SS-1.1"
    } else if (type === "SS-2 :") {
        ChecklistQ1 = "SS-2.1 : "
        ChecklistQ2 = "SS-2.2 : "
    } else if (type === "SS-3 :") {
        ChecklistQ1 = "SS-3.1 : "
        ChecklistQ2 = "SS-3.2 : "
        ChecklistQ3 = "SS-3.3 : "
        ChecklistQ4 = "SS-3.4 : "
    } else if (type === "SS-4 :") {
        ChecklistQ1 = "SS-4.1 : "
        ChecklistQ2 = "SS-4.2 : "
        ChecklistQ3 = "SS-4.3 : "
        ChecklistQ4 = "SS-4.4 : "
    } else if (type === "SS-5 :") {
        ChecklistQ1 = "SS-5.1 : "
        ChecklistQ2 = "SS-5.2 : "
        ChecklistQ3 = "SS-5.3 : "
        ChecklistQ4 = "SS-5.4 : "
    } else if (type === "SS-6 :") {
        ChecklistQ1 = "SS-6.1 : "
        ChecklistQ2 = "SS-6.2 : "
        ChecklistQ3 = "SS-6.3 : "
        ChecklistQ4 = "SS-6.4 : "
    } else if (type === "SS-7 :") {
        ChecklistQ1 = "SS-7.1 : "
        ChecklistQ2 = "SS-7.2 : "
        ChecklistQ3 = "SS-7.3 : "
        ChecklistQ4 = "SS-7.4 : "
    } else if (type === "SS-8 :") {
        ChecklistQ1 = "SS-8.1 : "
        ChecklistQ2 = "SS-8.2 : "
        ChecklistQ3 = "SS-8.3 : "
        ChecklistQ4 = "SS-8.4 : "
    } else if (type === "SS-9 :") {
        ChecklistQ1 = "SS-9.1 : "
        ChecklistQ2 = "SS-9.2 : "
        ChecklistQ3 = "SS-9.3 : "
        ChecklistQ4 = "SS-9.4 : "
    } else if (type === "SS-10 :") {
        ChecklistQ1 = "SS-10.1 : "
        ChecklistQ2 = "SS-10.2 : "
        ChecklistQ3 = "SS-10.3 : "
        ChecklistQ4 = "SS-10.4 : "
    } else if (type === "SS-11 :") {
        ChecklistQ1 = "SS-11.1 : "
        ChecklistQ2 = "SS-11.2 : "
        ChecklistQ3 = "SS-11.3 : "
        ChecklistQ4 = "SS-11.4 : "
    } else if (type === "SS-12 :") {
        ChecklistQ1 = "SS-12.1 : "
        ChecklistQ2 = "SS-12.2 : "
        ChecklistQ3 = "SS-12.3 : "
        ChecklistQ4 = "SS-12.4 : "
    }


    // ------ SOIL STABILIZATION ------ //
    else if (type === "SC-1 :") {
        ChecklistQ1 = "SC-1.1 : "
        ChecklistQ2 = "SC-1.2 : "
        ChecklistQ3 = "SC-1.3 : "
        ChecklistQ4 = "SC-1.4 : "
        ChecklistQ5 = "SC-1.5 : "
        ChecklistQ6 = "SC-1.6 : "
    } else if (type === "SC-2 :") {
        ChecklistQ1 = "SC-2.1 : "
        ChecklistQ2 = "SC-2.2 : "
    } else if (type === "SC-3 :") {
        ChecklistQ1 = "SC-3.1 : "
        ChecklistQ2 = "SC-3.2 : "
    } else if (type === "SC-4 :") {
        ChecklistQ1 = "SC-4.1 : "
        ChecklistQ2 = "SC-4.2 : "
        ChecklistQ3 = "SC-4.3 : "
        ChecklistQ4 = "SC-4.4 : "
        ChecklistQ5 = "SC-4.5 : "
    } else if (type === "SC-5 :") {
        ChecklistQ1 = "SC-5.1 : "
        ChecklistQ2 = "SC-5.2 : "
        ChecklistQ3 = "SC-5.3 : "
        ChecklistQ4 = "SC-5.4 : "
        ChecklistQ5 = "SC-5.5 : "
    } else if (type === "SC-6 :") {
        ChecklistQ1 = "SC-6.1 : "
        ChecklistQ2 = "SC-6.2 : "
        ChecklistQ3 = "SC-6.3 : "
    } else if (type === "SC-7 :") {
        ChecklistQ1 = "SC-7.1 : "
        ChecklistQ2 = "SC-7.2 : "
        ChecklistQ3 = "SC-7.3 : "
    } else if (type === "SC-8 :") {
        ChecklistQ1 = "SC-8.1 : "
        ChecklistQ2 = "SC-8.2 : "
    } else if (type === "SC-9 :") {
        ChecklistQ1 = "SC-9.1 : "
        ChecklistQ2 = "SC-9.2 : "
    } else if (type === "SC-10 :") {
        ChecklistQ1 = "SC-10.1 : "
        ChecklistQ2 = "SC-10.2 : "
        ChecklistQ3 = "SC-10.3 : "
        ChecklistQ4 = "SC-10.4 : "
    }


    // ------ TRACKING CONTROL ------ //
    else if (type === "TC-1 :") {
        ChecklistQ1 = "TC-1.1 : "
        ChecklistQ2 = "TC-1.2 : "
        ChecklistQ3 = "TC-1.3 : "
        ChecklistQ4 = "TC-1.4 : "
    } else if (type === "TC-2 :") {
        ChecklistQ1 = "TC-2.1 : "
        ChecklistQ2 = "TC-2.2 : "
        ChecklistQ3 = "TC-2.3 : "
        ChecklistQ4 = "TC-2.4 : "
    } else if (type === "TC-3 :") {
        ChecklistQ1 = "TC-3.1 : "
        ChecklistQ2 = "TC-3.2 : "
        ChecklistQ3 = "TC-3.3 : "
        ChecklistQ4 = "TC-3.4 : "
    }

    // ------ WIND Erosion CONTROL ------ //
    else if (type === "WE-1 :") {
        ChecklistQ1 = "WE-1.1 : "
        ChecklistQ2 = "WE-1.2 : "
        ChecklistQ3 = "WE-1.3 : "
        ChecklistQ4 = "WE-1.4 : "
    }

    // ------ NON STORM WATER ------ //
    else if (type === "NS-1 :") {
        ChecklistQ1 = "NS-1.1 : "
        ChecklistQ2 = "NS-1.2 : "
        ChecklistQ3 = "NS-1.3 : "
    } else if (type === "NS-2 :") {
        ChecklistQ1 = "NS-2.1 : "
        ChecklistQ2 = "NS-2.2 : "
        ChecklistQ3 = "NS-2.3 : "
    } else if (type === "NS-3 :") {
        ChecklistQ1 = "NS-3.1 : "
        ChecklistQ2 = "NS-3.2 : "
        ChecklistQ3 = "NS-3.3 : "
        ChecklistQ4 = "NS-3.4 : "
    } else if (type === "NS-4 :") {
        ChecklistQ1 = "NS-4.1 : "
        ChecklistQ2 = "NS-4.2 : "
        ChecklistQ3 = "NS-4.3 : "
    } else if (type === "NS-5 :") {
        ChecklistQ1 = "NS-5.1 : "
        ChecklistQ2 = "NS-5.2 : "
        ChecklistQ3 = "NS-5.3 : "
    } else if (type === "NS-6 :") {
        ChecklistQ1 = "NS-6.1 : "
    } else if (type === "NS-7 :") {
        ChecklistQ1 = "NS-7.1 : "
        ChecklistQ2 = "NS-7.2 : "
        ChecklistQ3 = "NS-7.3 : "
    } else if (type === "NS-8 :") {
        ChecklistQ1 = "NS-8.1 : "
        ChecklistQ2 = "NS-8.2 : "
        ChecklistQ3 = "NS-8.3 : "
        ChecklistQ4 = "NS-8.4 : "
        ChecklistQ5 = "NS-8.5 : "
    } else if (type === "NS-9 :") {
        ChecklistQ1 = "NS-9.1 : "
        ChecklistQ2 = "NS-9.2 : "
        ChecklistQ3 = "NS-9.3 : "
        ChecklistQ4 = "NS-9.4 : "
        ChecklistQ5 = "NS-9.5 : "
    } else if (type === "NS-10 :") {
        ChecklistQ1 = "NS-10.1 : "
        ChecklistQ2 = "NS-10.2 : "
        ChecklistQ3 = "NS-10.3 : "
        ChecklistQ4 = "NS-10.4 : "
        ChecklistQ5 = "NS-10.5 : "
    } else if (type === "NS-11 :") {
        ChecklistQ1 = "NS-11.1 : "
        ChecklistQ2 = "NS-11.2 : "
        ChecklistQ3 = "NS-11.3 : "
        ChecklistQ4 = "NS-11.4 : "
    } else if (type === "NS-12 :") {
        ChecklistQ1 = "NS-12.1 : "
        ChecklistQ2 = "NS-12.2 : "
        ChecklistQ3 = "NS-12.3 : "
        ChecklistQ4 = "NS-12.4 : "
    } else if (type === "NS-13 :") {
        ChecklistQ1 = "NS-13.1 : "
        ChecklistQ2 = "NS-13.2 : "
        ChecklistQ3 = "NS-13.3 : "
        ChecklistQ4 = "NS-13.4 : "
    } else if (type === "NS-14 :") {
        ChecklistQ1 = "NS-14.1 : "
        ChecklistQ2 = "NS-14.2 : "
        ChecklistQ3 = "NS-14.3 : "
    } else if (type === "NS-15 :") {
        ChecklistQ1 = "NS-15.1 : "
        ChecklistQ2 = "NS-15.2 : "
        ChecklistQ3 = "NS-15.3 : "
        ChecklistQ4 = "NS-15.4 : "
        ChecklistQ5 = "NS-15.5 : "
    }




    // ------ WASTE MANAGMENT ------ //
    else if (type === "WM-1 :") {
        ChecklistQ1 = "WM-1.1 : "
        ChecklistQ2 = "WM-1.2 : "
        ChecklistQ3 = "WM-1.3 : "
    } else if (type === "WM-2 :") {
        ChecklistQ1 = "WM-2.1 : "
    } else if (type === "WM-3 :") {
        ChecklistQ1 = "WM-3.1 : "
        ChecklistQ2 = "WM-3.2 : "
        ChecklistQ3 = "WM-3.3 : "
        ChecklistQ4 = "WM-3.4 : "
        ChecklistQ5 = "WM-3.5 : "
    } else if (type === "WM-4 :") {
        ChecklistQ1 = "WM-4.1 : "
        ChecklistQ2 = "WM-4.2 : "
    } else if (type === "WM-5 :") {
        ChecklistQ1 = "WM-5.1 : "
        ChecklistQ2 = "WM-5.2 : "
    } else if (type === "WM-6 :") {
        ChecklistQ1 = "WM-6.1 : "
        ChecklistQ2 = "WM-6.2 : "
    } else if (type === "WM-7 :") {
        ChecklistQ1 = "WM-7.1 : "
    } else if (type === "WM-8 :") {
        ChecklistQ1 = "WM-8.1 : "
        ChecklistQ2 = "WM-8.2 : "
        ChecklistQ3 = "WM-8.3 : "
    } else if (type === "WM-9 :") {
        ChecklistQ1 = "WM-9.1 : "
        ChecklistQ2 = "WM-9.2 : "
        ChecklistQ3 = "WM-9.3 : "
    } else if (type === "WM-10 :") {
        ChecklistQ1 = "WM-10.1 : "
        ChecklistQ2 = "WM-10.2 : "
        ChecklistQ3 = "WM-10.3 : "
        ChecklistQ4 = "WM-10.4 : "
    }


    return (
        <>
            <TitleStyle>
                <p1>CONSTRUCTION SITE BMP REVIEW</p1>
            </TitleStyle>
            <br />
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Box sx={{ minWidth: 130 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">FIND NO.</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="FINDING NO."
                            >
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>



                <Grid item xs={3}>
                    <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">BMP CATEGORY</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="BMP CATEGORY"
                                onChange={handleChangeCat}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'Soil Stabilization'}>Soil Stabilization</MenuItem>
                                <MenuItem value={'Sediment Control'}>Sediment Control</MenuItem>
                                <MenuItem value={'Tracking Control'}>Tracking Control</MenuItem>
                                <MenuItem value={'Wind Erosion Control'}>Wind Erosion Control</MenuItem>
                                <MenuItem value={'Non-Storm Water'}>Non-Storm Water</MenuItem>
                                <MenuItem value={'Waste Management'}>Waste Management</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>



                <Grid item xs={2}>
                    <Box sx={{ minWidth: 130 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">BMP TYPE</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="BMP TYPE"
                                onChange={handleChangeType}
                            >
                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-1 :"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-2 :"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-3 :"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-4 :"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-5 :"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-6 :"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-7 :"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-8 :"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-9 :"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-10 :"} >{TypeQuestion10}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-11 :"} >{TypeQuestion11}</MenuItem>

                                ) : null}

                                {category === 'Soil Stabilization' ? (

                                    <MenuItem value={"SS-12 :"} >{TypeQuestion12}</MenuItem>

                                ) : null}



                                {/* ----------- Sediment Control ------------------*/}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-1 :"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-2 :"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-3 :"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-4 :"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-5 :"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-6 :"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-7 :"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-8 :"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-9 :"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Sediment Control' ? (

                                    <MenuItem value={"SC-10 :"} >{TypeQuestion10}</MenuItem>

                                ) : null}



                                {/* ----------- TRACKING Control ------------------*/}

                                {category === 'Tracking Control' ? (

                                    <MenuItem value={"TC-1 :"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Tracking Control' ? (

                                    <MenuItem value={"TC-2 :"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Tracking Control' ? (

                                    <MenuItem value={"TC-3 :"} >{TypeQuestion3}</MenuItem>

                                ) : null}






                                {/* ----------- WIND Erosion Control ------------------*/}

                                {category === 'Wind Erosion Control' ? (

                                    <MenuItem value={"WE-1 :"} >{TypeQuestion1}</MenuItem>

                                ) : null}






                                {/* ----------- NON STORM WATER ------------------*/}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-1 :"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-2 :"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-3 :"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-4 :"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-5 :"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-6 :"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-7 :"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-8 :"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-9 :"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-10 :"} >{TypeQuestion10}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-11 :"} >{TypeQuestion11}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-12 :"} >{TypeQuestion12}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-13 :"} >{TypeQuestion13}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-14 :"} >{TypeQuestion14}</MenuItem>

                                ) : null}

                                {category === 'Non-Storm Water' ? (

                                    <MenuItem value={"NS-15 :"} >{TypeQuestion15}</MenuItem>

                                ) : null}


                                {/* ----------- Waste Management ------------------*/}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-1 :"} >{TypeQuestion1}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-2 :"} >{TypeQuestion2}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-3 :"} >{TypeQuestion3}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-4 :"} >{TypeQuestion4}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-5 :"} >{TypeQuestion5}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-6 :"} >{TypeQuestion6}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-7 :"} >{TypeQuestion7}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-8 :"} >{TypeQuestion8}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-9 :"} >{TypeQuestion9}</MenuItem>

                                ) : null}

                                {category === 'Waste Management' ? (

                                    <MenuItem value={"WM-10 :"} >{TypeQuestion10}</MenuItem>

                                ) : null}

                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box sx={{ minWidth: 130 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">CHECKLIST Q. NUM</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cQ}
                                label="CHECKLIST Q. NUM"
                                onChange={handleChangecQ}
                            >
                                <MenuItem value={'1'}>{ChecklistQ1}</MenuItem>
                                <MenuItem value={'2'}>{ChecklistQ2}</MenuItem>
                                <MenuItem value={'3'}>{ChecklistQ3}</MenuItem>
                                <MenuItem value={'4'}>{ChecklistQ4}</MenuItem>
                                <MenuItem value={'5'}>{ChecklistQ5}</MenuItem>
                                <MenuItem value={'6'}>{ChecklistQ6}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>


                <Grid item xs={3}>
                    <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">LOCATION</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="LOCATION"

                            >

                            </Select>
                        </FormControl>
                    </Box>
                </Grid>

            </Grid>
            <Box sx={{ mt: 1 }}>
                <TextField
                    id="outlined-multiline-static"
                    label="STANDARD REFERANCE"
                    multiline
                    rows={1}
                    placeholder="Enter Standard Referance"
                    fullWidth
                />
            </Box>
            <Box sx={{ mt: 1 }}>
                <TextField
                    id="outlined-multiline-static"
                    label="STANDARD"
                    multiline
                    rows={3}
                    placeholder="Enter Standard"
                    fullWidth
                />
            </Box>
            <br />
        </>
    )
}

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
`;
