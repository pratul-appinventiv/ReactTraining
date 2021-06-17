import React, { useState } from "react";
import EntryForm from "./components/FormModal";
import DeleteModal from "./components/DeleteModal";
import "./index.css";

const Assignment8 = () => {
  const [Data, setData] = useState([]);
  const [arrayIndex, setArrayIndex] = useState(0);
  const [isFormModalOpen, setFormModalOpen] = useState(false);
  const [formType, setFormType] = useState("");
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOnEdit = (data, ind) => {
    Data[ind] = data;
    setData(Data);
  };

  const handleOnDelete = (ind) => {
    let data = Data.filter((curr, index) => {
      return ind !== index;
    });
    setData(data);
  };

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h1>{"Student Details"}</h1>
        <button
          className={"addBtn"}
          onClick={() => {
            setFormModalOpen(true);
            setFormType("Entry");
          }}
        >
          {"Add an Entry"}
        </button>
      </div>

      <EntryForm
        index={arrayIndex}
        formType={formType}
        formModalState={isFormModalOpen}
        setFormModalState={() => {
          setFormModalOpen(false);
        }}
        data={Data}
        setData={(arr) => {
          setData(arr);
        }}
        handleOnEdit={handleOnEdit}
      />

      <input
        className={"searchBar"}
        type={"text"}
        id={"search"}
        name={"search"}
        placeholder={"Search item"}
      />
      <div className={"tableContainer"}>
        <table>
          <thead>
            <tr>
              <th>{"First Name"}</th>
              <th>{"Last Name"}</th>
              <th>{"Email Id"}</th>
              <th>{"Mobile Number"}</th>
              <th>{"Action"}</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((curr, ind) => {
              return (
                <tr key={ind}>
                  <td>{curr.fname}</td>
                  <td>{curr.lname}</td>
                  <td>{curr.email}</td>
                  <td>{curr.phone}</td>
                  <td className={"styleIcons"}>
                    <i
                      onClick={() => {
                        setFormModalOpen(true);
                        setFormType("Edit");
                        setArrayIndex(ind);
                      }}
                      className="fa fa-pencil-square-o"
                      aria-hidden="true"
                    ></i>
                    <i
                      onClick={() => {
                        setDeleteModalOpen(true);
                        setArrayIndex(ind);
                      }}
                      className="fa fa-trash"
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <DeleteModal
        index={arrayIndex}
        handleOnDelete={handleOnDelete}
        modalState={isDeleteModalOpen}
        setModalState={() => {
          setDeleteModalOpen(false);
        }}
      />
    </div>
  );
};

export default Assignment8;
