import React, { useState } from "react";
import { Wrapper, Div } from "./style";
import { Typography, Button, Avatar } from "@material-ui/core";
import { TextField } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("email is ", email);
    console.log("password is ", password);
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <Div>
      <Avatar>H</Avatar>
      </Div>
      <Div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Div>
      <form>
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
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePassword}
            sx={{ m: 1, width: '40ch' }}
          />
        </Div>
        <br />
        <Div>
          <Button variant="contained" color="primary" fullWidth size="large" onClick={handleSubmit}>
            Login
          </Button>
        </Div>
      </form>
    </Wrapper>
  );
}
