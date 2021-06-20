import React from "react";
import {
  makeStyles,
  Button,
  Typography,
  Link,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const tableData = [
  {
    seller: "appukuttan (305; 100%)",
    bank: " IMPS Bank Transfer India",
    price: "22950.00 INR",
    limits: "100.00 - 18622.76 INR",
  },
  {
    seller: "appukuttan (305; 100%)",
    bank: " IMPS Bank Transfer India",
    price: "22950.00 INR",
    limits: "100.00 - 18622.76 INR",
  },
  {
    seller: "appukuttan (305; 100%)",
    bank: " IMPS Bank Transfer India",
    price: "22950.00 INR",
    limits: "100.00 - 18622.76 INR",
  },
  {
    seller: "jdboi (3134*; 100%)",
    bank: "Other online payment",
    price: "22950.00 INR",
    limits: "2500.00 - 20000.00 INR",
  },
  {
    seller: "jdboi (3134*; 100%)",
    bank: "Other online payment",
    price: "22950.00 INR",
    limits: "2500.00 - 20000.00 INR",
  },
];

const useStyles = makeStyles({
  tableContainer: {
    width: "77%",
    marginLeft: "202px",
  },
  tableHeading: {
    fontSize: "29px",
    color: "#424242",
    margin: "20px 0 20px 207px",
  },
  styleTableRow: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f4f6f8",
    },
  },
  alignItems: {
    display: "flex",
    alignItems: "center",
  },
  alignLimits: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circleIcon: {
    color: "#81c784",
  },
  linkText: {
    fontSize: "17px",
    display: "flex",
    "&:hover": {
      color: "#444",
    },
  },

  greenText: {
    color: "#388538",
  },
  limitText: {
    fontSize: "15px",
  },
  buy: {
    backgroundColor: "#FFBA1F",
    width: "50px",
    color: "#fff",
    marginLeft: "20px",
    "&:hover": {
      backgroundColor: "#b28215",
    },
  },
  toolTip: {
    backgroundColor: "#1465C0",
    color: "#fff",
    fontSize: "16px",
    padding: "15px",
  },
  statusSignal: {
    backgroundColor: "#81C784",
    border: "none",
    borderRadius: "50%",
    width: "15px",
    height: "15px",
    margin: "1px 10px ",
  },
});

const TableComponent = () => {
  const classes = useStyles();
  return (
    <div className={"table1Container"}>
      <Typography className={classes.tableHeading} variant={"h4"}>
        {"Buy Monero online in India"}
      </Typography>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>{"Seller"}</TableCell>
              <TableCell>{"Payment Method"}</TableCell>
              <TableCell>{"Price/XMR"}</TableCell>
              <TableCell>{"Limits"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((curr, ind) => (
              <TableRow key={ind} className={classes.styleTableRow}>
                <TableCell>
                  <div className={classes.alignItems}>
                    <Link className={classes.linkText} underline={"always"}>
                      {curr.seller}
                      <Tooltip
                        placement={"top"}
                        title={"Last seen 10 minutes ago"}
                        classes={{ tooltip: classes.toolTip }}
                      >
                        <div className={classes.statusSignal}></div>
                      </Tooltip>
                    </Link>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={classes.alignItems}>
                    <AccountBalanceIcon />
                    <Typography variant={"subtitle1"}>{curr.bank}</Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <Typography className={classes.greenText} variant={"h5"}>
                    {curr.price}
                  </Typography>
                </TableCell>
                <TableCell className={classes.alignLimits}>
                  <Typography
                    className={classes.limitText}
                    variant={"subtitle2"}
                  >
                    {curr.limits}
                  </Typography>
                  <Button className={classes.buy} variant={"contained"}>
                    {"BUY"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography className={classes.tableHeading} variant={"h4"}>
        {"Sell Monero online in India"}
      </Typography>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>{"Buyer"}</TableCell>
              <TableCell>{"Payment Method"}</TableCell>
              <TableCell>{"Price/XMR"}</TableCell>
              <TableCell>{"Limits"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((curr, ind) => (
              <TableRow key={ind} className={classes.styleTableRow}>
                <TableCell>
                  <div className={classes.alignItems}>
                    <Link className={classes.linkText} underline={"always"}>
                      {curr.seller}
                      <Tooltip
                        placement={"top"}
                        title={"Last seen 10 minutes ago"}
                        classes={{ tooltip: classes.toolTip }}
                      >
                        <div className={classes.statusSignal}></div>
                      </Tooltip>
                    </Link>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={classes.alignItems}>
                    <AccountBalanceIcon />
                    <Typography variant={"subtitle1"}>{curr.bank}</Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <Typography className={classes.greenText} variant={"h5"}>
                    {curr.price}
                  </Typography>
                </TableCell>
                <TableCell className={classes.alignLimits}>
                  <Typography
                    className={classes.limitText}
                    variant={"subtitle2"}
                  >
                    {curr.limits}
                  </Typography>
                  <Button className={classes.buy} variant={"contained"}>
                    {"BUY"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
