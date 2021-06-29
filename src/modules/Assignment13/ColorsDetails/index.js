import React, { useContext } from "react";
import { AppContext } from "../index";
import {
  Grid,
  Box,
  Card,
  Typography,
  makeStyles,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core";

const useStyles = makeStyles({
  styleMainContainer: {
    height: "100%",
  },
  styleSwitchContainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  styleHeading: {
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
  styleBtnContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "20%",
    height: "125px",
    margin: "0 auto",
  },
});

function ColorsDetails() {
  const classes = useStyles();
  const [newState, dispatch] = useContext(AppContext);
  const { colorsData, Theme, themeName } = newState;
  return (
    <Box style={Theme} className={classes.styleMainContainer}>
      <Box className={classes.styleSwitchContainer}>
        <FormControlLabel
          value="bottom"
          control={
            <Switch
              color="primary"
              onClick={() => dispatch({ type: "CHANGE_THEME" })}
            />
          }
          label={themeName}
          labelPlacement="bottom"
        />
      </Box>
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
      <Box className={classes.styleBtnContainer} pb={3}>
        <Button
          variant={"contained"}
          size={"large"}
          color={"secondary"}
          onClick={() => dispatch({ type: "CHANGE_COLORS_TO_ORANGE" })}
        >
          {"Change Colors to Orange"}
        </Button>
        <Button
          variant={"contained"}
          size={"large"}
          color={"secondary"}
          onClick={() => dispatch({ type: "CHANGE_COLORS_TO_DEFAULT" })}
        >
          {"Change Colors to Default"}
        </Button>
      </Box>
    </Box>
  );
}

export default ColorsDetails;
