import React, { useState } from "react";
import styled from "styled-components";
import data from "./__data";
import ScreeningQA from "./screeningQA";

const DonorScreening = () => {
  const [screeningData, setScreeningData]= useState(data.screeningData)

  const handleCLick = (id, ans, ques)=>{
    setScreeningData(((screeningData).filter(data => data.id==id)).ans=ans
    );
  }
  console.log(screeningData)

  return (
    <Screening>
      {screeningData.map((data) => {
        return <ScreeningQA data={data} handleCLick={handleCLick} />;
      })}
    </Screening>
  );
};

const Screening = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  max-width: 70vw;
  margin: 50px auto;
  overflow: hidden;
  padding: 10px 30px;
  transition-duration: 0.4s;
  background-color: #fafafa;
  box-shadow: 10px 20px 20px #e3e3e3;

  @media only screen and (max-width: 600px) {
    & {
      min-width: 95vw;
      max-width: 95vw;
      margin: 30px auto;
    }
  } ;
`;
export default DonorScreening;
