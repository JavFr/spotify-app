import { CREATE_PLAYLIST, GET_USER_PLAYLISTS, CHOOSE_PLAYLIST, LOAD_TRACKS, 
    UPDATE_TRACKS, ADD_TRACKS_ERROR, ADD_TRACKS_LOADING, REMOVE_TRACK, REMOVE_TRACK_ERROR, REMOVE_TRACK_LOADING } from './actionTypes';
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
        },
        error: (jqXHR, textStatus, errorThrown) => {
          const error = new Error(errorThrown + ': ' + textStatus);
          console.log(error.message);
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
        },
        error: (jqXHR, textStatus, errorThrown) => {
          const error = new Error(errorThrown + ': ' + textStatus);
          console.log(error.message);
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
        },
        error: (jqXHR, textStatus, errorThrown) => {
          const error = new Error(errorThrown + ': ' + textStatus);
          console.log(error.message);
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


/* TRACKS HANDLING */
const updateListOfTracks = (playlistId, token) => dispatch => {
    $.ajax({
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: (data) => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(updateTracks(data.items));
        },
        error: (jqXHR, textStatus, errorThrown) => {
          const error = new Error(errorThrown + ': ' + textStatus);
          console.log(error.message);
        }
    })
};

const updateTracks = (tracks) => ({
    type: UPDATE_TRACKS,
    payload: tracks
});

//adding tracks//

const addTracksLoading = () => ({
    type: ADD_TRACKS_LOADING
});

const addTracksError = (error) => ({
    type: ADD_TRACKS_ERROR,
    payload: error
});

export const addTrackToPlaylist = (track, playlistId,token) => dispatch => {

    dispatch(addTracksLoading);

    $.ajax({
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=spotify:track:${track.id}`,
        type: "POST",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: () => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(updateListOfTracks(playlistId, token));
        },
        error: (jqXHR, textStatus, errorThrown) => {
            const error = new Error(errorThrown + ': ' + textStatus);
            dispatch(addTracksError(error.message));
        }
    })

}

//removing tracks//

export const removeTrackFromPlaylist = (track, playlistId, token) => dispatch => {
    dispatch(removeTrackLoading);

    const trackData = {
        "tracks": [
            {
                "uri": "spotify:track:" + track.id
            }
        ]
    }
    console.log(trackData);

    $.ajax({
        url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        type: "DELETE",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        data: JSON.stringify(trackData),
        dataType: 'json',
        contentType: 'application/json',
        success: () => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(updateListOfTracks(playlistId, token));
        },
        error: (jqXHR, textStatus, errorThrown) => {
            const error = new Error(errorThrown + ': ' + textStatus);
            dispatch(addTracksError("Failed to Remove Track: " + error.message));
        }
    })
};

const removeTrackLoading = () => ({
    type: REMOVE_TRACK_LOADING
});

const removeTrackError = (error) => ({
    type: REMOVE_TRACK_ERROR,
    payload: error
});