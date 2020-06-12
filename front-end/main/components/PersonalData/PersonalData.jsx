/** import basic stuff */
import React, { useState, useEffect } from "react";
import BasicCard from "../../utils-components/BasicCard.jsx";
import If from '../../utils-components/If.jsx'
import { Form, Field } from "react-final-form";
import {
  telephone,
  SubmitButton,
  genericField,
  SexField,
} from "../../utils/input/InputContainer.jsx";
import { postUser, getUserData } from "../../services/user.js";
import { formatTelephone, formatCel } from "../../utils/input/formatter.js";

/** JUST PASS THIS USER TO GET ID */
const PersonalData = ({ user }) => {
  /** this is the user that i need do get fron database to update */
  let [_user, setUser] = useState({});
  let [loaded,setLoaded] = useState(false)
  useEffect(() => {
    /** component did mount like it will get user just once */
    /** get user data  */
    if (user._id) {
      getUserData(
        user._id,
        (success) => {
          console.log("i can get user from personal Data:", success);
          setUser(success);
          setLoaded(true)
        },
        (err) => {
          console.warn(err);
        }
      );
    } else {
      console.log("i canot get user data it is null ", user._id);
    }
    console.log("try to get USER 🚹!");
  }, []);

  /** submit user data to server */
  let submitData = (data) => {
    console.log("THE DATA FRON PERSONAL DATA", {
      _id: user._id,
      ...data,
    });
    postUser(
      {
        _id: user._id,
        ...data,
      },
      (success) => {
        /** get updated user data and set to _user  */
        alert("updated user personal data");
        console.log("SUCCESS post user fron personal data", success);
        setUser(success);
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  return (
    <>
    
    <If show={loaded}>
      <BasicCard span="personal" title="Data">
        <Form
          onSubmit={submitData}
          initialValues={_user}
          validate={notEmptyValidator}
          render={({ handleSubmit, valid, values }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="tel"
                span="Your Telephone"
                render={genericField}
                type="text"
                parse={formatTelephone}
              />
              <Field
                name="cel"
                parse={formatCel}
                span="Your Celular"
                render={genericField}
                type="text"
              />
              <Field
                name="civilState"
                span="Civil State"
                render={genericField}
                placeholder="Your Civil State"
              />
              <Field
                name="email"
                render={genericField}
                type="email"
                span="Your Email"
                placeholder="your-email@email.com"
              />
              <SexField values={values}/>

              <SubmitButton disabled={!valid}>Update</SubmitButton>
            </form>

          )}
        />
      </BasicCard>
    </If>
    <If show={!loaded}>
        Loading
    </If>
    </>
  );
};

const notEmptyValidator = (values) => {
  const errors = {};
  if (!values.tel) {
    errors.tel = "Atention: Must NOT Be Empty";
  }
  if (!values.email) {
    errors.email = "Atention: Must NOT Be Empty";
  }

  
  return errors;
};
export default PersonalData;
