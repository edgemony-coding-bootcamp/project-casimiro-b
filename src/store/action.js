import { FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_FAIL } from './constance';
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
        const { data: events } = await axios.get('http://localhost:3000/events');
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
