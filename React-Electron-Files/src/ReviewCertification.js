import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import styled from 'styled-components';

const Item3 = () => {
  const [value, setValue] = React.useState(new Date());
    return (
    <>
      <TitleStyle>
        <p1>REVIEW REPORT CERTIFICATION</p1>
      </TitleStyle>
          <Typography variant="body1" gutterBottom>
            I certify under penalty of law that this Project Construction Stormwater
            Review Report was performed in accordance with the Construction General
            Permit. The information contained in this Review Report was gathered
            from a field site review. I am aware that Section 309 (c)(4) of the
            Clean Water Act provides for significant penalties, including fines and
            imprisonment for knowingly submitting false material statement,
            representation, or certification.
          </Typography>

  <Grid container spacing={1} columns={16}>
   <Grid item xs={12}>
    <FormControl fullWidth>
      <TextField
        id="outlined-multiline-static"
        label="IQA Reviewer Name"
        rows={1}
        placeholder="Enter IQA Reviewer Name"
      />
    </FormControl>
  </Grid>

     <Grid item xs={4}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField 
            {...props} />}
          label="Date Report Completed"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
      </Grid>
     </Grid>
    </>
  );
};

const Item4 = () => {
  return (
    <>
    <Grid item xs={16}>
     <Box sx={{mt:1}}>
       <FormControl fullWidth>
          <TextField
              id="outlined-multiline-static"
              label="IQA Reviewer Signature"
              rows={1}
              placeholder="Enter IQA Reviewer Signature"
              fullWidth
          />
          </FormControl>
        </Box>
      </Grid>
    </>
  );
};

const Item5 = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <>
    <Box sx={{mt:1}}>
      <TitleStyle>
        <p1>CORRECTIVE ACTION CERTIFICATION</p1>
      </TitleStyle>
          <Typography variant="body1" gutterBottom>
            I certify under penalty of law that all corrective actions have been implemented
            in accordance with the Construction General Permit for all findings in this Project
            Construction Stormwater Review Report. I am aware that Section 309 (c)(4) of the
            Clean Water Act provides for significant penalties, including fines and
            imprisonment for knowingly submitting false material statement,
            representation, or certification.
          </Typography>
      </Box>

 <Grid container spacing={1} columns={16}>
   <Grid item xs={12}>
    <FormControl fullWidth>
      <TextField
        id="outlined-multiline-static"
        label="Corrective Action Verifier Name"
        rows={1}
        placeholder="EnterCorrective Action Verifier Name"
      />
    </FormControl>
  </Grid>

   <Grid item xs={4}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField 
            {...props} />}
          label="Date All Corrective Actions Completed"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </Grid>
  </Grid>
</>
  );
};

const Item6 = () => {
  return (
     <Grid item xs={16}>
      <Box sx={{mt:1}}>
       <Box sx={{minWidth: 130}}>
         <FormControl fullWidth>
          <TextField
             id="outlined-multiline-static"
             label="Corrective Action Verifier Signature"
             rows={1}
             placeholder="Enter Corrective Action Verifier Signature"
             fullWidth
         />
         </FormControl>
        </Box>
       </Box>
     </Grid>
  );
};

export default function ReviewCertification() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columns={16}>
        <Grid item xs={16}>
         <Item3 />
        </Grid>
        <Item4/>
        <Grid item xs={16}>
          <Item5 />
        </Grid>
        <Item6 />
      </Grid>
    </Box>
  );
}

const TitleStyle = styled.div`
    background-color: #abc0d4;
    font-size: 1.10rem;
    font-weight: 500;
`;
