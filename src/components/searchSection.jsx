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
        <MDBContainer className='bg-default' style={{'minHeight': '100vh'}}>
            <MDBRow>
                <MDBCol size='12'>
                    <SearchBar onChange={(query) => search(query)} isLoading={props.searchIsLoading}/>
                </MDBCol>
                <MDBCol size='12'>
                    <SearchList items={props.resultOfSearch}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default SearchSection;