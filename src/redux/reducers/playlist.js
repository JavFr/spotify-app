import { CREATE_PLAYLIST, GET_USER_PLAYLISTS, CHOOSE_PLAYLIST, ADD_TRACKS } from '../actions/actionTypes';

const initialState = {
    playlist: null,
    tracks: []
}

export const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PLAYLIST: return { ...state, playlist: action.payload }

        case GET_USER_PLAYLISTS: return { ...state, playlist: action.payload }

        case CHOOSE_PLAYLIST: return { ...state, playlist: state.playlist.filter((playlist) => playlist.id === action.payload.id)[0], tracks: action.payload.tracks}

        default: return state
    }
}

