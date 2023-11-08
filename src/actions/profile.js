
import {
    FETCH_ALL,
    FETCH_BY_SEARCH,
    FETCH_POST,
    CREATE,
    DELETE,
    UPDATE,
    START_LOADING,
    END_LOADING,
    COMMENT,
  } from "../constants/actionTypes.js";

import * as api from "../api/index.js";

export const getProfile = () => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.fetchProfile();
  
      dispatch({ type: FETCH_ALL, payload: data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };


export const createProfile = (profile, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
  
      const { data } = await api.createProfile(profile);
      dispatch({ type: CREATE, payload: data });
      navigate("/profile");
  
      // dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateProfile = (id, profile, navigate) => async (dispatch) => {
    try {
      const { data } = await api.updateProfile(id, profile);
  
      dispatch({ type: UPDATE, payload: data });
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };