import React from "react"; // Import React library
import { Box, Grid } from "@mui/material"; // Import Box and Grid components from Material-UI
import { styled } from "@mui/system"; // Import styled function

import { STORY_ITEMS } from "../../Utils/constants"; // Import STORY_ITEMS constant from Utils/constants
import createStory from "../../Molecules/Story"; // Import createStory function from Molecules/Story
import Typography from "../../Atoms/Typography"; // Import Typography component from Atoms/Typography

// Create the Story component using the createStory function
const Story = createStory();

// Styled Box component for story container
const StoryContainer = styled(Box)({
  display: "flex", // Set display property to flex
  // justifyContent: "space-evenly", // Adjusted to move circles to the left
  // padding: 2,
  marginLeft: "50px", // Set marginLeft to 50px
});

// Styled Box component for story item
const StoryItem = styled(Box)({
  // display: "flex",
  flexDirection: "column", // Set flexDirection to column
  alignItems: "center", // Set alignItems to center
  margin: "0 10px", // Adjusted margin to give more space between story circles
});

// Functional component to render all stories
const Stories = () => (
  <Grid item> {/* Grid item wrapper */}
    <StoryContainer> {/* Render the StoryContainer */}
      {STORY_ITEMS.map((story, index) => ( // Map through STORY_ITEMS array
        <StoryItem key={index}> {/* Render each StoryItem */}
          <Grid item> {/* Grid item wrapper */}
            <Story src={story.src} alt={story.Text} /> {/* Render Story component with src and alt props */}
          </Grid>
          <Grid> {/* Grid item wrapper */}
            <Typography variant="caption">{story.Text}</Typography> {/* Render Typography component with variant and text props */}
          </Grid>
        </StoryItem>
      ))}
    </StoryContainer>
  </Grid>
);

export default Stories; // Export Stories component as default
