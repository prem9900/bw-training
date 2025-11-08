import React from "react";
import NavBar from "./components/Organisms/NavbarSection";
import Stories from "./components/Organisms/Storiessections";
import { Grid, Box } from "@mui/material";

import SwitchAccount from "./components/Molecules/SwithAccount";
import Accounts from "./components/Organisms/SuggestionSection";

const App: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <NavBar />
      </Grid>
      <Grid item>
        <Stories />
      </Grid>
      <Grid item>
        <Box mb={1}>
          <SwitchAccount
            src={
              "https://images.rawpixel.com/image_png_450/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNV8zZF9jaGFyYWN0ZXJfaWxsdXN0cmF0aW9uX2NhcnRvb25fb2ZfYmFieV9mb3hfbl80YmQ5YTViMC0xMzJlLTRlMjMtODJjMi1lYzQxNDhhNTc1ODAucG5n.png"
            }
            Text={"-----prem-----"}
          />
        </Box>
        <Accounts />
      </Grid>
    </Grid>
  );
};

export default App;
