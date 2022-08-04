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

const RequestsApi = {
  allRequests,
};

export default RequestsApi;
