import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import { authEndpoint, clientId, redirectUri, scopes } from '../config';

const ModalLogin = (props) => {
    return (
        <MDBContainer>
            <MDBModal isOpen={props.isOpen}>
                <MDBModalHeader>Para continuar, es necesario que inicies sesión en Spotify</MDBModalHeader>
                <MDBModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn 
                        tag="a"
                        color="primary" 
                        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                        Login to Spotify
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}

export default ModalLogin;