import { GET_TOKEN } from './actionTypes';

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