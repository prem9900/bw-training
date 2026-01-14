import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const FormFields = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    favoriteSubject: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Name</h3>
      <TextField
        required
        id="standard-required-name"
        name="Name"
        label="Name"
        defaultValue=""
        variant="standard"
        onChange={handleInputChange}
      />
      <h3>Age</h3>
      <TextField
        required
        id="standard-required-age"
        name="Age"
        label="Age"
        defaultValue=""
        variant="standard"
        onChange={handleInputChange}
      />
      {/* You can handle Favorite Subjects here */}
    </div>
  );
};

export default FormFields;
