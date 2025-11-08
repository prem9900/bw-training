import React, { useState, useEffect, } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Email,setEmail] = useState("");




   

  useEffect(() => {
    axios
      .get("http://localhost:5001/users")
      .then((res) => setData(res.data))
      .catch((er) => console.log(er));
  }, []);



  const Add = () => {
    axios.post("http://localhost:5001/users", {
      Name:name,
      Age:age,
      Email:Email
    })
   .then((res) =>setData(res.data))
   .catch((er) => console.log(er))
    console.log("name",name )
    console.log("age",name )
    console.log("Email",Email )
  };


  
  const handleNameChange = (event) => {
    console.log(event);
    setName(event.target.value);
  };

  const handleAgeChange = (event) =>{
    console.log(event);
    setAge(event.target.value);
  }

  const handleEmailChange = (event) =>{
  console.log(event);
    setEmail(event.target.value);

  }

  return (
    <>
      <div>
        <h1>UserData</h1>
      </div>

      <div>
        <form action="">
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="Enter Name"
          />
          <input type="text" 
          onChange={handleAgeChange}
          placeholder="Enter Age"
           />
          <input type="text"
          onChange={handleEmailChange}
          placeholder="Enter Email" />
          <button onClick={Add}>Add</button>
        </form>
      </div>
      <div>
        <TableContainer component={Paper}>
          <MuiTable>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>{row.Age}</TableCell>
                  <TableCell>{row.Email}</TableCell>
                  <TableCell>
                    <button> EditUser</button>
                  </TableCell>
                  <TableCell>
                    <button> DeleteUser</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </div>
    </>
  );
};

export default Table;
