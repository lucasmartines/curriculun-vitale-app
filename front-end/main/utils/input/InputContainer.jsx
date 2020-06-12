import React from "react";
import { Field } from "react-final-form";

/** for most cases it is possible to use this */
export const genericField = ({ input, meta, span, placeholder, type }) => (
  <div>
    <label> {span}</label>
    <input
      type={type || "text"}
      {...input}
      placeholder={placeholder || ""}
      className={`form-control ${meta.error?'is-invalid':''}`}
    />
    {meta.touched && meta.error && <span className="text-danger">{meta.error}</span>}
  </div>
);

/**
 * Just for submiting it have a full width button with
 * margin top
 * @param {*} name: it can receive a name for span
 */
export const SubmitButton = (props) => (
  <div className="w-100">
    <button
      className="btn btn-secondary btn-submit mt-2 w-100 "
      component="input"
      type="submit"
      disabled={props.disabled}
    >
      <i className="fa fa-edit"></i>
      {props.children}
    </button>
  </div>
);

/**
 * 
 * @param {*} values: is the param of sex from server 
 */
export const SexField = ({values}) => (
<Field
  name="sex"
  type="input"
  render={({ input }) => (
    <div>
      <label htmlFor="sex"> Seu Sexo </label>
      <br />
      <input
        {...input}
        type="radio"
        value="M"
        checked={values.sex == "M" ? true : false}
      />
      🚹Man
      <input
        {...input}
        type="radio"
        value="W"
        checked={values.sex == "W" ? true : false}
      />
      🚺Woman
    </div>
  )}
/>
)
 