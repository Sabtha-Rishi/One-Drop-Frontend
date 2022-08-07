import axios from "axios";
axios.defaults.withCredentials = true;

const register = async (newUser) => {
  try {
    const response = await axios
      .create()
      .post("https://one-drop.herokuapp.com/accounts/register", newUser, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    return response.data.isSuccess;
  } catch (err) {
    // console.log(err.message);
  }
};

const login = async (data, setIsAuthenticated, setIsLoading) => {
  try {
    const response = await axios
      .create()
      .post("https://one-drop.herokuapp.com/accounts/login", data);

    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
      console.log("Success");
    }
  } catch (err) {
    // console.log(err.message);
    // setIsAuthenticated(false);
    // setUser({});
    console.log("failed");
  } finally {
    setIsLoading(false);
  }
};

const logout = async (setIsAuthenticated, setUser) => {
  try {
    const response = await axios
      .create()
      .post("https://one-drop.herokuapp.com/accounts/logout");

    if (response.data.isSuccess) {
      setIsAuthenticated(false);
      setUser({});
    }
    if (!response.data.isSuccess) {
      setIsAuthenticated(true);
    }
  } catch (err) {
    // console.log(err.message);
    // setIsAuthenticated(true);
  }
};

const getUser = async (setIsAuthenticated, setUser, setIsLoading) => {
  try {
    const response = await axios
      .create()
      .get("https://one-drop.herokuapp.com/accounts/user");
    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
      setUser(response.data.user);
      console.log(response);

      console.log("fetch-done", response.data);
    }
    if (!response.data.isAuthenticated) {
      setIsAuthenticated(false);
      console.log(response);
      console.log("fetch-fail", response.data);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const getSingleUser = async (setUser, id) => {
  try {
    const response = await axios
      .create()
      .get(`https://one-drop.herokuapp.com/accounts/${id}`);

    if (response.data.isSuccess) {
      setUser(response.data.user);
    }
    if (!response.data.isSuccess) {
      setUser({});
    }
  } catch (err) {
    console.log(err.message);
  }
};

const isAuthenticated = async (setIsAuthenticated, setIsLoading) => {
  try {
    const response = await axios
      .create()
      .get("https://one-drop.herokuapp.com/accounts/user");
    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
    }
    if (!response.data.isAuthenticated) {
      setIsAuthenticated(false);
      console.log("auth Fail", response.data);
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setIsLoading(false);
  }
};

const updateUser = async (setIsUpdated, data, setUser) => {
  try {
    const response = await axios
      .create()
      .post("https://one-drop.herokuapp.com/user/update", data);

    if (response.data.isUpdated) {
      setIsUpdated(true);
      setUser(response.data.user);
      return;
    }
    if (!response.data.isUpdated) {
    }
  } catch (err) {
    // console.log(err.message);
  }
};

const AccountsAPI = {
  register,
  login,
  getUser,
  updateUser,
  logout,
  isAuthenticated,
  getSingleUser,
};

export default AccountsAPI;
