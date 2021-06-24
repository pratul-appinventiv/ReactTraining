import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ModalForm from "./components/ModalForm";
import {
  Grid,
  Card,
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./components/Navbar";

const useStyles = makeStyles({
  styleCardsContainer: {
    width: "80%",
    margin: "30px auto",
  },
  styleMobileImg: {
    textAlign: "center",
  },
  styleCard: {
    padding: "20px",
    borderRadius: "15px",
    height: "300px",
  },
  styleButton: {
    marginLeft: "123px",
    marginTop: "20px",
  },
  styleLink: {
    textDecoration: "none",
    color: "#fff",
  },
  addBtnContainer: {
    textAlign: "center",
    marginTop: "41px",
  },
  addBtn: {
    backgroundColor: "#0eeb49",
  },
});

function Users() {
  const classes = useStyles();
  const history = useHistory();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("Data"))
  );
  const [isModalOpen, setModalOpen] = useState(false);

  if (localStorage.getItem("accessToken") === null) history.push("/");

  return (
    <div>
      <Navbar />
      <Box className={classes.addBtnContainer}>
        <Button
          className={classes.addBtn}
          variant={"contained"}
          size={"large"}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          {"Add User"}
        </Button>
      </Box>
      <Grid className={classes.styleCardsContainer} container spacing={6}>
        {userData?.map((curr, ind) => (
          <Grid key={curr.id} item lg={4} sm={6} xs={12}>
            <Card className={classes.styleCard}>
              <CardActionArea>
                <CardMedia>
                  <figure className={classes.styleMobileImg}>
                    <img src={curr.avatar} alt={"mobileImg"} />
                  </figure>
                </CardMedia>
                <CardContent>
                  <Typography align={"center"} variant={"h6"}>
                    {curr.first_name}
                  </Typography>

                  <Button
                    className={classes.styleButton}
                    variant={"contained"}
                    color={"primary"}
                  >
                    <Link
                      className={classes.styleLink}
                      to={{
                        pathname: `user/details${ind}`,
                      }}
                    >
                      {"See Details"}
                    </Link>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ModalForm
        heading={"Add Entry"}
        isModalOpen={isModalOpen}
        setModalOpen={() => {
          setModalOpen(false);
        }}
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
}

export default Users;
