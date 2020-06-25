import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Home = () => (
  <CardCenter>
    <H1>Welcome to Wunderlist!</H1>
    <p>
      New here!? Get started with the Sign Up page, but we hope you can tell us
      how you learned about our app first!
    </p>
    <form>
      <label>
        Where did you hear about us? <br></br>
        <select>
          <option>Our Marketing Page</option>
          <option>Lambda</option>
          <option>Friend</option>
          <option>Ad</option>
          <option>Other</option>
        </select>
      </label>
      <Link to="/Register">
        <button type="submit">submit</button>
      </Link>
    </form>
  </CardCenter>
);
export default Home;
