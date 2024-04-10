import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import axios from "axios";

const UserTable = ({ users, editUser, fetchUsers }) => {
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Check if users is an array
  if (!Array.isArray(users)) {
    console.error('Users is not an array:', users);
    return null; // or handle the error in another way
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button color="primary" onClick={() => editUser(user)}>
                  Edit
                </Button>
                <Button color="secondary" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
