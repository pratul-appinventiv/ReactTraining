import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";
import { Paper, Box, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  styleContainer: {
    width: "37%",
    padding: "40px 20px",
    margin: "313px auto",
    backgroundColor: "#fff",
    borderRadius: "15px",
  },
  styleBtnContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "47%",
    margin: "45px auto",
  },
});
function Counter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterReducer);
  return (
    <Paper className={classes.styleContainer} component={Box}>
      <Typography
        variant={"h4"}
        align={"center"}
      >{`Counter:${count}`}</Typography>
      <Box className={classes.styleBtnContainer}>
        <Button
          variant={"contained"}
          size={"large"}
          color={"primary"}
          onClick={() => dispatch(incrementCounter(1))}
        >
          {"Increment"}
        </Button>
        <Button
          variant={"contained"}
          size={"large"}
          color={"primary"}
          onClick={() => dispatch(decrementCounter(1))}
        >
          {"Decrement"}
        </Button>
      </Box>
    </Paper>
  );
}

export default Counter;
