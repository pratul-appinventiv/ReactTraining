import React from "react";
import Sidebar from "./Sidebar";
import RightContainer from "./RightContainer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
  },
});

const Assignment5 = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <RightContainer />
    </div>
  );
};

export default Assignment5;
