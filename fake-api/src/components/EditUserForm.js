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

const EditUserForm = ({ user, open, handleClose, fetchUsers }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:4001/users/${formData.id}`, formData);
      handleClose();
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit User</DialogTitle>
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
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserForm;
