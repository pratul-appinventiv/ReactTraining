import React from "react";

import {
  makeStyles,
  Link,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  footerContainer: {
    width: "59%",
    display: "flex",
    margin: "48px auto",
    flexDirection: "column",
    alignItems: "center",
  },
  links: {
    display: "flex",
    flexDirection: "column",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  langBtn: {
    margin: "10px 0 0 0",
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "16px",
    height: "50px",
  },
  langIcon: {
    margin: "0 10px 0 0",
  },
  copyRightIcon: {
    margin: "0px 0 30px 0",
    color: "#424242",
  },
  socialIcons: {
    width: "26px",
    height: "38px",
    color: "#424242",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <div className={classes.footerContainer}>
        <Typography className={classes.copyRightIcon} vairent="p">
          &copy; {"2021 Blue Sunday Limited"}
        </Typography>
        <div className={classes.linkContainer}>
          <List disablePadding>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{"About"}</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Terms of service"}
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{"Fees"}</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Contact us"}
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Law Enforcement Inquiries"}
                </Typography>
              </Link>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Security Bounty"}
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{"Affiliate"}</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Statistics"}
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{"API Docs"}</Typography>
              </Link>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Local Bitcoin Alternatives"}
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Monero News"}
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{"Knowledge"}</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Monero Block Explorer"}
                </Typography>
              </Link>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>
                  {"Top hidden service"}
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{" I2P"}</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{" B32 I2P"}</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"#"} underline={"always"}>
                <Typography className={classes.links}>{"AgoraDesk"}</Typography>
              </Link>
            </ListItem>
          </List>
        </div>
        <div>
          <Button className={classes.langBtn}>
            <LanguageIcon fontSize={"large"} className={classes.langIcon} />
            {"Change Language"}
          </Button>
        </div>
        <div className={classes.socialIconsList}>
          <Button>
            <TwitterIcon fontSize={"small"} className={classes.socialIcons} />
          </Button>
          <Button>
            <RedditIcon fontSize={"small"} className={classes.socialIcons} />
          </Button>
          <Button>
            <FacebookIcon fontSize={"small"} className={classes.socialIcons} />
          </Button>
          <Button>
            <TelegramIcon fontSize={"small"} className={classes.socialIcons} />
          </Button>
          <Button>
            <GitHubIcon fontSize={"small"} className={classes.socialIcons} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Footer;
