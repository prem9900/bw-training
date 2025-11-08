import styled from "@emotion/styled"; // Importing styled from Emotion for styling components
import { Button, Grid } from "@mui/material"; // Importing Button and Grid components from Material-UI
import React from "react"; // Importing React library
import Typography from "../../Atoms/Typography"; // Importing Typography component from a custom location; ensure the path is correct

// Defining props interface for the SwitchAccount component
export interface SwitchAccountProps {
  src: string; // Source URL for an image
  Text: string; // Text to be displayed
}

// Styling the SwitchAccount component using styled from Emotion
const StyledSwitchAccount = styled(Grid)({
  display: "flex", // Setting display property to flex for the Grid container
  alignItems: "center", // Aligning items along the vertical axis to the center
});

// Styling for a circular container
const CircleContainer = styled(Grid)({
  width: "60px", // Setting width to 60px
  height: "60px", // Setting height to 60px
  borderRadius: "50%", // Making the container circular using border radius
  border: "3px solid #E1306C", // Applying a border with a color similar to Instagram's
  display: "flex", // Setting display property to flex for the Grid container
  alignItems: "center", // Aligning items along the vertical axis to the center
  justifyContent: "center", // Aligning items along the horizontal axis to the center
  overflow: "hidden", // Hiding overflow content
  cursor: "pointer", // Setting cursor to pointer on hover
  marginLeft: "120px", // Adjusting the left margin; can be customized
  marginTop: "2px", // Adjusting the top margin; can be customized
});

// Styling for the container holding text
const TextContainer = styled(Grid)({
  marginLeft: "3px", // Setting left margin; can be customized
});

// Functional component definition for SwitchAccount
const SwitchAccount: React.FC<SwitchAccountProps> = ({ src, Text }) => {
  return (
    <StyledSwitchAccount container alignItems="center">
      <CircleContainer item>
        {/* Displaying an image inside the circular container */}
        <img
          src={src} // Source URL of the image
          alt={Text} // Alternate text for the image
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Styling the image
        />
      </CircleContainer>
      <TextContainer item>
        {/* Displaying text using a Typography component */}
        <Typography>{Text}</Typography>{" "}
        {/* Assuming Typography is a custom component */}
      </TextContainer>
      {/* Button component for switching */}
      <Grid item>
        <Button variant="text">Switch</Button>
      </Grid>
    </StyledSwitchAccount>
  );
};

export default SwitchAccount; // Exporting the SwitchAccount component
