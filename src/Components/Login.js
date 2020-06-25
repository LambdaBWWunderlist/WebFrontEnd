// {
//     id: INTEGER; // assigned by database, auto increments
//     username: STRING; // not nullable, unique - 128 chars max
//     password: STRING; // not nullable - 256 chars max
//     email: STRING; // not nullable, unique - 128 chars max
//     created_at: TIMESTAMP; // defaults to now, server will handle this
//   }

import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as Yup from "yup";
import loginSchema from "./Validation/loginSchema";
import { Link } from "react-router-dom";
import styled from "styled-components";

//styled components
const CardCenter = styled.div`
  margin: 50px auto;
  max-width: 90%;
  border: 1px solid #f17300;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10px;
`;

const H1 = styled.h1`
  color: #054a91;
`;

//Initial States
const initialFormValues = {
  username: "",
  email: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialDisabled = true;

export default function Login() {
  //States
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    Yup.reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendAccount = (sendingAccount) => {
    Axios.post(
      "https://wunderlist-node.herokuapp.com/api/login",
      sendingAccount
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const accountSend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };

    sendAccount(accountSend);
  };

  //Toggle button disable
  useEffect(() => {
    loginSchema.isValid(formValues).then(
      (valid) => {
        setDisabled(!valid);
      },
      [formValues]
    );
  });

  return (
    <CardCenter className="form container" onSubmit={onSubmit}>
      <H1>Login</H1>
      {/* Form Inputs */}
      <div className="form-group inputs">
        <input
          value={formValues.username}
          onChange={onInputChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <br></br>

        <input
          type="text"
          name="email"
          onChange={onInputChange}
          value={formValues.email}
          placeholder="Email"
        />
        <br></br>

        <input
          value={formValues.password}
          onChange={onInputChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <br></br>

      {/* Submit */}
      <div className="form-group submit">
        <div className="errors">
          <div>{formErrors.username}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
        </div>
        <Link to="/list">
          <button id="submitBtn" disabled={disabled}>
            submit
          </button>
        </Link>
      </div>
    </CardCenter>
  );
}
