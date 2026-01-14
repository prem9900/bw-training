import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Form = () => {
  const [favoriteSubjects, setFavoriteSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    favoriteSubjects: [], // Modify to store favoriteSubjects in the form data
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update formData to include favoriteSubjects array
    const updatedFormData = { ...formData, favoriteSubjects };
    axios
      .post("http://localhost:4000/posts", updatedFormData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        // Handle response data or set state as needed
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Handle error or set error state as needed
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddChange = (event) => {
    setNewSubject(event.target.value);
  };

  const handleAddClick = () => {
    if (newSubject) {
      setFavoriteSubjects([...favoriteSubjects, newSubject]);
      setNewSubject("");
    }
  };

  const handleCancelClick = () => {
    if (favoriteSubjects.length > 0) {
      const updatedSubjects = [...favoriteSubjects];
      updatedSubjects.pop();
      setFavoriteSubjects(updatedSubjects);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="FormData">
        <div>
          <h1>UserData</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Box
            component="div"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
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
            </div>
            <div>
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
            </div>
            <div>
              <h3>Favorite Subjects</h3>
              {favoriteSubjects.map((subject, index) => (
                <div key={index}>
                  <TextField
                    required
                    id={`standard-required-subject-${index}`}
                    name={`subject-${index}`}
                    label="Subject"
                    value={subject}
                    variant="standard"
                    disabled
                  />
                </div>
              ))}
              <TextField
                required
                id="standard-required-subject"
                name="favoriteSubjects"
                label="Subject"
                value={newSubject}
                variant="standard"
                onChange={handleAddChange}
              />
              <Button variant="contained" onClick={handleAddClick}>
                +
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleCancelClick}
              >
                -
              </Button>
            </div>
            <div>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </div>
          </Box>
        </form>
      </div>
    </Box>
  );
};

export default Form;
