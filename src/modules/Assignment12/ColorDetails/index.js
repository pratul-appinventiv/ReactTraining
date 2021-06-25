import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getColors } from "./actions";
import { Grid, Box, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  styleHeading: {
    marginTop: "50px",
    fontSize: "76px",
  },
  styleCardsContainer: {
    width: "99%",
    margin: "30px auto",
  },
  styleCard: {
    padding: "20px",
    borderRadius: "15px",
    height: "300px",
    display: "flex",
  },
  styleCardMedia: {
    width: "40%",
    borderRadius: "15px",
  },
  styleCardContent: {
    width: "60%",
  },
  styleSubText: {
    paddingTop: "3px",
    marginLeft: "5px",
  },
  styleTextBox: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "15px",
  },
});

function ColorDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { colorsData } = useSelector((state) => state.colorReducer);

  useEffect(() => {
    dispatch(getColors());
  }, []);

  return (
    <>
      <Typography
        className={classes.styleHeading}
        variant={"h2"}
        align={"center"}
      >
        {"Color Details"}
      </Typography>
      <Grid className={classes.styleCardsContainer} container spacing={6}>
        {colorsData?.map((curr, ind) => (
          <Grid key={ind} item lg={4} sm={6} xs={12}>
            <Card className={classes.styleCard}>
              <Box
                className={classes.styleCardMedia}
                style={{ backgroundColor: curr.color }}
              ></Box>
              <Box className={classes.styleCardContent}>
                <Typography variant={"h4"} align={"center"}>
                  {"Details"}
                </Typography>
                <Box className={classes.styleTextBox}>
                  <Typography variant={"h5"}>{"color name:"}</Typography>
                  <Typography className={classes.styleSubText} variant={"h6"}>
                    {curr.name}
                  </Typography>
                </Box>

                <Box className={classes.styleTextBox}>
                  <Typography variant={"h5"}>{"color code:"}</Typography>
                  <Typography className={classes.styleSubText} variant={"h6"}>
                    {curr.color}
                  </Typography>
                </Box>
                <Box className={classes.styleTextBox}>
                  <Typography variant={"h5"}>{"pantone value:"}</Typography>
                  <Typography className={classes.styleSubText} variant={"h6"}>
                    {curr.pantone_value}
                  </Typography>
                </Box>
                <Box className={classes.styleTextBox}>
                  <Typography variant={"h5"}>{"year:"}</Typography>
                  <Typography className={classes.styleSubText} variant={"h6"}>
                    {curr.year}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ColorDetails;
