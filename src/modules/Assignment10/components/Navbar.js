import React from "react";
import {
  Grid,
  Box,
  Paper,
  List,
  ListItem,
  makeStyles,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  styleLinkContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  styleNavBar: {
    borderRadius: "15px",
  },
  styleLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "15px",
  },

  activeLink: {
    color: "blue",
  },
  styleButtonListItem: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

function Navbar() {
  const classes = useStyles();
  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("Data");
  };
  return (
    <Grid container justify={"center"}>
      <Grid item xs={9}>
        <Paper
          component={Box}
          mt={2}
          px={3}
          py={2}
          className={classes.styleNavBar}
        >
          <List className={classes.styleLinkContainer}>
            <ListItem>
              <NavLink
                activeClassName={classes.activeLink}
                className={classes.styleLink}
                to={"/user"}
                exact
              >
                {"Users"}
              </NavLink>
            </ListItem>
            <ListItem className={classes.styleButtonListItem}>
              <NavLink className={classes.styleLink} to={"/"}>
                <Button
                  color={"secondary"}
                  variant={"contained"}
                  onClick={handleLogOut}
                >
                  {"Logout"}
                </Button>
              </NavLink>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Navbar;
