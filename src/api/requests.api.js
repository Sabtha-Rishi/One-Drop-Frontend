import axios from "axios";

axios.defaults.withCredentials = true;

// const BASE_URL = "https://one-drop.herokuapp.com/";
const BASE_URL = 'http://localhost:8000/';

const allRequests = async (setRequestsData, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}requests/`);
    if (response.data.isSuccess) {
      setRequestsData(response.data.requests);
    }

    if (!response.data.isSuccess) {
      setRequestsData([]);

      console.log(response.data.err);
    }
  } catch (err) {
    console.log(err.message);
    setRequestsData([]);
  }finally{
    setIsLoading(false)
  }
};

const singleRequest = async (setRequest, setDonors, reqId, setIsLoading) => {
  try {
    const response = await axios.create().get(`${BASE_URL}requests/${reqId}`);
    if (response.data.isSuccess) {
      setRequest(response.data.request);
      setDonors(response.data.donors);
    }

    if (!response.data.isSuccess) {
      setRequest([]);
      setDonors([]);

      console.log(response.data.err);
    }
  } catch (err) {
    console.log(err.message);
    setRequest([]);
    setDonors([]);
  } finally {
    setIsLoading(false);
  }
};

const userRequests = async (setMyRequests) => {
  try {
    const response = await axios.create().get(`${BASE_URL}requests/my-request`);
    if (response.data.isSuccess) {
      setMyRequests(response.data.requests);
    }

    if (!response.data.isSuccess) {
      console.log(response.data.err);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const RequestsApi = {
  allRequests,
  singleRequest,
  userRequests,
};

export default RequestsApi;
