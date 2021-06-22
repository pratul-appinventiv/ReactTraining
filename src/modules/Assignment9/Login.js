import React, { useState } from "react";
import {
  Grid,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  verticalSpacing: {
    margin: "20px 0",
  },
  styleLoginButton: {
    height: "56px",
  },
  styleFormContainer: {
    borderRadius: "15px",
  },
});

function Login() {
  const classes = useStyles();

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email.trim() === "") alert("Please enter the email");
    else if (!values.email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      alert("Please enter valid email address");
    else if (values.password.trim() === "") alert("Please enter the password");
    else if (values.password.length < 6)
      alert("Password should have atleast 6 characters");
    else {
      localStorage.setItem("accessToken", "dgfyegfuir63763te6yftfwdgyug");
      history.push("/dashboard");
    }
  };
  return (
    <Grid container justify={"center"}>
      <Grid item xs={6}>
        <Paper
          className={classes.styleFormContainer}
          component={Box}
          mt={25}
          px={15}
          py={5}
        >
          <form>
            <Typography
              className={classes.verticalSpacing}
              variant={"h2"}
              align={"center"}
            >
              {"Login Form"}
            </Typography>
            <TextField
              className={classes.verticalSpacing}
              placeholder={"Enter Your Email"}
              label={"Email"}
              name={"email"}
              variant={"outlined"}
              fullWidth
              onChange={handleChange}
            />
            <TextField
              className={classes.verticalSpacing}
              type={"password"}
              placeholder={"Enter Your Password"}
              label={"Password"}
              name={"password"}
              variant={"outlined"}
              fullWidth
              onChange={handleChange}
            />

            <Button
              type={"submit"}
              className={`${classes.verticalSpacing} ${classes.styleLoginButton}`}
              color={"primary"}
              variant={"contained"}
              size={"large"}
              fullWidth
              onClick={handleSubmit}
            >
              {"Login"}
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
