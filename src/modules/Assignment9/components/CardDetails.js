import React from "react";
import { Grid, Box, Paper, Typography, makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Data from "../Data";

const useStyles = makeStyles({
  styleCardContainer: {
    width: "50%",
    margin: "20px auto",
  },
  styleCard: {
    borderRadius: "15px",
  },
  styleText: {
    margin: "10px",
  },
  styleSubText: {
    paddingTop: "3px",
    marginLeft: "20px",
    fontSize: "20px",
  },
  styleImage: {
    textAlign: "center",
  },
  styleTextBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: "70px",
  },
});

function CardDetails(props) {
  const ind = props.match.params.id - 1;
  const { src, title, price, screenSize, camera, battery, ram } = Data[ind];
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid className={classes.styleCardContainer} container justify={"center"}>
        <Grid item xs={9}>
          <Paper component={Box} p={5} mt={5} className={classes.styleCard}>
            <figure className={classes.styleImage}>
              <img src={src} alt={"mobileImg"} />
            </figure>
            <Typography
              className={classes.styleText}
              variant={"h3"}
              align={"center"}
            >
              {title}
            </Typography>
            <Typography
              className={classes.styleText}
              align={"center"}
              variant={"h4"}
            >
              {"Features"}
            </Typography>
            <Box className={classes.styleTextBox}>
              <Typography variant={"h5"}>{"Price:"}</Typography>
              <Typography className={classes.styleSubText} variant={"body1"}>
                {price}
              </Typography>
            </Box>
            <Box className={classes.styleTextBox}>
              <Typography variant={"h5"}>{"Screen-size:"}</Typography>
              <Typography className={classes.styleSubText} variant={"body1"}>
                {screenSize}
              </Typography>
            </Box>
            <Box className={classes.styleTextBox}>
              <Typography variant={"h5"}>{"Camera:"}</Typography>
              <Typography className={classes.styleSubText} variant={"body1"}>
                {camera}
              </Typography>
            </Box>
            <Box className={classes.styleTextBox}>
              <Typography variant={"h5"}>{"Battery:"}</Typography>
              <Typography className={classes.styleSubText} variant={"body1"}>
                {battery}
              </Typography>
            </Box>
            <Box className={classes.styleTextBox}>
              <Typography variant={"h5"}>{"Ram:"}</Typography>
              <Typography className={classes.styleSubText} variant={"body1"}>
                {ram}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default CardDetails;
