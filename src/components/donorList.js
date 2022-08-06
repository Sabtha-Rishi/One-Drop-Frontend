import React from "react";
import styled from "styled-components";
import DonorMiniView from "../components/donorMiniView";

const donorList = ({ donors }) => {
  return (
    <DonorsContainer>
      {donors.map((donor) => {
        return <DonorMiniView donor={donor} key={donor._id} />;
      })}
    </DonorsContainer>
  );
};

export default donorList;

const DonorsContainer = styled.div`
  display: grid;
  flex-direction: column;
  border-radius: 10px;
  width: 50vw;
  margin: 50px auto;
  overflow: hidden;
  padding: 10px 30px;
  transition-duration: 0.4s;
  background-color: #fafafa;
  box-shadow: 10px 20px 20px #e3e3e3;
  gap: 20px;

  @media only screen and (max-width: 700px) {
    & {
      min-width: 95vw;
      max-width: 95vw;
      margin: 30px auto;
    }
  }
`;
