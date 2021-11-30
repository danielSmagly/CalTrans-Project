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

const Item1 = () => {
    const [category, setCategory] = React.useState('');
    const handleChangeC = (event) => {
        setCategory(event.target.value);
    }
    
    const [question, setQuestion] = React.useState('');
    const handleChangeQ = (event) => {
        setQuestion(event.target.value);
    }
    
    return(
        <>
            <TitleStyle>
                    <p1>STORMWATER CONTRACT ADMINISTRATION REVIEW</p1>
            </TitleStyle>

            <Box sx ={{mt: 1}}>
                <TextField
                    label="Finding No."
                    style ={{width: '12.5%'}}
                    id="outlined-multiline-static"
                    multiline
                    rows={1}
                    defaultValue = "A1"
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
                        <MenuItem value={10}>Test1</MenuItem>
                        <MenuItem value={20}>Test2</MenuItem>
                        <MenuItem value={30}>Test3</MenuItem>
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
                        <MenuItem value={10}>QTest1</MenuItem>
                        <MenuItem value={20}>QTest2</MenuItem>
                        <MenuItem value={30}>QTest3</MenuItem>
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
        </>
    )
}

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
`;

const CAStyle = styled.div`
    font-size: 1.10rem;
    font-weight: 500;
`;
