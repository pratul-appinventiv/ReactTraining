import React from "react";
import Header from "./Header";
import Cards from "./Cards";
import TableComponent from "./TableComponent";
import Paragraph from "./Paragraph";
import Stepper from "./Stepper";
import Footer from "./Footer";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  rightContainer: {
    marginLeft: "80px",
  },

  contentWrapper: {
    backgroundColor: "#f4f6f8",
  },

  contentContainer: {
    marginTop: "70px",
    width: "1759px",
    padding: "37px 0",
  },
});

const RightContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.rightContainer}>
      <Header />
      <div className={classes.contentWrapper}>
        <div className={classes.contentContainer}>
          <Cards />
          <TableComponent />
          <Paragraph />
          <Stepper />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
