import { SEARCH_IS_LOADING, SEARCH_UPDATE_RESULTS } from '../actions/actionTypes';

const initialState = {
    resultOfSearch: null,
    searchIsLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_UPDATE_RESULTS: return { ...state, resultOfSearch: action.payload, searchIsLoading: false }

        case SEARCH_IS_LOADING: return { ...state, searchIsLoading: true }

        default: return state
    }
}

