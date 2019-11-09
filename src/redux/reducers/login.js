import { GET_TOKEN } from '../actions/actionTypes';


export const loginReducer = (state = { token: null }, action) => {
    switch (action.type) {
        case GET_TOKEN: return { ...state, token: action.payload }

        default: return state
    }
}

