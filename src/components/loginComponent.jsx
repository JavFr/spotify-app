import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import { authEndpoint, clientId, redirectUri, scopes } from '../config';

const ModalLogin = (props) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={props.isOpen}>
                <MDBModalHeader className='bg-default text-white'>Welcome! <br />In order to check out this site, an spotify's authentication it's needed.</MDBModalHeader>
                <MDBModalBody>
                    <strong>About this site</strong><br/>
                    This is a very simple web app that you can use to manage your Spotify's playlists. It's free of charge, and I
                    created it just to practice with Spotify API. This is an alpha version. <br />Thanks!
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn 
                        tag="a"
                        color="default" 
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                        Login to Spotify
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}

export default ModalLogin;