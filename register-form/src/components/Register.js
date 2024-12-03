import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const label = "Checkbox demo";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    let updatedData = { ...userData };
    updatedData[name] = value;
    setUserData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmpassword) {
      alert("Registered Successfully !");
    } else {
      alert("password must match !");
    }
  };

  const handleCheckboxChange = (e) => {
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h1" color="primary" gutterBottom>
          Register
        </Typography>
        <TextField
          required
          id="outlined-required-Name"
          name="name"
          label="Name"
          defaultValue=""
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required-Email"
          name="email"
          label="Email"
          defaultValue=""
          type="email"
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required-Password"
          name="password"
          label="Password"
          defaultValue=""
          type="password"
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required-ConfirmPassword"
          name="confirmpassword"
          label="Confirm Password"
          defaultValue=""
          type="password"
          fullWidth
          sx={{ margin: 1 }}
          onChange={handleChange}
        />

        <Checkbox
          inputProps={{ "aria-label": label }}
          defaultChecked
          onChange={handleCheckboxChange}
        />
        <Typography variant="caption" color="black" gutterBottom>
          Accept Terms And Conditions
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Register;
