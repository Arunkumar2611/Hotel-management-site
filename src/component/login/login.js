import React, { useState } from "react";

import { Typography, Button } from "@material-ui/core";
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
  }

  return (
    <div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
