import React, { useState } from "react";
import { Wrapper, Div } from "./style";
import { Typography, Button, Avatar } from "@material-ui/core";
import { TextField } from "@mui/material";

export default function Register() {
  const [firstname, setFirst_Name] = useState("");
  const [lastname, setLast_Name] = useState("");
  const [mobileno, setMobile_No] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirm_Password] = useState("");

  const handleFirst_Name = (e) => {
    setFirst_Name(e.target.value);
  };
  
  const handleLast_Name = (e) => {
    setLast_Name(e.target.value);
  };
  
  const handleMobile_No = (e) => {
    setMobile_No(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirm_Password = (e) => {
    setConfirm_Password(e.target.value);
  };

  const handleSubmit = () => {
    console.log("firstname is ", firstname);
    console.log("lastname is ", lastname);
    console.log("mobileno is ", mobileno);
    console.log("email is ", email);
    console.log("password is ", password);
    console.log("Confirm password is ", confirmpassword);
    setFirst_Name("");
    setLast_Name("");
    setMobile_No("");
    setEmail("");
    setPassword("");
    setConfirm_Password("");
  };

  return (
    <Wrapper>
      <Div>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
      </Div>
      <form>
        <Div>
          <TextField
            id="firstname"
            label="First Name"
            type="firstname"
            variant="outlined"
            value={firstname}
            onChange={handleFirst_Name}
            sx={{ m: 1, width: '40ch' }}
          />
        </Div>
        <Div>
          <TextField
            id="lastname"
            label="Last Name"
            type="lastname"
            variant="outlined"
            value={lastname}
            onChange={handleLast_Name}
            sx={{ m: 1, width: '40ch' }}
          />
        </Div>
        <Div>
          <TextField
            id="mobileno"
            label="Mobile Number"
            type="number"
            variant="outlined"
            value={mobileno}
            onChange={handleMobile_No}
            sx={{ m: 1, width: '40ch' }}
          />
        </Div>
        <Div>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={handleEmail}
            sx={{ m: 1, width: '40ch' }}
          />
        </Div>
        <Div>
          <TextField
            id="password"
            label="Password"
            type="text"
            variant="outlined"
            value={password}
            onChange={handlePassword}
            sx={{ m: 1, width: '40ch' }}
          />
        </Div>
        <Div>
          <TextField
            id="confirmpassword"
            label="Confirm Password"
            type="text"
            variant="outlined"
            value={confirmpassword}
            onChange={handleConfirm_Password}
            sx={{ m: 1, width: '40ch' }}
          />
        </Div>
        <br />
        <Div>
          <Button variant="contained" color="primary" fullWidth size="large" onClick={handleSubmit}>
            Submit
          </Button>
        </Div>
      </form>
    </Wrapper>
  );
}
