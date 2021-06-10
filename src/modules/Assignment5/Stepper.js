import React from "react";
import MobileStepper from "./MobileStepper";
import { makeStyles, Typography } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles({
  stepperCard: {
    width: "800px",
    borderRadius: "6px",
    margin: "56px auto",
    padding: "20px 32px 6px 32px",
    backgroundColor: "#fff",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%)",
  },
  fileIcon: {
    display: "flex",
    alignItems: "center",
  },

  stepperHead: {
    marginLeft: "10px",
    fontSize: "20px",
    color: "#424242",
  },

  stepperSubHead: {
    color: "#424242",
    width: "700px",
    fontSize: "23px",
    marginTop: "10px",
  },
  stepperDate: {
    color: "#424242",
    fontWeight: "300",
  },
  stepperPara: {
    width: "740px",
    color: "#424242",
    marginTop: "20px",
    fontWeight: "399",
  },
});

const Stepper = () => {
  const classes = useStyles();
  return (
    <div className={classes.stepperCard}>
      <div className={classes.fileIcon}>
        <DescriptionIcon color={"primary"} />
        <Typography className={classes.stepperHead} variant={"h6"}>
          {"Latest News"}
        </Typography>
      </div>
      <Typography variant={"h5"} className={classes.stepperSubHead}>
        {
          "LocalMonero/AgoraDesk now allows you to import reputation from LocalBitcoins and/or Paxful!"
        }
      </Typography>
      <Typography className={classes.stepperDate}>
        {"2020-12-06 12:00 UTC"}
      </Typography>
      <Typography varient={"body1"} className={classes.stepperPara}>
        {
          "If you have an account on LocalBitcoins or Paxful and you'd like to import the reputation you have worked for while trading on these platforms, you can now do so! To do it, simply open your settings page and navigate to the reputation import tab. Your LocalBitcoins/Paxful trades will be added to your total trade count and your other stats will be displayed on your user page."
        }
      </Typography>
      <MobileStepper />
    </div>
  );
};

export default Stepper;
