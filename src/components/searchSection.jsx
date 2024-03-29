import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SearchBar from './searchBar';
import SearchList  from './searchList';


const SearchSection = (props) => {

    const search = (query) => {
        props.searchItems({
        name: query,
        type: 'track'
      }, props.token)
    }
      
    return(
        <MDBContainer style={{'minHeight': '100vh', backgroundColor: '#263238'}} className='text-white'>
            <MDBRow>
                <MDBCol size='12'>
                    <SearchBar onChange={(query) => search(query)} isLoading={props.searchIsLoading}/>
                </MDBCol>
                <MDBCol size='12'>
                    <SearchList items={props.resultOfSearch} addToPlaylist={(track) => props.addTrackToPlaylist(track, props.playlist.id, props.token)} allowAdd={props.playlist}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default SearchSection;