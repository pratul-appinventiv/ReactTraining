import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { TextField, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  verticalSpacing: {
    margin: "20px 0",
  },
  styleLoginButton: {
    height: "56px",
  },
  styleEditModal: {
    width: "28%",
    margin: "100px auto",
    backgroundColor: "#c8c9cc",
    padding: "20px 40px",
    borderRadius: "15px",
  },
});

function ModalForm(props) {
  const Data = JSON.parse(localStorage.getItem("Data"));
  const classes = useStyles();
  const [id, setId] = useState(13);
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (values.fname.trim() === "") alert("Please enter the First Name");
    else if (values.lname.trim() === "") alert("Please enter the Last Name");
    else if (values.email.trim() === "")
      alert("Please enter the Email Address");
    else if (!values.email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      alert("Invalid Email Address");
    else {
      makePostRequest();
    }
  };

  const makePostRequest = async () => {
    try {
      const res = await axios.post("https://reqres.in/api/users", {
        payLoad: {
          id: id,
          avatar: "https://reqres.in/img/faces/4-image.jpg",
          first_name: values.fname,
          last_name: values.lname,
          email: values.email,
        },
      });
      const { payLoad } = res.data;
      let storedData = JSON.parse(localStorage.getItem("Data"));
      storedData.push(payLoad);
      localStorage.setItem("Data", JSON.stringify(storedData));
      props.setUserData([...props.userData, payLoad]);
      props.setModalOpen();
      setValues({ fname: "", lname: "", email: "" });
      setId(id + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (values.fname.trim() === "") alert("Please enter the First Name");
    else if (values.lname.trim() === "") alert("Please enter the Last Name");
    else if (values.email.trim() === "")
      alert("Please enter the Email Address");
    else if (!values.email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      alert("Invalid Email Address");
    else {
      makePutRequest();
    }
  };

  const makePutRequest = async () => {
    try {
      let savedData = JSON.parse(localStorage.getItem("Data"));
      const res = await axios.put("https://reqres.in/api/users/2", {
        payLoad: {
          ...savedData[props.index],
          first_name: values.fname,
          last_name: values.lname,
          email: values.email,
        },
      });
      const { payLoad } = res.data;
      savedData.splice(props.index, 1, payLoad);
      localStorage.setItem("Data", JSON.stringify(savedData));
      props.setModalOpen();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.heading === "Edit Form") {
      setValues({
        fname: Data[props.index].first_name,
        lname: Data[props.index].last_name,
        email: Data[props.index].email,
      });
    } else {
      setValues({ fname: "", lname: "", email: "" });
    }
  }, []);
  return (
    <Modal
      className={classes.styleEditModal}
      isOpen={props.isModalOpen}
      ariaHideApp={false}
      onRequestClose={() => props.setModalOpen()}
    >
      <form>
        <Typography variant={"h2"} align={"center"}>
          {props.heading}
        </Typography>
        <TextField
          className={classes.verticalSpacing}
          value={values.fname}
          label={"First Name"}
          name={"fname"}
          variant={"outlined"}
          fullWidth
          onChange={handleChange}
        />

        <TextField
          className={classes.verticalSpacing}
          value={values.lname}
          label={"Last Name"}
          name={"lname"}
          variant={"outlined"}
          fullWidth
          onChange={handleChange}
        />
        <TextField
          className={classes.verticalSpacing}
          value={values.email}
          label={"Email"}
          name={"email"}
          variant={"outlined"}
          fullWidth
          onChange={handleChange}
        />
        {props.heading === "Edit Form" ? (
          <Button
            type={"submit"}
            className={`${classes.verticalSpacing} ${classes.styleLoginButton}`}
            color={"primary"}
            variant={"contained"}
            size={"large"}
            fullWidth
            onClick={handleEdit}
          >
            {"Edit"}
          </Button>
        ) : (
          <Button
            type={"submit"}
            className={`${classes.verticalSpacing} ${classes.styleLoginButton}`}
            color={"primary"}
            variant={"contained"}
            size={"large"}
            fullWidth
            onClick={handleAdd}
          >
            {"Add"}
          </Button>
        )}
      </form>
    </Modal>
  );
}

export default ModalForm;
