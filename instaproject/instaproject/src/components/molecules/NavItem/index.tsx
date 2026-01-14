import { Grid, styled } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";

interface Props {
  icon: string;
  text: string;
  onClick?: () => {};
}

const NavCell = styled(Grid)({
  width: "200px",
  padding: "12px",
  borderRadius: "8px",
  "&:hover": {
    background: "#aaa4",
  },
});

const NavItem = (props: Props) => {
  return (
    <NavCell container columnGap={2}>
      <Grid item>
        <Icon src={props.icon}></Icon>
      </Grid>
      <Grid item>
        <Typography children={props.text} />
      </Grid>
    </NavCell>
  );
};

export default NavItem;
