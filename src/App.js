import React, {Component} from 'react';

import SearchSection from './containers/searchSection';
import ModalLogin from './components/loginComponent';
import Playlist from './containers/playlistSection';

import './App.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      userId: null
    };
  }

  componentDidMount() {
    // Set token
    this.props.getToken();
    console.log(this.props.token);
  }

  componentDidUpdate() {
    if (this.props.token) {
      this.props.getUserData(this.props.token);
    }
  }


  render() {
    return(
      <MDBContainer fluid className="App fluid p-0">
        <ModalLogin isOpen={!this.props.token} />
        { this.props.token && (
        <MDBRow className='no-gutters'>
          <MDBCol size='6' md='4' >
            <SearchSection />
          </MDBCol>
          <MDBCol size='6' md='8'>    
            <Playlist />    
          </MDBCol>
        </MDBRow>
        )}
      </MDBContainer>
    );
  }
}

export default App;
