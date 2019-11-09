import React from 'react';
import { MDBContainer, MDBFormInline, MDBIcon } from 'mdbreact';

const SearchBar = (props) => {
    return(
        <MDBContainer>
            <MDBFormInline className='md-form'>
                <MDBIcon icon="search" />
                <input 
                    onChange={(event) => props.onChange(event.target.value)}
                    className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                { props.isLoading ? 
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> : ''
                }
            </MDBFormInline>
        </MDBContainer>
    );
}

export default SearchBar;