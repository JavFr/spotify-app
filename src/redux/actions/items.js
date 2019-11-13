import { SEARCH_ITEMS, SEARCH_IS_LOADING, SEARCH_UPDATE_RESULTS } from './actionTypes';
import * as $ from 'jquery';

export const searchItems = (query, token) => (dispatch) => {

  if (query.name !== '') {

    dispatch(toggleLoading());

    $.ajax({
        url: `https://api.spotify.com/v1/search?q=${query.name.toLowerCase().replace(/\s/g,'%20')}&type=${query.type}&limit=5`,
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        },
        success: (data) => {
            //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
            dispatch(searchUpdateResults(data));
        },
        error: (jqXHR, textStatus, errorThrown) => {
          const error = new Error(errorThrown + ': ' + textStatus);
          console.log(error.message);
        }
      })

    }
};

export const toggleLoading = () => ({
  type: SEARCH_IS_LOADING
});

export const searchUpdateResults = (results) => {


  return {
    type: SEARCH_UPDATE_RESULTS,
    payload: results.tracks.items.map((item) => {
                return { 
                  id: item.id,
                  name: item.name, 
                  album: item.album.name, 
                  preview_url: item.preview_url, 
                  artist: item.artists[0].name, 
                  image: item.album.images[0]}
              })
  }
}