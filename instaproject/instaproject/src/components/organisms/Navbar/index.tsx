import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  BOTTOM_NAV_ITEMS,
  INSTAGRAM,
  NAV_ITEMS,
} from "../../../utils/constants";
import NavItem from "../../molecules/NavItem";

const Navbar = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      height="100vh"
      p={1}
      pb={3}
    >
      <Grid item>
        <Grid container direction="column" rowGap={5}>
          <Grid item>
            <Typography variant="h4" children={INSTAGRAM} />
          </Grid>
          <Grid item>
            <Grid container direction="column">
              {NAV_ITEMS.map((item) => (
                <Grid item>
                  <NavItem icon={item.icon} text={item.name} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          {BOTTOM_NAV_ITEMS.map((item) => (
            <Grid item>
              <NavItem icon={item.icon} text={item.name} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
