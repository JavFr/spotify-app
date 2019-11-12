import { GET_TOKEN, GET_USER_DATA } from './actionTypes';
import * as $ from 'jquery';




export const getToken = () => {

    const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce(function(initial, item) {
            if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            }
            return initial;
        }, {});
    
    return {
        type: GET_TOKEN,
        payload: hash.access_token
    }
};

export const retrieveUserData = (token) => (dispatch) => {

    $.ajax({
        url: 'https://api.spotify.com/v1/me',
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: (data) => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(getUserData(data));
        }
      })
}

export const getUserData = (data) => {

    return {
        type: GET_USER_DATA,
        payload: data
    }
}



