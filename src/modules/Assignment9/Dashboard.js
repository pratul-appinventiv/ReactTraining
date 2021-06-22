import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./components/Navbar";
import Data from "./Data";

const useStyles = makeStyles({
  styleCardsContainer: {
    width: "80%",
    margin: "75px auto",
  },
  styleMobileImg: {
    textAlign: "center",
  },
  styleCard: {
    padding: "20px",
    borderRadius: "15px",
  },
  styleButton: {
    marginLeft: "123px",
    marginTop: "20px",
  },
  styleLink: {
    textDecoration: "none",
  },
});

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  if (localStorage.getItem("accessToken") === null) history.push("/");

  return (
    <div>
      <Navbar />
      <Grid className={classes.styleCardsContainer} container spacing={6}>
        {Data.map((curr) => (
          <Grid key={curr.id} item lg={4} sm={6} xs={12}>
            <Card className={classes.styleCard}>
              <CardActionArea>
                <CardMedia>
                  <figure className={classes.styleMobileImg}>
                    <img src={curr.src} alt={"mobileImg"} />
                  </figure>
                </CardMedia>
                <CardContent>
                  <Typography align={"center"} variant={"h6"}>
                    {curr.title}
                  </Typography>
                  <Link
                    className={classes.styleLink}
                    to={`dashboard/details${curr.id}`}
                  >
                    <Button
                      className={classes.styleButton}
                      variant={"contained"}
                      color={"primary"}
                    >
                      {"See Details"}
                    </Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
