import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Categories from "../Categories";

export default function Home({ name, setName, fetchQues }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQues(category, difficulty);
      navigate("/Quiz");
    }
    console.log(category);
    console.log(difficulty);
    console.log(name);
  };

  return (
    <>
      <Wrap>
        <div>
          <h5>Welcome to the Quiz</h5>
          <Setting>
            {error && <Error>Please Fill all the fields</Error>}

            <input
              type="input"
              placeholder="Name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <select
              lable="select-difficulty"
              name=""
              id=""
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map((cat) => (
                <option key={cat.category} value={cat.value}>
                  {cat.category}
                </option>
              ))}
            </select>

            <select
              name=""
              id=""
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <option>Difficulty Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <button color="primary" onClick={handleSubmit}>
              Start Quiz
            </button>
          </Setting>
        </div>
        <span>
          <img
            src="https://i.pinimg.com/736x/ec/c7/e9/ecc7e9cb6487476c3d42ff7b204a170d.jpg"
            alt=""
          />
        </span>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  font-size: 30px;
  color: white;
  margin: 5px;
  display: flex;
  justify-content: space-around;
  img {
    border-radius: 20px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    div {
      align-items: center;
    }
    span {
      img {
        place-items: center;
        width: 70%;
      }
    }
  }
`;

const Setting = styled.div`
  display: flex;
  flex-direction: column;
  input,
  select {
    margin: 2px;
    font-family: inherit;
    width: 350px;
    border: 0;
    border-radius: 5px;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1rem;
    color: $white;
    padding: 7px 0;
    transition: border-color 0.2s;

    &::placeholder {
      color: grey;
    }
  }

  button {
    margin: 5px;
    padding: 15px 40px;
    background-color: orangered;
    border-radius: 5px;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
const Error = styled.div`
  color: red;
  outline: none;
  font-weight: bold;
  font-size: 1.3rem;
`;
