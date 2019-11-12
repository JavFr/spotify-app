import { GET_TOKEN, GET_USER_DATA } from '../actions/actionTypes';


export const loginReducer = (state = { token: null, userId: null }, action) => {
    switch (action.type) {
        case GET_TOKEN: return { ...state, token: action.payload }

        case GET_USER_DATA: return {...state, userId: action.payload.id}

        default: return state
    }
}

