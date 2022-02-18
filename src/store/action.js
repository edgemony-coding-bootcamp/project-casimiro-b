import { USER_LOGGED_SUCCESS, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_SUCCESS_EX, FETCH_ALL_DATA_SUCCESS_CARD, FETCH_ALL_DATA_SUCCESS_CITIES, FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_FAIL } from './constance';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const USER_LOGGED = (userLog) => async (dispatch) => {
    try {
        const register = async () => {
            try {
                const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
                setRegisterEmail('');
                setRegisterPassword('');
            }
            catch (err) {
                console.log(err)
                console.log('Email o password non valide');
            }
            dispatch({
                type: USER_LOGGED_SUCCESS,

                payload: userLog
            })
        }
    catch (err) {

        }
    }

export const FETCH_ALL_DATA = () => async (dispatch) => {
        dispatch({
            type: FETCH_ALL_DATA_REQUEST
        })

        try {
            const { data: events } = await axios.get('https://ddocu-api.herokuapp.com/events');

            dispatch({
                type: FETCH_ALL_DATA_SUCCESS,
                payload: events,
            })
        }
        catch (err) {
            dispatch({
                type: FETCH_ALL_DATA_FAIL
            })
        }
    }

    export const FETCH_ALL_DATA_EXPERIENCE = (city_id) => async (dispatch) => {
        dispatch({
            type: FETCH_ALL_DATA_REQUEST
        })

        try {

            const { data: experience } = await axios.get(`https://sandbox.musement.com/api/v3/cities/${city_id}/activities.json`);

            dispatch({
                type: FETCH_ALL_DATA_SUCCESS_EX,
                payload: experience,
            })
        }
        catch (err) {
            dispatch({
                type: FETCH_ALL_DATA_FAIL
            })
        }
    }

    export const FETCH_ALL_DATA_CARD = () => async (dispatch) => {
        dispatch({
            type: FETCH_ALL_DATA_REQUEST
        })

        try {

            const { data: card } = await axios.get(`https://ddocu-api.herokuapp.com/home-card`);

            dispatch({
                type: FETCH_ALL_DATA_SUCCESS_CARD,
                payload: card,
            })
        }
        catch (err) {
            dispatch({
                type: FETCH_ALL_DATA_FAIL
            })
        }
    }


    export const FETCH_ALL_DATA_CITIES = (city_id) => async (dispatch) => {
        dispatch({
            type: FETCH_ALL_DATA_REQUEST
        })

        try {

            const { data: cities } = await axios.get(`https://ddocu-api.herokuapp.com/city_page/${city_id}`);

            dispatch({
                type: FETCH_ALL_DATA_SUCCESS_CITIES,
                payload: cities,
            })
        }
        catch (err) {
            dispatch({
                type: FETCH_ALL_DATA_FAIL
            })
        }
    }
