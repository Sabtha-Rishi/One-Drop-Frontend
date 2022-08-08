import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import RequestDetails from "../components/singleRequestData";
import DonorList from "../components/donorList";
import Loading from "../pages/loading";

import RequestsAPI from "../api/requests.api";

const singleRequest = () => {
  const reqId = useParams().reqId;

  const [request, setRequest] = useState([]);
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const navigate = useNavigate();
  useEffect(() => {
    RequestsAPI.singleRequest(setRequest, setDonors, reqId, setIsLoading);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Request>
      <RequestDetails request={request} />
      {Object.keys(donors).length > 0 && <DonorList donors={donors} />}
    </Request>
  );
};

export default singleRequest;

const Request = styled.div`
  display: flex;
  flex-direction: column;
`;
