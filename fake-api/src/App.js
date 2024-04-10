import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4001/users");
      console.log("re", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const addUser = () => {
    setOpenAddForm(true);
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setOpenEditForm(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <Button variant="contained" color="primary" onClick={addUser}>
        Add User
      </Button>
      <UserTable users={users} editUser={editUser} fetchUsers={fetchUsers} />
      <AddUserForm
        open={openAddForm}
        handleClose={() => setOpenAddForm(false)}
        fetchUsers={fetchUsers}
      />
      {selectedUser && (
        <EditUserForm
          user={selectedUser}
          open={openEditForm}
          handleClose={() => {
            setOpenEditForm(false);
            setSelectedUser(null);
          }}
          fetchUsers={fetchUsers}
        />
      )}
    </div>
  );
}

export default App;
