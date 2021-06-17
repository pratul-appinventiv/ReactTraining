import React from "react";
import Modal from "react-modal";

const DeleteModal = (props) => {
  const deleteItem = () => {
    props.setModalState();
    props.handleOnDelete(props.index);
  };

  const cancelDelete = () => {
    props.setModalState();
  };

  return (
    <Modal className={"deleteModal"} isOpen={props.modalState}>
      <div className={"deleteModalContainer"}>
        <h2>{"Are you sure you want to delete the entry"}</h2>
        <div className={"btnContainer"}>
          <button className={"yesBtn"} onClick={deleteItem}>
            {"Yes"}
          </button>
          <button className={"noBtn"} onClick={cancelDelete}>
            {"No"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
