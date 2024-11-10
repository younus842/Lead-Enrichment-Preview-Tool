import React from "react";
import { useState } from "react";
import styles from "./fetch.css";
import Spinner from "react-bootstrap/Spinner";

function BasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

const getData = (array, userName, userUrl, setObject, setValid, setSpinner) => {
  let bool = true;
  for (let item of array) {
    const lowerName = item.name.toLowerCase()
    let lowerUserName = userName.toLowerCase().split(" ")
    const arrayName = lowerName.split(" ")

    if ((lowerName === lowerUserName || arrayName.includes(lowerUserName[0])) && item.email === userUrl) {
      console.log("true");
      bool = false;
      setObject(item);
      setValid('false');
      setSpinner(false);
      return 
    }
  }
  if (bool) {
    setValid('true');
    setSpinner(false);
    return
  }
};

export const fetchData = (
  userName,
  userUrl,
  setObject,
  setValid,
  setSpinner
) => {
  const options = {
    method: "GET",
  };

  const URL = "/api/enrich";

  const mainData = async () => {
    const object = await fetch(URL);
    const jsonData = await object.json();
    const dataArray = jsonData;
    console.log(dataArray)
    getData(dataArray, userName, userUrl, setObject, setValid, setSpinner);
  };

  mainData();
};

export const Fetch = (props) => {
  const { object,valid,spinner } = props;
  return (
    <div>
      {spinner ? <div className="mt-5 d-flex justify-content-center">
        <BasicExample/>
      </div> : ""}
      {valid === 'true' ? <h1 className={spinner ? "hide-when-spinner-is-loading" : "mt-5 validation"}>Invalid Input<span className="text-danger">!</span></h1> : ""}
      {valid === 'true' || valid === "" ? (
        ""
      ) : (
        <div className={spinner ? "hide-when-spinner-is-loading" : "table-container"}>
          <div class="row-1" id="row">
            <div class="column column-1">
              <div className="">
                {object.gender === "male" ? (
                  <img
                    src="https://media.istockphoto.com/id/587805156/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=gkvLDCgsHH-8HeQe7JsjhlOY6vRBJk_sKW9lyaLgmLo="
                    alt="image"
                    className="image shadow-lg"
                  />
                ) : (
                  <img
                    src="https://media.istockphoto.com/id/1154015915/vector/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=Jgn0SlbXlGLbBXOdFC-AE2zvakap2J6WTKA1ul5nL6g="
                    alt="image"
                    className="image shadow-lg"
                  />
                )}
              </div>
            </div>
            <div class="column column-2">
              <h2 className="mb-4">{object.name}</h2>
              <div className="details-container">
                <p>
                  <span className="span">Id </span>: {object.id}
                </p>

                <p className="email">
                  <span className="span">Email</span>: {object.email}
                </p>

                <p>
                  <span className="span">Gender</span>: {object.gender}
                </p>

                <p>
                  <span className="span">Status</span>: {object.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
