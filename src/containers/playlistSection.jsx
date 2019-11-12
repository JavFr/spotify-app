import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createPlaylist, getUserPlaylists, choosePlaylist, loadTracks } from '../redux/actions/playlist';

import Playlist from '../components/playlistSection';

const mapStateToProps = state => ({
    token: state.loginReducer.token,
    userId: state.loginReducer.userId,
    playlist: state.playlistReducer.playlist,
    tracks: state.playlistReducer.tracks
  })
  
const mapDispatchToProps = dispatch => ({
    createPlaylist: (playlist, token, userId) => dispatch(createPlaylist(playlist, token, userId)),
    getUserPlaylists: (token, userID) => dispatch(getUserPlaylists(token, userID)),
    choosePlaylist: (id, token) => dispatch(choosePlaylist(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
