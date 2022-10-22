import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Question({
  currQues,
  setCurrQues,
  ques,
  options,
  correct,
  score,
  setScore,
}) {
  const [selected, setSelected] = useState();

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      console.log("Sel1");
      return "select";
    } else if (selected === i || selected === !correct) {
      console.log("Sel2");
      return "wrong";
    } else if (i === correct) {
      console.log("Sel3");
      return "select";
    }
    console.log(selected);
    console.log(correct);
    console.log(i);
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setSelected();
    setScore(0);
    navigate("/");
  };
  const handleNext = () => {
    if (currQues < 9) {
      setCurrQues(currQues + 1);
    } else {
      navigate("/result");
    }
    setSelected();
  };

  return (
    <Wrap>
      <h1>Question = {currQues + 1}</h1>
      <div>
        <h2>{ques[currQues].question}</h2>
      </div>
      <Option>
        {options &&
          options.map((i) => (
            <button
              onClick={() => handleCheck(i)}
              className={`singleOption ${handleCheck} ${
                selected && handleSelect(i)
              }`}
              key={i}
              disabled={selected}
            >
              {i}
            </button>
          ))}
      </Option>
      <Bar>
        <button onClick={handleQuit}>Quit</button>
        <button onClick={handleNext}>Next</button>
      </Bar>
    </Wrap>
  );
}

const Wrap = styled.div`
  place-items: center;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const Option = styled.div`
  width: 100%;
  margin: 0 10px;
  place-items: center;
  display: grid;
  grid-template-columns: auto auto;
  button {
    cursor: pointer;
    margin: 5px;
    border: none;
    border-radius: 10px;
    min-width: 50%;
    padding: 5px;
    font-size: 20px;
    text-align: center;
  }

  .select {
    background-color: green;
  }
  .wrong {
    background-color: red;
  }
  .wrong {
    background-color: red;
  }
`;
const Bar = styled.div`
  width: 100%;
  font-size: 1.5em;
  margin: 0 20px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 20px;

  button {
    cursor: pointer;
    margin: 5px;
    border: none;
    border-radius: 10px;
    min-width: 10%;
    padding: 5px;
    font-size: 1.5rem;
    text-align: center;
  }
`;
