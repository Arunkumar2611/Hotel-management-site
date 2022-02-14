import React from "react";
import BasicDateRangePicker from "../datepicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { StyledItem } from "./style";

const Home = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <StyledItem>
      <div style={{ minWidth: 275, backgroundColor: "#cf1111" }}>
        <CardContent>
          <Typography
            className="typography"
            color="text.secondary"
            gutterBottom
          >
            Over 100,000 hotels and homes across 135 countries
          </Typography>
          <div className="datePicker">
            <BasicDateRangePicker />
            <Button variant="contained" size="large" >
              Success
            </Button>
          </div>
        </CardContent>
      </div>
      <Container sx={{ marginTop: 5, marginBottom: 5 }}>
        <Box
          className="containerss"
          sx={{ bgcolor: "#cfe8fc", height: "80vh" }}
        >
          <div className="imaging"></div>
        </Box>
      </Container>
    </StyledItem>
  );
};

export default Home;
