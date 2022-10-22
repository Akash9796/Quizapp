import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    position: relative;
  }
  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
  }




`;
