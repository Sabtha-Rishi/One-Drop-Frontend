import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RequestList from '../components/requestList';
import RequestsApi from '../api/requests.api';

const Requests = () => {
	const [requestsData, setRequestsData] = useState([]);

	useEffect(() => {
		RequestsApi.allRequests(setRequestsData);
	}, []);

	return (
		<div>
			<RequestList requests={requestsData} />
		</div>
	);
};

export default Requests;

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
