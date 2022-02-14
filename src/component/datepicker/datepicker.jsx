import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { Div } from "./style";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <Div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText="Check-in"
          endText="Check-out"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField sx={{ backgroundColor: "white",  }} {...startProps} />
              <TextField sx={{ backgroundColor: "white",  }} {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </Div>
  );
}
