import { USER_LOGGED_SUCCESS, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_SUCCESS_EX, FETCH_ALL_DATA_SUCCESS_CARD, FETCH_ALL_DATA_SUCCESS_CITIES, FETCH_ALL_DATA_REQUEST, FETCH_ALL_DATA_FAIL, ADD_TO_CART, REMOVE_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './constance';


const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem('cart')) === null ? [] : JSON.parse(localStorage.getItem('cart')),
    user: {},
    events: [],
    experience: [],
    card: [],
    cities: {},
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

        case FETCH_ALL_DATA_SUCCESS_CARD:
            return {
                ...state,
                loading: false,
                card: action.payload
            }

        case FETCH_ALL_DATA_SUCCESS_CITIES:
            return {
                ...state,
                loading: false,
                cities: action.payload
            }
        case FETCH_ALL_DATA_SUCCESS_EX:
            return {
                ...state,
                loading: false,
                experience: action.payload
            }

        case FETCH_ALL_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        case USER_LOGGED_SUCCESS:
            return {
                ...state,
                user: action.payload
            }

        case ADD_TO_CART:

            return {
                ...state,
                cart: [...state.cart, action.payload],
            }

        case INCREMENT_QUANTITY:

            const newCartState = [...state.cart];


            const foundIndex = newCartState.findIndex((card) => card.id === action.payload);
            newCartState[foundIndex] = { ...newCartState[foundIndex], quantity: newCartState[foundIndex].quantity += 1 }
            localStorage.setItem('cart', JSON.stringify(newCartState))
            const localCart = JSON.parse(localStorage.getItem('cart'))

            return {
                ...state,
                cart: localCart
            }

        case DECREMENT_QUANTITY:

            const newCartStateDec = [...state.cart];


            const foundIndexDec = newCartStateDec.findIndex((card) => card.id === action.payload);

            newCartStateDec[foundIndexDec] = { ...newCartStateDec[foundIndexDec], quantity: newCartStateDec[foundIndexDec].quantity - 1 }
            localStorage.setItem('cart', JSON.stringify(newCartStateDec))
            const localCartDec = JSON.parse(localStorage.getItem('cart'))
            return {
                ...state,
                cart: localCartDec,
            }

        case REMOVE_TO_CART:

            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            }
        default:
            return state;
    }
}
