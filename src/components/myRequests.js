import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RequestsApi from "../api/requests.api";
import RequestList from "./requestList";

const MyRequests = () => {
  const [myRequests, setMyRequests] = useState([]);

  useEffect(() => {
    RequestsApi.userRequests(setMyRequests);
  }, []);

  if (myRequests) {
    return (
      <Wrapper>
        <RequestList requests={myRequests} />;
      </Wrapper>
    );
  }

  return <div></div>;
};

export default MyRequests;

const Wrapper = styled.div``;
