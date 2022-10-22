import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Question from "./Question";

export default function Quiz({ name, ques, score, setScore }) {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(ques);
    setOptions(
      ques &&
        handleShuffle([
          ques[currQues]?.correct_answer,
          ...ques[currQues]?.incorrect_answers,
        ])
    );
  }, [ques, currQues]);
  console.log(options);
  //   console.log(ques);

  const handleShuffle = (opt) => {
    return opt.sort(() => Math.random() - 0.5);
  };
  return (
    <div>
      {ques ? (
        <>
          <Wrap>
            <Head>
              <span>Welcome {name}</span>
            </Head>
            <Body>
              <Bar>
                <div>Science</div>
                <div>Score:{score}</div>
              </Bar>
              <Question
                currQues={currQues}
                setCurrQues={setCurrQues}
                ques={ques}
                options={options}
                correct={ques[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
              />
            </Body>
          </Wrap>
        </>
      ) : (
        <Load>Loading...</Load>
      )}
    </div>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  row-gap: 2rem;
  @media screen and (max-width: 600px) {
  }
`;

const Head = styled.div`
  font-size: 2em;
  span {
    color: white;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.3rem;
  }
`;
const Body = styled.div`
  /* border: 2px solid red; */
  /* display: flex; */
  width: 100%;
  min-height: 100vh;
`;

const Bar = styled.div`
place-items: center;
  font-size: 1.5em;
  /* border: 2px solid red; */
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
`;
const Load = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 5rem;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
