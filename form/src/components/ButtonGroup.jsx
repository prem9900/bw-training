import React from "react";
import Button from "@mui/material/Button";

const ButtonGroup = () => {
  // You can define button handlers here or pass them as props
  const handleAddClick = () => {
    // Handle Add Click
  };

  const handleCancelClick = () => {
    // Handle Cancel Click
  };

  return (
    <div>
      <Button variant="contained" onClick={handleAddClick}>
        +
      </Button>
      <Button variant="contained" color="error" onClick={handleCancelClick}>
        -
      </Button>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </div>
  );
};

export default ButtonGroup;
