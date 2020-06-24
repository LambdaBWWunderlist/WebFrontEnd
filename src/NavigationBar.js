import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid #f17300;
  border-radius: 5px;
`;

const H3 = styled.h3`
  font-size: 50px;
  color: #054a91;
`;

const ButtonStyle = styled.button`
  text-decoration: none;
  background-color: #dbe4ee;
  margin-left: 20px;
  border: 1px solid #3e7cb1;
  padding: 4px 8px;
  border-radius: 5px;
`;

const NavigationBar = (props) => (
  <NavBarStyle>
    <H3>Wunderlist</H3>
    <div>
      <Link to="/Home">
        <ButtonStyle>To Do List</ButtonStyle>
      </Link>

      <Link to="/Register">
        <ButtonStyle>Sign Up!</ButtonStyle>
      </Link>

      <Link to="/Login">
        <ButtonStyle>Login</ButtonStyle>
      </Link>
    </div>
  </NavBarStyle>
);

export default NavigationBar;
