import { FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_FAIL } from './constance';

const INIT_STATE = {
    events: [],
    error: null,
    loading: false,
}

export const myReducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case FETCH_ALL_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ALL_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload
            }
        case FETCH_ALL_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}