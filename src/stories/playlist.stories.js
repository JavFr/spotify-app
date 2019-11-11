import React from 'react';

import Playlist, {OpenOrCreatePlaylist, RenderPlaylist, PlaylistTopMenu, CreatePlaylistModal, ChoosePlaylistModal} from '../components/playlistSection';



export default {
    title: 'Playlist'
};

export const playlist = () => <Playlist playlist={null} 
    createPlaylist={() => alert('create playlist')} 
    openPlaylist={() => alert('Open a playlist')}
    chooseIsLoading={true}
    />;

export const openOrCreatePlaylist = () => <OpenOrCreatePlaylist 
                                            createPlaylist={() => alert('create playlist')} 
                                            openPlaylist={() => alert('open playlist')}/>
export const renderPlaylist = () => <RenderPlaylist items={[
    {
        id: '1',
        name: 'Juan',
        artist: 'pepe',
        album: 'hola'
    }
]}/>


export const playlistTopMenuWithTitle = () => <PlaylistTopMenu  title='Playlist'/>

export const createPlaylistModal = () => <CreatePlaylistModal isOpen={true}/>

export const choosePlaylistModalEmpty = () => <ChoosePlaylistModal isOpen={true} isLoading={true}/>

export const choosePlaylistModal = () => <ChoosePlaylistModal isOpen={true} items={[
    {
        name: 'Playlist 1',
        id: 1
    },
    {
        name: 'Playlist 2',
        id: 2
    },
    {
        name: 'Playlist 3',
        id: 3
    }
]} submit={(playlist) => alert('id:' + playlist.id)} isLoading={false}/>
