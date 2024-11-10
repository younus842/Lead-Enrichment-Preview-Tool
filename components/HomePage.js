import React from "react";
import { useState } from "react";
import "./homePage.css";
import { Fetch, fetchData } from "./fetch/Fetch";

const HomePage = () => {
  const [star, setStar] = useState("");
  const [textUrl, setTextUrl] = useState("");
  const [object, setObject] = useState({});
  const [valid, setValid] = useState("");

  const [spinner, setSpinner] = useState(false);

  const handleName = (e) => {
    if (e.target.value === null) {
      setStar("Required*");
    } else {
      setUserName(e.target.value);
      setStar("");
    }
  };

  const handleUrl = (e) => {
    if (e.target.value === null) {
      setTextUrl("Required*");
    } else {
      setUserUrl(e.target.value);
      setTextUrl("");
    }
  };

  const [userName, setUserName] = useState("");
  const [userUrl, setUserUrl] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const name2 = document.getElementById("name");
    setUserName(name2.value);

    if (name2.value !== "") {
      setStar("");
    } else {
      setStar("Required*");
    }

    const email = document.getElementById("email");
    setUserUrl(email.value);

    if (email.value !== "") {
      setTextUrl("");
    } else {
      setTextUrl("Required*");
    }

    if (name2.value !== "" && email.value !== "") {
      setSpinner(true);
      console.log(userName);
      fetchData(userName, userUrl, setObject, setValid, setSpinner);
    }
  };

  return (
    <div className="parent-container">
      <div className="filter">
        <div className="main-container shadow-lg">
          <div className="form-container">
            <form
              className="form-control sign-up shadow-sm form-class"
              id="sign-up"
              onSubmit={onSubmit}
            >
              <div className="input-elemets">
                <div className="input-container pb-3">
                  <label className="text-start text-primary" htmlFor="name">
                    Enter Name:
                  </label>

                  <input placeholder="Younus"
                    className="form-control"
                    type="name"
                    onChange={handleName}
                    id="name"
                  />
                  <p className="show-para">{star}</p>
                </div>
                <div className="input-container pb-4">
                  <label className="text-start text-primary" htmlFor="email">
                    Enter Email:
                  </label>

                  <input placeholder="xxxxxx@gmail.com"
                    className="form-control"
                    type="email"
                    onChange={handleUrl}
                    id="email"
                  />
                  <p className="show-para">{textUrl}</p>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button className="btn btn-primary details-button" type="submit">
                  check details
                </button>
              </div>
            </form>
          </div>
          <Fetch object={object} valid={valid} spinner={spinner} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
