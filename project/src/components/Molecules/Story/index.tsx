import React from "react";  // Importing React library for JSX usage
import { Grid } from "@mui/material";  // Importing Grid component from MUI library
import { styled } from "@mui/system";  // Importing styled function from MUI library

// Define types for story properties
interface StoryProps {
  src: string;  // URL of the image source
  alt: string;  // Alternative text for the image
}

// Function that returns the Story component
const createStory = () => {
  // Styled component for the story cell
  const StoryCell = styled(Grid)({  // Creating a styled component using Grid from MUI
    width: "60px",  // Setting width to 60px
    height: "60px",  // Setting height to 60px
    borderRadius: "50%",  // Making the border circular
    border: "3px solid #E1306C",  // Adding a 3px solid border with a specific color
    display: "flex",  // Setting display to flex
    // alignItems: "center",  // Uncomment this line if you want to vertically center the content
    // justifyContent: "center",  // Uncomment this line if you want to horizontally center the content
    overflow: "hidden",  // Hiding any overflowing content
    cursor: "pointer",  // Changing cursor to pointer on hover
    // margin: "10px",  // Uncomment this line if you want to add margin around the component
  });

  // Functional component for a single story
  const Story = ({ src, alt }: StoryProps) => (  // Declaring a functional component named Story
     <StoryCell >                                                                    
       <Grid item>      
        <img  // Image element
          src={src}  // Source of the image
          alt={alt}  // Alternative text for the image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}  // Inline styles for the image
        />
      </Grid>
    </StoryCell>
  );

  return Story;  // Returning the Story component
};

export default createStory;  // Exporting the createStory function as default
