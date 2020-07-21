import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  GENERAL_REGISTER_SUCCESS,
  GENERAL_REGISTER_FAIL
} from "./types";

import setAuthToken from "../utils/setAuthToken";

//load user

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/check-user");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
export const loadCompanyUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/signup/company");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//registration general user

export const registerUser = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const role="genuser";
  const body = JSON.stringify({ name, email, password, role });

  try {
    const res = await axios.post("/api/signup/user", body, config);

    dispatch({
      type: GENERAL_REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: GENERAL_REGISTER_FAIL
    });
  }
};

//register Farmer

export const registerFarmer = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  let role="farmer"
  const body = JSON.stringify({ name, email, password, role });

  try {
    const res = await axios.post("/api/signup/farmer", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
//
//login genuser

export const loginAllUser = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/check-user", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//login Farmer

export const loginFarmer = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/login/farmer", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//login for company

export const registerCompany1 = ({
  name,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    console.log(body);
    const res = await axios.post("/api/signup/company", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//register Farmer

export const registerCompany = ({
  name,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/signup/company", body, config);
    console.log("register");
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const loginCompany = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/login/company", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//logout

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
