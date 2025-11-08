import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import DonationButton from "../DonationButton";


const DonationsForm = () => {
  return (
    <Box style={{ display: "flex", justifyContent: "end" }}>
      <Box
        style={{
          backgroundColor: "#fae5e5",
          padding: "20px",
        }}
      >
        <Typography
          variant="h4"
          style={{
            fontSize: "40px",
            margin: "0",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          Pick an amount
        </Typography>
        <Box display="flex" alignItems="center" marginTop="20px">
          <DonationButton amount={100} />
          <DonationButton amount={5000} />
          <DonationButton amount={10000} />
        </Box>
        <Typography
          variant="h6"
          style={{
            fontSize: "19px",
            fontWeight: "420",
            color: "#212121",
            marginTop: "5px",
          }}
        >
          You are helping us save 20 lives <span style={{ color: "#d20003" }}>❤</span>
        </Typography>

        <Box sx={{ marginTop: "30px" }}>
          {/* Additional Input Fields */}
          <Box sx={{ marginBottom: "30px" }}>
            <Typography variant="h6">Amount*</Typography>
            <TextField
              required
              id="standard-required-Amount"
              defaultValue="100"
              variant="standard"
              sx={{ marginTop: "10px" }} // Adjust the margin top to increase spacing
            />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Typography variant="h6">Name*</Typography>
            <TextField
              required
              id="standard-required-name"
              defaultValue="Your Name"
              variant="standard"
            />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Typography variant="h6">Your Email*</Typography>
            <TextField
              required
              id="standard-required-email"
              defaultValue="Example@domain.com"
              variant="standard"
            />
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <Typography variant="h6">Pan Card Number</Typography>
            <TextField
              required
              id="standard-required-card"
              defaultValue="AXB14SD5X"
              variant="standard"
            />
          </Box>
        </Box>

        <Box style={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ marginRight: "30px", marginBottom: "30px" }}>
            <Typography variant="h6">Contact Number</Typography>
            <TextField
              required
              id="standard-required-contact"
              label="Contact Number"
              defaultValue=""
              variant="standard"
            />
          </Box>

          <Box sx={{ marginRight: "30px", marginBottom: "30px" }}>
            <Typography variant="h6">Date of Birth</Typography>
            <TextField
              required
              id="standard-required-dob"
              label="Date of Birth"
              defaultValue=""
              variant="standard"
            />
          </Box>
        </Box>

        <Box sx={{ marginBottom: "30px", color: "#616161" }}>
          <Typography variant="h6">
            *If you are donating to celebrate a special occasion, request you to send
            <br />
            us details at marketing@bloodconnect.org
          </Typography>
        </Box>

        <Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#d20003",
              color: "white",
              fontWeight: 300,
              borderRadius: "2px",
              padding: "15px 30px", // Adjust the padding to increase the button size
              fontSize: "1.2rem", // Increase the font size for larger text
            }}
          >
            Donate Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};



export default DonationsForm;
