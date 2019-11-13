import { CREATE_PLAYLIST, GET_USER_PLAYLISTS, CHOOSE_PLAYLIST, UPDATE_TRACKS, ADD_TRACKS_LOADING, ADD_TRACKS_ERROR, REMOVE_TRACK_ERROR, REMOVE_TRACK_LOADING } from '../actions/actionTypes';

const initialState = {
    playlist: null,
    tracks: [],
    tracksLoading: false,
    tracksError: null
}

export const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PLAYLIST: return { ...state, playlist: action.payload }

        case GET_USER_PLAYLISTS: return { ...state, playlist: action.payload }

        case CHOOSE_PLAYLIST: return { ...state, playlist: state.playlist.filter((playlist) => playlist.id === action.payload.id)[0], tracks: action.payload.tracks}

        case UPDATE_TRACKS:  return {...state, tracks: action.payload, tracksLoading: false, tracksError: null}
        
        case ADD_TRACKS_ERROR: return {...state, tracksLoading: false, tracksError: action.payload }

        case ADD_TRACKS_LOADING: return {...state, tracksLoading: true }

        case REMOVE_TRACK_ERROR: return {...state, tracksLoading: false, tracksError: action.payload }

        case REMOVE_TRACK_LOADING: return {...state, tracksLoading: true }

        default: return state
    }
}

