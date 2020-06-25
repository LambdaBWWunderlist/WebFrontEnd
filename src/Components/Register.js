import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as Yup from "yup";
import registerSchema from "./Validation/registerSchema";
import { v4 as uuid } from "uuid";
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
`;

const H1 = styled.h1`
  color: #054a91;
`;

const Register = () => {
  const initialFormValues = {
    username: "",
    email: "",
    password: "",
  };

  const initialFormErrors = {
    username: "",
    email: "",
    password: "",
    terms: "",
  };

  const initialDisabled = true;

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  console.log(formValues);

  useEffect(() => {
    registerSchema.isValid(formValues).then(
      (valid) => {
        setDisabled(!valid);
      },
      [formValues]
    );
  });

  const postNewUser = (newUser) => {
    Axios.post("https://wunderlist-node.herokuapp.com/api/register", newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    Yup.reach(registerSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    Yup.reach(registerSchema, name)
      .validate(checked)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(onSubmit);

    const newUser = {
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms,
    };

    postNewUser(newUser);
  };

  return (
    <form onSubmit={onSubmit} id="submit" className="formContainer">
      <CardCenter>
        <H1>Create an account!</H1>
        <div>
          <p>{formErrors.name}</p>
          <p>{formErrors.password}</p>
        </div>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={onInputChange}
          placeholder="username"
        />
        <br></br>

        <input
          type="text"
          name="email"
          onChange={onInputChange}
          value={formValues.email}
          placeholder="email"
        />
        <br></br>

        <input
          type="password"
          name="password"
          value={formValues.value}
          onChange={onInputChange}
          placeholder="password"
        />
        <br></br>

        <label>
          <input
            id="terms"
            name="terms"
            type="checkbox"
            onChange={onCheckBoxChange}
            checked={formValues.checked}
            value={formValues.terms}
          />
          Terms of Service
        </label>
        <br></br>
        <Link to="/login">
          <button type="submit" disabled={disabled}>
            submit
          </button>
        </Link>

        <br></br>
      </CardCenter>
    </form>
  );
};

export default Register;
