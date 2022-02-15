import { FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_SUCCESS_EX, FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_FAIL } from './constance';
import axios from 'axios';
import { useDispatch } from 'react-redux';


// export const FETCH_ALL_DATA = (data) => {
//     return async (dispatch) => {
//         dispatch({
//             type: FETCH_ALL_DATA_REQUEST,
//             payload: data
//         })
//     }
// }

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
