import React from "react";

import {
  makeStyles,
  Link,
  Typography,
  Button,
  Divider,
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
          <Typography className={classes.links}>
            <Link href={"#"} underline={"always"}>
              {"About"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Terms of service"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Fees"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Contact us"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Law Enforcement Inquiries"}
            </Link>
          </Typography>

          <Typography className={classes.links}>
            <Link href={"#"} underline={"always"}>
              {"Security bounty"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Affiliate"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Statistics"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"API docs"}
            </Link>
          </Typography>

          <Typography className={classes.links}>
            <Link href={"#"} underline={"always"}>
              {"Local Bitcoins Alternative"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Monero News"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Knowledge"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"Monero Block Explorer"}
            </Link>
          </Typography>

          <Typography className={classes.links}>
            <Link href={"#"} underline={"always"}>
              {"Tor hidden service"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {" I2P"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {" B32 I2P"}
            </Link>
            <Link href={"#"} underline={"always"}>
              {"AgoraDesk"}
            </Link>
          </Typography>
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
