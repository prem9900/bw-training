import React from "react"; // Importing React library
import Typography from "../../Atoms/Typography"; // Importing Typography component from a relative path
import { Grid, styled } from "@mui/material"; // Importing Grid and styled components from MUI library

interface NavItemProps {
  // Defining interface NavItemProps to specify the props structure
  icon: React.ReactElement; // Props for icon element
  text: string; // Props for text string
}

const NavCell = styled(Grid)({
  // Styling Grid component using styled from MUI
  width: "200px", // Setting width to 200px
  padding: "12px", // Setting padding to 12px
  borderRadius: "8PX", // Setting border radius to 8px
  "&:hover": {
    // Styling on hover
    backgroundColor: "#aaa4", // Changing background color to #aaa4
  },
});

const NavItem = ({ icon, text }: NavItemProps) => {
  // Functional component NavItem destructuring props
  return (
    <NavCell container columnGap={2}>
      {" "}
      {/* NavCell component with container and columnGap props */}
      <Grid item>{icon}</Grid> {/* Grid item for icon */}
      <Grid item>
        <Typography>{text}</Typography> {/* Typography component for text */}
      </Grid>
    </NavCell>
  );
};

export default NavItem; // Exporting NavItem component
