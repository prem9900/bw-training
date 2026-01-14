import React from "react"; // Import React library
import { Box, Grid } from "@mui/material"; // Import Box and Grid components from MUI library
import { styled } from "@mui/system"; // Import styled function from MUI system

import { ACCOUNT_ITEMS } from "../../Utils/constants"; // Import constant ACCOUNT_ITEMS from Utils/constants

import SwitchAccount from "../../Molecules/SwithAccount"; // Import SwitchAccount component

// Define styled component for SwitchAccount with any specific styles
const StyledSwitchAccount = styled(SwitchAccount)({
  // Add any styles specific to SwitchAccount component if needed
});

// Define styled component for the container of accounts
const AccountContainer = styled(Box)({
  // Define styles for the container
  marginTop: "50px", // Set top margin
});

// Define styled component for each individual account item
const AccountItem = styled(Box)({
  // Define styles for each account item
  // Optionally, you can specify flex-direction, align-items, and other styles here
});

// Define functional component for rendering accounts
const Accounts = () => (
  <Grid item> {/* Grid item component */}
    <AccountContainer> {/* Container for accounts */}
      {ACCOUNT_ITEMS.map((account, index) => ( // Map through each account item
        <AccountItem key={index}> {/* Account item component with unique key */}
          <Grid item> {/* Grid item component */}
            <StyledSwitchAccount src={account.src} Text={account.Text} /> {/* Render StyledSwitchAccount component */}
          </Grid>
          <Grid> {/* Empty grid item */}
            {/* You can add content or components here if needed */}
          </Grid>
        </AccountItem>
      ))}
    </AccountContainer>
  </Grid>
);

export default Accounts; // Export Accounts component as default
