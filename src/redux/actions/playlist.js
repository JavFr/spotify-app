import { CREATE_PLAYLIST, GET_USER_PLAYLISTS, CHOOSE_PLAYLIST, LOAD_TRACKS, ADD_TRACKS } from './actionTypes';
import * as $ from 'jquery';

export const createPlaylist = (playlist, token, userId) => (dispatch) => {

    if (playlist.name !== '' && playlist.description !== '') {

    $.ajax({
        url: `https://api.spotify.com/v1/users/${userId}/playlists`,
        type: "POST",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        data: JSON.stringify({
            name: playlist.name,
            description: playlist.descrition,
            public: playlist.public
        }),
        success: (data) => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(createdPlaylistToProps(data));
        }
      })

    }
};

export const createdPlaylistToProps = (data) => {
    return {
        type: CREATE_PLAYLIST,
        payload: data
    }
}

export const getUserPlaylists = (token, userId) => dispatch => {

    $.ajax({
        url: `https://api.spotify.com/v1/me/playlists`,
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: (data) => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(loadUserPlaylists(data.items));
        }
      })

}

export const loadUserPlaylists = (data) => {
    return {
        type: GET_USER_PLAYLISTS,
        payload: data
    }
}
export const choosePlaylist = (playlistId, token) => dispatch => {
    $.ajax({
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: (data) => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(choosePlaylistAndRetrieve(playlistId, data.items));
        }
      })
}


export const choosePlaylistAndRetrieve = (playlistId, tracks) => {
    return {
        type: CHOOSE_PLAYLIST,
        payload: {
            id: playlistId,
            tracks: tracks
        }
    }
}