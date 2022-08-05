import axios from "axios";
import { useMemo, useCallback } from "react";
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
    // console.log(err.message);
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
    // console.log(err.message);
    // setIsAuthenticated(false);
    // setUser({});
  }
};

const logout = async (setIsAuthenticated, setUser) => {
  try {
    const response = await axios
      .create()
      .post("http://localhost:8000/accounts/logout");

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

const getUser = async (setIsAuthenticated, setUser) => {
  try {
    const response = await axios
      .create()
      .get("http://localhost:8000/accounts/user");

    if (response.data.isAuthenticated) {
      setIsAuthenticated(true);
      setUser(response.data.user);
    }
    if (!response.data.isAuthenticated) {
      setIsAuthenticated(false);
      setUser({});
    }
  } catch (err) {
    // console.log(err.message);
  }
};

const updateUser = async (setIsEditing, data, setUser) => {
  try {
    const response = await axios
      .create()
      .post("http://localhost:8000/accounts/user/update", data);

    if (response.data.isUpdated) {
      setIsEditing(false);
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
};

export default AccountsAPI;
