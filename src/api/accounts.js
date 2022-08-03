import axios from "axios";

axios.defaults.withCredentials = true;

const register = async (newUser) => {
  try {
    const response = await axios
      .create()
      .post("http://localhost:8000/accounts/register", newUser, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    return response.data.isSuccess;
  } catch (err) {
    console.log(err.message);
  }
};

const login = async (data, setIsAuthenticated, setUser) => {
  try {
    const response = await axios
      .create()
      .post("http://localhost:8000/accounts/login", data);

    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
      setUser(response.data.user);
    }
  } catch (err) {
    console.log(err.message);
    setIsAuthenticated(false);
    setUser({});
  }
};

const getUser = async (setIsAuthenticated, setUser, setIsLoading) => {
  try {
    const response = await axios
      .create()
      .get("http://localhost:8000/accounts/user");

    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
      setUser(response.data.user);
      setIsLoading(false);
    }
    if (!response.data.isAuthenticated) {
      setIsAuthenticated(false);
      setUser({});
      setIsLoading(false);
    }
  } catch (err) {
    setIsAuthenticated(false);
    setIsLoading(false);
  }
};

const updateUser = async (setIsEditing, data, setUser) => {
  try {
    const response = await axios
      .create()
      .post("http://localhost:8000/accounts/user/update", data);

    console.log(response.data);

    if (response.data.isUpdated) {
      setIsEditing(false);
      setUser(response.data.user);
      console.log(response.data.user, "Updated");

    }
    if (!response.data.isUpdated) {
    }
  } catch (err) {
    console.log(err.message);
  }
};

const AccountsAPI = {
  register,
  login,
  getUser,
  updateUser,
};

export default AccountsAPI;
