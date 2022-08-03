import styled from "styled-components";
import React from "react";

const screeningQA = ({ data, handleCLick }) => {
  return (
    <QA>
      <h3 className="screening-ques">{data.ques}</h3>
      <div className="screening-choices">
        <button
          className="screening-ans"
          onClick={() => {
            handleCLick(data.id, "YES");
          }}
        >
          YES
        </button>
        <button
          className="screening-ans"
          onClick={() => {
            handleCLick(data.id, data.ques, "YES");
          }}
        >
          NO
        </button>
      </div>
    </QA>
  );
};

const QA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f0f0f0;
  margin: 15px 0px;
  justify-content: center;
  padding: 0 10px 20px 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #e3e3e3;
  border: 1px solid lightgrey;

  .screening-choices {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .screening-ans {
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 20px;
  }
`;

export default screeningQA;
