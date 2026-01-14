import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "./Images/Images.jsx/logo.png";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const pages = ["Home", "About US", "Register Now"];
const page = ["RV"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container>
      <Toolbar disableGutters>
        {/* Logo */}
        <Box>
          <img src={logo} alt="Logo" style={{ height: 45 }} />
        </Box>

        {/* Pages Buttons */}
        <Box
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-around" }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ color: "black" }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* User Settings Button */}
        <Box
           sx={{
            display: "flex",
            justifyContent: "end",
            backgroundColor: "#f64a8a",
            borderRadius: "50%", 
            width: 50, 
            height: 50,
            overflow: "hidden", 
          }}
        >
          {page.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{color: "white",
            }}
            
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}

export default NavBar;
