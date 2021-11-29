import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const Item3 = () => {
  const [value, setValue] = React.useState(new Date());
    return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Review Report Certification
          </Typography>
          <Typography variant="body1" gutterBottom>
            I certify under penalty of law that this Project Construction Stormwater
            Review Report was performed in accordance with the Construction General
            Permit. The information contained in this Review Report was gathered
            from a field site review. I am aware that Section 309 (c)(4) of the
            Clean Water Act provides for significant penalties, including fines and
            imprisonment for knowingly submitting false material statement,
            representation, or certification.
          </Typography>

      <TextField
        style={{ width: "35.5rem" }}
        id="outlined-multiline-static"
        label="IQA Reviewer Name"
        rows={1}
        placeholder="Enter IQA Reviewer Name"
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Date Report Completed"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </>
  );
};

const Item4 = () => {
  return (
    <>
      <FormControl fullWidth sx={{ m: 0.6 }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">
           IQA Reviewer Signature
        </InputLabel>
        <FilledInput id="filled-adornment-amount" />
      </FormControl>
    </>
  );
};

const Item5 = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Corrective Action Certification
      </Typography>
          <Typography variant="body1" gutterBottom>
            I certify under penalty of law that all corrective actions have been implemented
            in accordance with the Construction General Permit for all findings in this Project
            Construction Stormwater Review Report. I am aware that Section 309 (c)(4) of the
            Clean Water Act provides for significant penalties, including fines and
            imprisonment for knowingly submitting false material statement,
            representation, or certification.
          </Typography>

      <TextField
        style={{ width: "35.5rem" }}
        id="outlined-multiline-static"
        label="Corrective Action Verifier Name"
        rows={1}
        placeholder="Enter Corrective Action Verifier Name"
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Date All Corrective Actions Completed"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </>
  );
};

const Item6 = () => {
  return (
    <>
      <FormControl fullWidth sx={{ m: 0.6 }} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">
          Corrective Action Verifer Signature
        </InputLabel>
        <FilledInput id="filled-adornment-amount" />
      </FormControl>
    </>
  );
};

export default function Page5Karl() {
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
