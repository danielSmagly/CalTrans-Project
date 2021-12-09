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

export default function AdminSummaryTBs() {
    
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

        var YN = "No"
        if (date != null) {
            YN = "Yes"
        }

    return (
        <>
      <Box sx={{ flexGrow: 1 }}>
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
                    <TextField
                         label = "Finding Description Summary"
                         multiline
                         fullWidth
                          >
                             </TextField>
                        </FormControl>
                    </Box>
                </Grid>


                <Grid item xs={1.3}>
                    <Box sx={{ minWidth: 100 }}>
                    <FormControl fullWidth>
                    <TextField
                value={YN}
                label = "Corrected?"
                onChange={handleChange}
                >
                            </TextField>
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
      </Box>
      </>
    );
  };
