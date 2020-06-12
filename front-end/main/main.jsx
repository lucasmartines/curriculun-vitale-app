/** css */
  import "./../node_modules/bootstrap/dist/css/bootstrap.css";
  import "./../node_modules/font-awesome/css/font-awesome.min.css";
  import "./main.css";
/** import react and react-redux */
  import React, { useState, useEffect } from "react";
  import { useSelector } from "react-redux";

/** import dependencies */
  import popper from "popper.js";
  import jQuery from "jquery";
  import bootstrap from "bootstrap";
  window.$ = window.jQuery = jQuery;

/** import components */
  import Header from "./components/Header/Header.jsx";
  import Ocupation from "./components/Ocupation/Ocupation.jsx";
  import Container from "./utils-components/Container.jsx";
  import PersonalData from "./components/PersonalData/PersonalData.jsx";
/** import services */
  import generateId from "./generateId";
  import { postUser, getUserData } from "./services/user";
  import ExpAcademic from "./components/ExpAcademic/ExpAcademic.jsx";
  import BasicCard from "./utils-components/BasicCard.jsx";

/**
 * Is the main of app, it load the user id and pass to all app
 */
export default (props) => {
  let [user, setUser] = useState({ _id: null });

  /** JUST CLEAN THE ID IN LOCAL STORAGE */
    const clearId = (_) => {
      localStorage.removeItem("_id");
      setUser({ _id: null });
    };

  /** IT IS JUST LIKE A COMPONENT DID MOUNT because the observation of user._id */
    useEffect(
      (_) => {
        /** just generate id in local storage when user dont have one */
          generateId(setUser, clearId);
          console.log('user state',user)
      },
      [user._id]
    );

  return (
    <>
      <Header user={user} />
      <Ocupation user={user} />
      <Container>
        <div className="col-12 col-sm-6 col-md-8">
          <ExpAcademic user={user} />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <PersonalData user={user} key={JSON.stringify(user)} />
        </div>
      </Container>
    </>
  );
};
