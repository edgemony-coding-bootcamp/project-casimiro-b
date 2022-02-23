import {
  USER_LOGGED_SUCCESS,
  FETCH_ALL_DATA_SUCCESS,
  FETCH_ALL_DATA_SUCCESS_EX,
  FETCH_ALL_DATA_SUCCESS_CARD,
  FETCH_ALL_DATA_SUCCESS_CITIES,
  FETCH_ALL_DATA_REQUEST,
  FETCH_ALL_DATA_FAIL,
  ADD_TO_CART,
  REMOVE_TO_CART,
  ADD_QUANTITY
} from "./constance";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";

export const ADD_CART = (card) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: card,
    });
  } catch (err) {
    console.log(err);
  }
};

export const CHANGE_QUANTITY = ({ quantity, id }) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_QUANTITY,
      payload: { quantity, id }
    });
  } catch (err) {
    console.log(err);
  }
};

export const REMOVE_CART = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_TO_CART,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const LOG_OUT = () => async (dispatch) => {
  try {
    const user = {};

    dispatch({
      type: USER_LOGGED_SUCCESS,
      payload: user,
    });
  } catch (err) {
    console.log(err);
    console.log("Email o password non valide");
  }
};

export const USER_SIGNUP =
  (
    auth,
    setRegisterEmail,
    setRegisterPassword,
    registerEmail,
    registerPassword
  ) =>
    async (dispatch) => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
        setRegisterEmail("");
        setRegisterPassword("");

        dispatch({
          type: USER_LOGGED_SUCCESS,
          payload: user,
        });
      } catch (err) {
        console.log(err);
        console.log("Email o password non valide");
      }
    };

export const USER_LOGIN =
  (auth, loginEmail, loginPassword) => async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);

      dispatch({
        type: USER_LOGGED_SUCCESS,
        payload: user,
      });
    } catch (err) {
      console.log(err);
      console.log("Email o password non valide");
    }
  };

export const FETCH_ALL_DATA = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_DATA_REQUEST,
  });

  try {
    const { data: events } = await axios.get(
      "https://ddocu-api.herokuapp.com/events"
    );

    dispatch({
      type: FETCH_ALL_DATA_SUCCESS,
      payload: events,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_DATA_FAIL,
    });
  }
};

export const FETCH_ALL_DATA_EXPERIENCE = (city_id) => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_DATA_REQUEST,
  });

  try {
    const { data: experience } = await axios.get(
      `https://sandbox.musement.com/api/v3/cities/${city_id}/activities.json`
    );

    dispatch({
      type: FETCH_ALL_DATA_SUCCESS_EX,
      payload: experience,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_DATA_FAIL,
    });
  }
};

export const FETCH_ALL_DATA_CARD = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_DATA_REQUEST,
  });

  try {
    const { data: card } = await axios.get(
      `https://ddocu-api.herokuapp.com/home-card`
    );

    dispatch({
      type: FETCH_ALL_DATA_SUCCESS_CARD,
      payload: card,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_DATA_FAIL,
    });
  }
};

export const FETCH_ALL_DATA_CITIES = (city_id) => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_DATA_REQUEST,
  });

  try {
    const { data: cities } = await axios.get(
      `https://ddocu-api.herokuapp.com/city_page/${city_id}`
    );

    dispatch({
      type: FETCH_ALL_DATA_SUCCESS_CITIES,
      payload: cities,
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_DATA_FAIL,
    });
  }
};
