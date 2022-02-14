import React from "react";
import BasicDateRangePicker from "../datepicker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { StyledItem } from "./style";

const Home = () => {

  return (
    <StyledItem>
      <Card sx={{ minWidth: 275, backgroundColor: "#cf1111" }}>
        <CardContent>
          <Typography
            className="typography"
            color="text.secondary"
            gutterBottom
          >
            Over 100,000 hotels and homes across 135 countries
            <BasicDateRangePicker/>
          </Typography>
        </CardContent>
      </Card>
      <Container sx={{ marginTop: 5, marginBottom: 5 }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>
            
        </Box>
      </Container>
    </StyledItem>
  );
};

export default Home;
