import React from "react";
import Request from "./singleRequestMini";
import styled from "styled-components";

const RequestList = ({ requests }) => {
  return (
    <ReqList>
      {requests.map((req) => {
        return <Request requestData={req} key={req._id} />;
      })}
    </ReqList>
  );
};

const ReqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 50px;
  /* grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr)); */
  margin: 5% 5%;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 500px) {
    /* & {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    } */
  }
`;
export default RequestList;
