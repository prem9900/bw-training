import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import axios from "axios";

const AddUserForm = ({ open, handleClose, fetchUsers }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:4001/users", formData);
      handleClose();
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          name="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserForm;
