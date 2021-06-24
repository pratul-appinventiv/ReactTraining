import React from "react";
import Modal from "react-modal";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  styleDeleteModal: {
    width: "28%",
    margin: "100px auto",
    backgroundColor: "#c8c9cc",
    padding: "20px 40px",
    borderRadius: "15px",
  },
  styleBtnContainer: {
    width: "45%",
    margin: "29px auto",
    display: "flex",
    alignItems: " center",
    justifyContent: "space-between",
  },
});

function DeleteModal(props) {
  const classes = useStyles();
  const history = useHistory();
  const makeDeleteRequest = async () => {
    try {
      let data = JSON.parse(localStorage.getItem("Data"));
      const res = await axios.delete("https://reqres.in/api/users/2");
      if (res.status === 204) {
        data.splice(props.index, 1);
        localStorage.setItem("Data", JSON.stringify(data));
        alert("Entry is successfully deleted");
        history.push("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={props.isDeleteModalOpen}
      ariaHideApp={false}
      className={classes.styleDeleteModal}
    >
      <Typography variant={"h5"} align={"center"}>
        {"Are you sure you want to delete it"}
      </Typography>
      <Box className={classes.styleBtnContainer}>
        <Button
          variant={"contained"}
          color={"secondary"}
          size={"large"}
          onClick={makeDeleteRequest}
        >
          {"Yes"}
        </Button>
        <Button
          variant={"contained"}
          color={"primary"}
          size={"large"}
          onClick={() => props.setDeleteModalOpen()}
        >
          {"No"}
        </Button>
      </Box>
    </Modal>
  );
}

export default DeleteModal;
