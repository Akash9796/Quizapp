import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ({ score }) {
  const navigate = useNavigate();
  return (
    <Wrap>
      <span>Final Scores : {score}</span>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </Wrap>
  );
}

const Wrap = styled.div`
  place-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 5rem;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    margin: 5px;
    border: none;
    border-radius: 10px;
    min-width: 20%;
    padding: 5px;
    font-size: 1.5rem;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    transform: translateY(-10%);
    font-size: 2rem;
    place-items: center;
  }
`;
