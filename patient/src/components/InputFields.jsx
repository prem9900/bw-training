import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TextField from "@mui/material/TextField";
import { Box, FormControl, InputLabel, Select, MenuItem, styled } from "@mui/material";

const InputFields = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f64a8a",
          color: "white",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          marginTop: "20px",
        }}
      >
        <h2>Register As Patient</h2>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "100px",
          marginTop: "50px",
          // justifyContent: "space-around",
        }}
      >
        <h3> Patient Name </h3>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          sx={{ marginTop: "10px", marginLeft: "110px", width: "50%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "100px",
          marginTop: "50px",
          // justifyContent: "space-around",
        }}
      >
        <h3> Email </h3>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ marginTop: "10px", marginLeft: "170px", width: "50%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "100px",
          marginTop: "50px",
          // justifyContent: "space-around",
        }}
      >y
        <h3> Mobile </h3>
        <TextField
          id="outlined-basic"
          label="Enter Contact Number"
          variant="outlined"
          sx={{ marginTop: "10px", marginLeft: "160px", width: "50%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "100px",
          marginTop: "50px",
          // justifyContent: "space-around",
        }}
      >
        <h3> Address </h3>
        <TextField
          id="outlined-multiline-static"
          label=" Address of home"
          multiline
          rows={4}
          sx={{ marginTop: "10px", marginLeft: "150px", width: "50%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "100px",
          marginTop: "50px",
          justifyContent: "start",
        }}
      >
        <h3> Age </h3>
        <TextField
          id="outlined-basic"
          label="Enter Age"
          variant="outlined"
          sx={{ marginTop: "10px", marginLeft: "180px", width: "20%" }}
        />

        <Box sx={{ marginLeft: "40px", marginRight: "40px" }}>
          <h3>Blood Group</h3>
        </Box>
        <FormControl
          variant="outlined"
          sx={{ marginTop: "10px", width: "16%" }}
        >
          <InputLabel id="blood-group-label">Select Blood</InputLabel>
          <Select
            labelId="blood-group-label"
            id="blood-group"
            label="Select Blood"
          >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginLeft: "80px",
          marginTop: "50px",
          justifyContent: "start",
        }}
      >
        <Box sx={{}}>
          <h3>District</h3>
        </Box>
        <FormControl
          variant="outlined"
          sx={{ marginTop: "10px", width: "16%", marginLeft: "180px" }}
        >
          <InputLabel id="blood-group-label"> District</InputLabel>
          <Select labelId="City" id="City" label="City">
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default InputFields;
