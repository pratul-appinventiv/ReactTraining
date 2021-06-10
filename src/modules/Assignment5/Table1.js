import React from "react";
import { makeStyles,Button, Typography,Link,Paper,TableContainer,Table,TableHead,TableBody,TableRow,TableCell } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const useStyles = makeStyles({
  tableContainer:{
     width:"77%",
     marginLeft:"202px"
  },
  tableHeading: {
    fontSize: "29px",
    color: "#424242",
    margin: "20px 0 20px 207px",
  },
  alignItems:{
    display:"flex",
    alignItems:"center"
  },
  alignLimits:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
  },
  circleIcon:{
    color:"#81c784"
  },
  linkText:{
    fontSize:"17px"
  },

  greenText:{
    color:"#388538"
  },
  limitText:{
    fontSize:"15px"
  },
  buy:{
    backgroundColor:"#FFBA1F",
    width:"50px",
    color:"#fff",
    marginLeft:"20px"
  }
});

const Table1 = () => {
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
               <TableCell>
                 {"Seller"}
               </TableCell>
               <TableCell>
                 {"Payment Method"}
               </TableCell>
               <TableCell>
                 {"Price/XMR"}
               </TableCell>
               <TableCell>
                 {"Limits"}
               </TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             <TableRow>
               <TableCell>
                 <div className={classes.alignItems}>
                 <Link className={classes.linkText} underline={"always"}>{"appukuttan (305; 100%)"}</Link>
                 <FiberManualRecordIcon className={classes.circleIcon}/>
                 </div>
               </TableCell>
               <TableCell>
                 <div className={classes.alignItems}>
                   <AccountBalanceIcon/>
                   <Typography variant={"subtitle1"}>{"Other online payment"}</Typography>
                 </div>
               </TableCell>
               <TableCell>
                 <Typography className={classes.greenText} variant={"h5"}>{"22950.00 INR"}</Typography>
               </TableCell>
               <TableCell className={classes.alignLimits}>
                 <Typography className={classes.limitText} variant={"subtitle2"}>{"100.00 - 18622.76 INR"}</Typography>
                 <Button className={classes.buy} variant={"contained"}>{"BUY"}</Button>
               </TableCell>
             </TableRow>
             <TableRow>
               <TableCell>
                 <div className={classes.alignItems}>
                 <Link className={classes.linkText} underline={"always"}>{"appukuttan (305; 100%)"}</Link>
                 <FiberManualRecordIcon className={classes.circleIcon}/>
                 </div>
               </TableCell>
               <TableCell>
                 <div className={classes.alignItems}>
                   <AccountBalanceIcon/>
                   <Typography variant={"subtitle1"}>{"IMPS Bank Transfer India"}</Typography>
                 </div>
               </TableCell>
               <TableCell>
                 <Typography className={classes.greenText} variant={"h5"}>{"22950.00 INR"}</Typography>
               </TableCell>
               <TableCell className={classes.alignLimits}>
                 <Typography className={classes.limitText} variant={"subtitle2"}>{"Up to 18622.76 INR"}</Typography>
                 <Button className={classes.buy} variant={"contained"}>{"BUY"}</Button>
               </TableCell>
             </TableRow>
             <TableRow>
               <TableCell>
                 <div className={classes.alignItems}>
                 <Link className={classes.linkText} underline={"always"}>{"jdboi (3134*; 100%)"}</Link>
                 <FiberManualRecordIcon className={classes.circleIcon}/>
                 </div>
               </TableCell>
               <TableCell>
                 <div className={classes.alignItems}>
                   <AccountBalanceIcon/>
                   <Typography variant={"subtitle1"}>{"IMPS Bank Transfer India"}</Typography>
                 </div>
               </TableCell>
               <TableCell>
                 <Typography className={classes.greenText} variant={"h5"}>{"22950.00 INR"}</Typography>
               </TableCell>
               <TableCell  className={classes.alignLimits}>
                 <Typography className={classes.limitText} variant={"subtitle2"}>{"100.00 - 18622.76 INR"}</Typography>
                 <Button className={classes.buy} variant={"contained"}>{"BUY"}</Button>
               </TableCell>
             </TableRow>
              <TableRow>
               <TableCell>
                 <div className={classes.alignItems}>
                 <Link className={classes.linkText} underline={"always"}>{"jdboi (3134*; 100%)"}</Link>
                 <FiberManualRecordIcon className={classes.circleIcon}/>
                 </div>
               </TableCell>
               <TableCell>
                 <div className={classes.alignItems}>
                   <AccountBalanceIcon/>
                   <Typography variant={"subtitle1"}>{"IMPS Bank Transfer India"}</Typography>
                 </div>
               </TableCell>
               <TableCell>
                 <Typography className={classes.greenText} variant={"h5"}>{"22950.00 INR"}</Typography>
               </TableCell>
               <TableCell  className={classes.alignLimits}>
                 <Typography className={classes.limitText} variant={"subtitle2"}>{"100.00 - 18622.76 INR"}</Typography>
                 <Button className={classes.buy} variant={"contained"}>{"BUY"}</Button>
               </TableCell>
             </TableRow>
           </TableBody>
         
         </Table>

      </TableContainer>
    </div>
  );
};

export default Table1;
