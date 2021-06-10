import React from "react";
import CountrySelect from "./SelectCountry";
import {
  Button,
  makeStyles,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles({
  cardsSection: {
    display: "flex",
    marginLeft: "207px",
  },
  card1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: "12px",
    width: "668px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%)",
  },

  card2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
    justifyContent: "flexStart",
    marginRight: "12px",
    width: "668px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "6px",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%)",
  },

  card2Text: {
    fontSize: "37px",
    color: "#424242",
    marginBottom: "9px",
  },

  card2SignUp: {
    height: "50px",
    backgroundColor: "#388538",
    color: "#fff",
    marginTop: "10px",
  },

  fieldsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItmes: "center",
  },

  buyBtn: {
    width: "305px",
    height: "50px",
    fontSize: "19px",
  },

  sellBtn: {
    width: "305px",
    height: "50px",
    fontSize: "19px",
    color: "#424242",
  },

  amount: {
    width: "305px",
    height: "70px",
    color: "#424242",
    marginTop: "10px",
  },
  inr: {
    width: "305px",
    height: "55px",
    marginTop: "10px",
  },
  search: {
    height: "50px",
  },
});

const Cards = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardsSection}>
      <div className={classes.card1}>
        <div className={classes.fieldsContainer}>
          <Button
            startIcon={<ShoppingCartOutlinedIcon />}
            className={classes.buyBtn}
            color={"primary"}
            variant={"contained"}
          >
            {"BUY"}
          </Button>
          <Button
            startIcon={<ShoppingCartOutlinedIcon size={"large"} />}
            className={classes.sellBtn}
            variant={"outlined"}
          >
            {"SELL"}
          </Button>
        </div>
        <div className={classes.fieldsContainer}>
          <TextField
            className={classes.amount}
            type={"number"}
            variant="outlined"
            label={"Amount"}
          />

          <Select
            value={"10"}
            className={classes.inr}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            variant="outlined"
            label="Age"
          >
            <MenuItem value={"10"}>{"INR"}</MenuItem>
            <MenuItem value={"20"}>{"AEON"}</MenuItem>
            <MenuItem value={"30"}>{"AFN"}</MenuItem>
          </Select>
        </div>
        <div className={classes.fieldsContainer}>
          <CountrySelect />
          <CountrySelect />
        </div>
        <Button
          className={classes.search}
          startIcon={<SearchIcon />}
          color={"primary"}
          variant={"contained"}
        >
          {"SEARCH"}
        </Button>
      </div>
      <div className={` ${classes.card2}`}>
        <Typography className={classes.card2Text} variant={"h4"}>
          {"Buy Monero."}
        </Typography>
        <Typography className={classes.card2Text} variant={"h4"}>
          {"Sell Monero."}
        </Typography>
        <Typography className={classes.card2Text} variant={"h4"}>
          {"Cash or online."}
        </Typography>
        <Typography className={classes.card2Text} variant={"h4"}>
          {"Anywhere."}
        </Typography>
        <Button
          variant={"contained"}
          startIcon={<PersonAddIcon />}
          size="Large"
          className={classes.card2SignUp}
        >
          {"SIGN UP FREE"}
        </Button>
      </div>
    </div>
  );
};

export default Cards;
