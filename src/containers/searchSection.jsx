import React from 'react';
import { connect } from 'react-redux';
import { searchItems, toggleLoading } from '../redux/actions/items';
import { addTrackToPlaylist } from '../redux/actions/playlist';

import SearchSection from '../components/searchSection';

const mapStateToProps = state => ({
    token: state.loginReducer.token,
    resultOfSearch: state.reducer.resultOfSearch,
    searchIsLoading: state.reducer.searchIsLoading,
    addTracksIsLoading: state.playlistReducer.tracksLoading,
    addTracksError: state.playlistReducer.tracksError,
    playlist: state.playlistReducer.playlist
  })
  
const mapDispatchToProps = dispatch => ({
    searchItems: (query, token) => dispatch(searchItems(query, token)),
    addTrackToPlaylist: (track, playlist, token) => dispatch(addTrackToPlaylist(track, playlist, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);
