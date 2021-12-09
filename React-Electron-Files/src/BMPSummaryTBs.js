import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

export default function BMPSummaryTBs() {
    
        const [date, setDate] = React.useState();
    
        const handleChangeT = (newValue) => {
            setDate(newValue);
        };
    
        const [TF, setTF] = React.useState('');
        const handleChangeY = (event) => {
            setTF(event.target.value)
        }

        const [age, setAge] = React.useState('');
    
        const handleChange = (event) => {
            setAge(event.target.value);
        };

    return (
        <>
      <Box sx={{ flexGrow: 1 }}>
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
                    <Select
                value={age}
                label = "Corrected?"
                onChange={handleChange}
                >
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                    
                            </Select>
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
      </Box>
      </>
    );
  };
