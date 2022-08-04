import React from "react";
import styled from "styled-components";
import RequestList from "../components/requestList";

const requests = ({ requests }) => {
  return (
    <div>
      <RequestList requests={requests} />
    </div>
  );
};

export default requests;

const AllRequests = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 80vw;
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
  }
`;
