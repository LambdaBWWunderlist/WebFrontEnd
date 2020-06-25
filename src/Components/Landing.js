import React, { useState, useEffect } from "react";
import axios from "axios";
import Friend from "./Friends";
import styled from "styled-components";

//styling
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

export default function Landing() {
  const [apiData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((res) => {
        setAPIData(res.data.data);
        console.log(res);
        console.log(res.data.data);
        console.log(apiData);
      })
      .catch((err) => {
        console.log(`There's an error of ${err}`);
      });
  }, []);

  return (
    <CardCenter>
      <H1>Users online</H1>
      {apiData.map((user) => {
        return <Friend info={user} />;
      })}
    </CardCenter>
  );
}
