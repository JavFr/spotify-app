import React from 'react';
import { MDBContainer, MDBFormInline, MDBIcon, MDBInput } from 'mdbreact';

const SearchOptions = () => {
    return(
    <MDBContainer className="mt-5">
      <MDBInput onClick={'this.onClick(1)'} checked={true} label="Default unchecked" type="radio"
        id="radio1" />
      <MDBInput onClick={'this.onClick(2)'} checked={false} label="Default checked" type="radio"
        id="radio2" />
      <MDBInput onClick={'this.onClick(3)'} checked={false} label="Default unchecked disabled"
        disabled type="radio" id="radio3" />
      <MDBInput onClick={'this.onClick(3)'} checked={false} label="Default checked disabled"
        disabled type="radio" id="radio3" />
    </MDBContainer>
    );
}

export default SearchOptions;