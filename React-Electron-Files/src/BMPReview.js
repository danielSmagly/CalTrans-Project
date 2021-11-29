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

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

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
                                value={age}
                                label="FINDING NO."
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>B1</MenuItem>
                                <MenuItem value={20}>B2</MenuItem>
                                <MenuItem value={30}>B3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">BMP CATEGORY</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="BMP CATEGORY"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>CAT 1</MenuItem>
                                <MenuItem value={20}>CAT 2</MenuItem>
                                <MenuItem value={30}>CAT 3</MenuItem>
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
                                value={age}
                                label="BMP TYPE"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>BMP T1</MenuItem>
                                <MenuItem value={20}>BMP T2</MenuItem>
                                <MenuItem value={30}>BMP T3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ minWidth: 300 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" fontSize="1">LOCATION</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="LOCATION"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>LOCATION 1</MenuItem>
                                <MenuItem value={20}>LOCATION 2</MenuItem>
                                <MenuItem value={30}>LOCATION 3</MenuItem>
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