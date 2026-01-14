import React from "react"; // Importing React library

// Importing constants from a custom location; ensure the path is correct
import { BOTTOM_NAV_ITEMS, NAV_ITEMS, INSTAGRAM } from "../../Utils/constants";

// Importing NavItem component from a custom location; ensure the path is correct
import NavItem from "../../Molecules/NavItem";

// Importing components from Material-UI
import { Grid, Typography } from "@mui/material";

// Importing icons from Material-UI
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import ReelsIcon from "@mui/icons-material/VideoLibrary";
import MessagesIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CreateIcon from "@mui/icons-material/Create";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import ThreadIcon from "@mui/icons-material/Forum";
import MoreIcon from "@mui/icons-material/MoreVert";

// Mapping icon strings to actual icon components
const iconMapping: { [key: string]: React.ReactElement } = {
  home: <HomeIcon />, // Home icon
  search: <SearchIcon />, // Search icon
  explore: <ExploreIcon />, // Explore icon
  reels: <ReelsIcon />, // Reels icon
  messages: <MessagesIcon />, // Messages icon
  notifications: <NotificationsIcon />, // Notifications icon
  create: <CreateIcon />, // Create icon
  profile: <ProfileIcon />, // Profile icon
  thread: <ThreadIcon />, // Thread icon
  more: <MoreIcon />, // More icon
};

// Functional component definition for NavBar
const NavBar = () => {
  return (
    // Main container for the NavBar
    <Grid
      container
      direction="column" // Arranging items vertically
      justifyContent="space-between" // Distributing space between items
      height="100vh" // Setting height to 100% of the viewport height
      p={1} // Applying padding
      pb={3} // Adding bottom padding
    >
      {/* Container for the top section */}
      <Grid item>
        {/* Nested container for the logo and main navigation items */}
        <Grid container direction="column" rowGap={5}>
          {/* Grid item for the logo */}
          <Grid item>
            {/* Typography component for the Instagram logo */}
            <Typography variant="h4">{INSTAGRAM}</Typography>
          </Grid>
          {/* Grid item for the main navigation items */}
          <Grid item>
            {/* Container for the main navigation items */}
            <Grid container direction="column">
              {/* Mapping through each navigation item */}
              {NAV_ITEMS.map((item) => (
                // Grid item for each navigation item
                <Grid item key={item.Text}>
                  {/* Rendering NavItem component for each navigation item */}
                  <NavItem
                    // Using the mapped icon or a default icon if not found
                    icon={iconMapping[item.icon.toLowerCase()] || <HomeIcon />}
                    text={item.Text} // Text of the navigation item
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Container for the bottom section */}
      <Grid item>
        {/* Container for the bottom navigation items */}
        <Grid container direction="column">
          {/* Mapping through each bottom navigation item */}
          {BOTTOM_NAV_ITEMS.map((item) => (
            // Grid item for each bottom navigation item
            <Grid item key={item.Text}>
              {/* Rendering NavItem component for each bottom navigation item */}
              <NavItem
                // Using the mapped icon or a default icon if not found
                icon={iconMapping[item.icon.toLowerCase()] || <HomeIcon />}
                text={item.Text} // Text of the bottom navigation item
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar; // Exporting the NavBar component
