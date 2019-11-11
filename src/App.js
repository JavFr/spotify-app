import React, {Component} from 'react';

import * as $ from 'jquery';



import SearchSection from './containers/searchSection';
import ModalLogin from './components/loginComponent';
import Playlist from './components/playlistSection';

import './App.css';
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact';



class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
    this.searchNow = this.searchNow.bind(this);
  }

  componentDidMount() {
    // Set token
    this.props.getToken();
    console.log(this.props.token);
    
    if (this.props.token) {
      this.searchNow();
      console.log('asdasd');
    }
  }

  searchNow() {
    $.ajax({
      url: `https://api.spotify.com/v1/search?q=zamba%20para%20olvidar&type=track`,
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.props.token);
      },
      success: (data) => {
          //data.hasOwnProperty('tracks') ? items = items.concat(data.tracks) : data.hasOwnProperty('artists') ? items = items.concat(data.artists) : items = []
        this.setState({
          items: data
        })
      }
    });
  }

  render() {
    return(
      <MDBContainer fluid className="App fluid p-0">
        <ModalLogin isOpen={!this.props.token} />
        { this.props.token && (
        <MDBRow className='no-gutters'>
          <MDBCol size='6' md='4'>
            <SearchSection />
          </MDBCol>
          <MDBCol size='6' md='4'>    
            <Playlist />    
          </MDBCol>
        </MDBRow>
        )}
      </MDBContainer>
    );
  }
}

export default App;
