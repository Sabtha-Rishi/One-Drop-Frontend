import axios from "axios";

axios.defaults.withCredentials = true;

const allRequests = async (setRequestsData) => {
  try {
    const response = await axios
      .create()
      .get("https://one-drop.herokuapp.com/requests");
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
  }
};

const singleRequest = async (setRequest, setDonors, reqId) => {
  try {
    const response = await axios
      .create()
      .get(`https://one-drop.herokuapp.com/requests/${reqId}`);
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
  }
};

const userRequests = async (setMyRequests) => {
  try {
    const response = await axios
      .create()
      .get("https://one-drop.herokuapp.com/requests/my-request");
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
