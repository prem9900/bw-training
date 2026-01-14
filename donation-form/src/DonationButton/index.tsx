import { Box, Button, Typography } from "@mui/material";
import React from "react";

const DonationButton = ( props: {amount: number} ) => {
    return (
      <Box margin="3px">
        <Button
          style={{
            backgroundColor: "#d20003",
            color: "white",
            border: "2px solid #d20003",
            width: "100px",
            height: "50px",
            fontSize: "18px",
          }}
        >
          <Typography variant="h6" children={props.amount}></Typography>
        </Button>
      </Box>
    );
  };
  export default DonationButton;