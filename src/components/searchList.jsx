import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBMedia, MDBCol, MDBRow, MDBMask, MDBView, MDBIcon } from "mdbreact";

const SearchList = (props) => {


    return(
        <MDBContainer>
            <MDBMedia list className="mt-3">
                
                    { (props.items && props.items.length)? 
                        props.items.map((item) => {
                            return (                                    
                                <MDBMedia tag="li" className='my-2'>
                                    <MDBRow>
                                        <MDBCol size={4}>     
                                            <MDBView className='hover'>
                                                <img className="media-image img-fluid" src={item.image.url} alt={item.album}/>
                                                <MDBMask className="flex-center hover" overlay="teal-slight">
                                                    <MDBIcon far icon="play-circle" size='5x' className='white-text'/>
                                                    <audio className='audio-element'>
                                                        <source src={item.preview_url} />
                                                    </audio>
                                                </MDBMask>
                                            </MDBView>
                                        </MDBCol>
                                        <MDBCol size={8}>
                                            <MDBMedia body>
                                                <MDBMedia heading>
                                                    {item.name}
                                                </MDBMedia>
                                                    {item.artist} - {item.album}
                                            </MDBMedia>
                                        </MDBCol>  
                                    </MDBRow>
                                </MDBMedia>
            
                            );
                        }) : ''
                    }
            </MDBMedia>
        </MDBContainer>
    );
}

export default SearchList;