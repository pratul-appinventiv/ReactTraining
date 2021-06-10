import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  tableHeading: {
    fontSize: "29px",
    color: "#424242",
    margin: "20px 0 20px 207px",
  },
});

const Table1 = () => {
  const classes = useStyles();
  return (
    <div className={"table1Container"}>
      <Typography className={classes.tableHeading} variant={"h4"}>
        {"Buy Monero online in India"}
      </Typography>
    </div>
  );
};

export default Table1;
