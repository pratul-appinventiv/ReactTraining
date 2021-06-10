import React from "react";

import {
  Switch,
  FormControlLabel,
  Button,
  makeStyles,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyles = makeStyles({
  headerWrapper: {
    position: "fixed",
    width: "96%",
    zIndex: "2",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%)",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: "10px",
  },
  switch: {
    marginTop: "10px",
    "& .MuiSwitch-colorSecondary.Mui-checked": {
      color: "#00d87c",
    },
    "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#00d87c",
    },
    "& .MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1": {
      fontSize: "10px",
    },
  },
  signUpButton: {
    backgroundColor: "#388538",
    color: "#fff",
    marginRight: "10px",
  },

  buttons: {
    paddingRight: "20px",
    marginTop: "5px",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerContainer}>
        <div className={"switch"}>
          <FormControlLabel
            value={"On"}
            control={<Switch size={"small"} className={classes.switch} />}
            label={"On"}
            labelPlacement={"bottom"}
          />
        </div>
        <div className={classes.buttons}>
          <Button
            startIcon={<PersonAddIcon />}
            className={classes.signUpButton}
            variant={"contained"}
          >
            {"SIGN UP FREE"}
          </Button>
          <Button
            startIcon={<FingerprintIcon />}
            className={classes.logInButton}
            variant={"contained"}
            color={"primary"}
          >
            {"LOG IN"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
