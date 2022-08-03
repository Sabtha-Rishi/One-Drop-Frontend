import React from "react";
import Request from "./singleRequest";
import styled from "styled-components";
import data from "../components/__data";

const requestList = () => {
  const requests = data.requestsData;

  console.log(requests)
  return (
    <RequestList>
      {requests.map((req) => {
        return <Request requestData={req} key={req.id} />;
      })}
      {requests.map((req) => {
        return <Request requestData={req} key={req.id} />;
      })}
      {requests.map((req) => {
        return <Request requestData={req} key={req.id} />;
      })}
    </RequestList>
  );
};

const RequestList = styled.div`
  display: grid;
  gap: 50px 50px;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  margin: 5% 5%;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 500px) {
    & {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;
export default requestList;
