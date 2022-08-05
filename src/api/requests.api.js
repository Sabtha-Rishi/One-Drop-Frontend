import axios from "axios";

axios.defaults.withCredentials = true;

const allRequests = async (setRequests, setIsLoading) => {
  try {
    const response = await axios.create().get("http://localhost:8000/requests");
    if (response.data.isSuccess) {
      setRequests(response.data.requests);
      setIsLoading(false);
    }

    if (!response.data.isSuccess) {
      setRequests([]);
      setIsLoading(false);
      console.log(response.data.err);
    }
  } catch (err) {
    console.log(err.message);
    setRequests([]);
    setIsLoading(false);
  }
};

const singleRequest = async (setRequest, reqId) => {
  try {
    const response = await axios
      .create()
      .get(`http://localhost:8000/requests/${reqId}`);
    if (response.data.isSuccess) {
      setRequest(response.data.request);
    }

    if (!response.data.isSuccess) {
      setRequest([]);
      console.log(response.data.err);
    }
  } catch (err) {
    console.log(err.message);
    setRequest([]);
  }
};

const userRequests = async (setMyRequests) => {
  try {
    const response = await axios
      .create()
      .get(`http://localhost:8000/requests/my-request`);
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
