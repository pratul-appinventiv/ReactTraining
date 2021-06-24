import React, { useState } from "react";
import ModalForm from "./components/ModalForm";
import DeleteModal from "./components/DeleteModal";
import {
  Grid,
  Box,
  Paper,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import Navbar from "./components/Navbar";

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
  styleBtnContainer: {
    width: "20%",
    margin: "51px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editBtn: {
    backgroundColor: "#0eeb49",
  },
});

function UserDetails(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const Data = JSON.parse(localStorage.getItem("Data"));
  const ind = props.match.params.id;
  const { avatar, first_name, last_name, email } = Data[ind];
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.styleBtnContainer}>
        <Button
          className={classes.editBtn}
          variant={"contained"}
          size={"large"}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {"Edit"}
        </Button>
        <Button
          variant={"contained"}
          color={"secondary"}
          size={"large"}
          onClick={() => {
            setDeleteModalOpen(true);
          }}
        >
          {"Delete"}
        </Button>
      </Box>
      <Grid className={classes.styleCardContainer} container justify={"center"}>
        <Grid item xs={9}>
          <Paper component={Box} p={5} className={classes.styleCard}>
            <figure className={classes.styleImage}>
              <img src={avatar} alt={"mobileImg"} />
            </figure>
            <Typography
              className={classes.styleText}
              variant={"h3"}
              align={"center"}
            >
              {first_name}
            </Typography>
            <Typography
              className={classes.styleText}
              align={"center"}
              variant={"h4"}
            >
              {"Details"}
            </Typography>
            <Box className={classes.styleTextBox}>
              <Typography variant={"h5"}>{"Full Name:"}</Typography>
              <Typography className={classes.styleSubText} variant={"body1"}>
                {first_name} {last_name}
              </Typography>
            </Box>
            <Box className={classes.styleTextBox}>
              <Typography variant={"h5"}>{"Email Id:"}</Typography>
              <Typography className={classes.styleSubText} variant={"body1"}>
                {email}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <ModalForm
        heading={"Edit Form"}
        isModalOpen={isModalOpen}
        setModalOpen={() => {
          setModalOpen(false);
        }}
        index={ind}
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setDeleteModalOpen={() => {
          setDeleteModalOpen(false);
        }}
        index={ind}
      />
    </>
  );
}

export default UserDetails;
