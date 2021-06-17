import React, { useState } from "react";
import Modal from "react-modal";

const EntryForm = (props) => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const [Errors, setErrors] = useState({
    fnameError: "",
    lnameError: "",
    emailError: "",
    phoneError: "",
  });

  let isFormValid = true;

  let errors = {
    fnameError: "",
    lnameError: "",
    emailError: "",
    phoneError: "",
  };

  const handleFname = (e) => setValues({ ...values, fname: e.target.value });
  const handleLname = (e) => setValues({ ...values, lname: e.target.value });
  const handleEmail = (e) => setValues({ ...values, email: e.target.value });
  const handlePhone = (e) => setValues({ ...values, phone: e.target.value });

  const handleSubmit = () => {
    if (
      values.fname === "" &&
      values.lname === "" &&
      values.email === "" &&
      values.phone === ""
    ) {
      errors.fnameError = "Please enter the first name";
      errors.lnameError = "Please enter the last name";
      errors.emailError = "Please enter the email";
      errors.phoneError = "Please enter the mobile number";
      isFormValid = false;
    }
    if (values.fname.trim() === "") {
      errors.fnameError = "Please enter the first name";
      isFormValid = false;
    }
    if (values.lname.trim() === "") {
      errors.lnameError = "Please enter the last name";
      isFormValid = false;
    }
    if (values.email.trim() === "") {
      errors.emailError = "Please enter the email";
      isFormValid = false;
    }
    if (!values.email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      errors.emailError = "Please enter a valid email address";
      isFormValid = false;
    }
    if (values.phone === "") {
      errors.phoneError = "Please enter the mobile number";
      isFormValid = false;
    }
    if (values.phone.length !== 10) {
      errors.phoneError = "Please enter 10 digit mobile number";
      isFormValid = false;
    }
    if (isFormValid) {
      let customData = props.data;
      customData.unshift({
        fname: values.fname,
        lname: values.lname,
        email: values.email,
        phone: values.phone,
      });
      props.setData([...props.data], customData);
      props.setFormModalState();
    }

    setErrors({
      ...Errors,
      fnameError: errors.fnameError,
      lnameError: errors.lnameError,
      emailError: errors.emailError,
      phoneError: errors.phoneError,
    });

    setValues({ ...values, fname: "", lname: "", email: "", phone: "" });
  };

  const handleEdit = () => {
    if (
      values.fname === "" &&
      values.lname === "" &&
      values.email === "" &&
      values.phone === ""
    ) {
      errors.fnameError = "Please enter the first name";
      errors.lnameError = "Please enter the last name";
      errors.emailError = "Please enter the email";
      errors.phoneError = "Please enter the mobile number";
      isFormValid = false;
    }
    if (values.fname.trim() === "") {
      errors.fnameError = "Please enter the first name";
      isFormValid = false;
    }
    if (values.lname.trim() === "") {
      errors.lnameError = "Please enter the last name";
      isFormValid = false;
    }
    if (values.email.trim() === "") {
      errors.emailError = "Please enter the email";
      isFormValid = false;
    }
    if (!values.email.trim().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      errors.emailError = "Please enter a valid email address";
      isFormValid = false;
    }
    if (values.phone === "") {
      errors.phoneError = "Please enter the mobile number";
      isFormValid = false;
    }
    if (values.phone.length !== 10) {
      errors.phoneError = "Please enter 10 digit mobile number";
      isFormValid = false;
    }
    if (isFormValid) {
      props.handleOnEdit(values, props.index);
      props.setFormModalState();
    }

    setErrors({
      ...Errors,
      fnameError: errors.fnameError,
      lnameError: errors.lnameError,
      emailError: errors.emailError,
      phoneError: errors.phoneError,
    });
  };

  const handleCancel = () => {
    setValues({ ...values, fname: "", lname: "", email: "", phone: "" });

    setErrors({
      ...Errors,
      fnameError: "",
      lnameError: "",
      emailError: "",
      phoneError: "",
    });

    props.setFormModalState();
  };

  return (
    <Modal
      className={"formModal"}
      isOpen={props.formModalState}
      onRequestClose={() => props.setFormModalState()}
    >
      <div className={"formContainer"}>
        <h2>{`${props.formType} Form`}</h2>
        <form>
          <label htmlFor={"fname"}>{"First Name *"}</label>
          {props.formType === "Entry" && (
            <input
              type={"text"}
              id={"fname"}
              name={"fname"}
              placeholder={"Enter first name"}
              onChange={handleFname}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"text"}
              id={"fname"}
              name={"fname"}
              placeholder={props.data[props.index].fname}
              onChange={handleFname}
            />
          )}
          <div className={"error"}>
            {Errors.fnameError !== "" ? Errors.fnameError : ""}
          </div>
          <label htmlFor={"lname"}>{"Last Name *"}</label>
          {props.formType === "Entry" && (
            <input
              type={"text"}
              id={"lname"}
              name={"lname"}
              placeholder={"Enter last name"}
              onChange={handleLname}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"text"}
              id={"lname"}
              name={"lname"}
              placeholder={props.data[props.index].lname}
              onChange={handleLname}
            />
          )}
          <div className={"error"}>
            {Errors.lnameError !== "" ? Errors.lnameError : ""}
          </div>
          <label htmlFor={"email"}>{"Email *"}</label>
          {props.formType === "Entry" && (
            <input
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={"Enter email id"}
              onChange={handleEmail}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"email"}
              id={"email"}
              name={"email"}
              placeholder={props.data[props.index].email}
              onChange={handleEmail}
            />
          )}
          <div className={"error"}>
            {Errors.emailError !== "" ? Errors.emailError : ""}
          </div>
          <label htmlFor={"number"}>{"Mobile Number *"}</label>
          {props.formType === "Entry" && (
            <input
              type={"number"}
              id={"phone"}
              name={"phone"}
              placeholder={"Enter mobile number"}
              onChange={handlePhone}
            />
          )}
          {props.formType === "Edit" && (
            <input
              type={"number"}
              id={"phone"}
              name={"phone"}
              placeholder={props.data[props.index].phone}
              onChange={handlePhone}
            />
          )}
          <div className={"error"}>
            {Errors.phoneError !== "" ? Errors.phoneError : ""}
          </div>
          {props.formType === "Entry" && (
            <button
              type={"button"}
              onClick={handleSubmit}
              className={"addBtn addBtnMargin"}
            >
              {"Add Entry"}
            </button>
          )}
          {props.formType === "Edit" && (
            <button
              type={"button"}
              onClick={handleEdit}
              className={"addBtn addBtnMargin"}
            >
              {"Edit"}
            </button>
          )}
          <button
            type={"button"}
            onClick={handleCancel}
            className={"cancelBtn addBtnMargin"}
          >
            {"Cancel"}
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default EntryForm;
