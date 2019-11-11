import React, {Component, useState} from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBMedia, MDBCol, MDBRow, MDBMask, MDBView, MDBIcon, MDBBtn } from "mdbreact";





const SearchList = (props) =>   {

    return(
        <MDBContainer>
            <MDBMedia list className="mt-3">                  
                    { (props.items && props.items.length)? 
                        props.items.map((item) => {
                            return (                                    
                                <MDBMedia tag="li" className='my-2' key={item.id}>
                                    <MDBRow>
                                        <MDBCol size={4}>     
                                            <MDBView className='hover'>
                                                <img className="media-image img-fluid" src={item.image.url} alt={item.album}/>
                                                { item.preview_url? <PlayButton source={item.preview_url} id={item.id}/> : ''}
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


const PlayButton = (props) => {

    const [isPlaying, setState] = useState(false);

    const toggleAudio = () => {
        if (isPlaying){
            document.getElementById(`audio-${props.id}`).pause();
            setState(false);
        }
        else{
            playAudio(`audio-${props.id}`)
                .then(() => setState(false))
                .then(() => setState(false));
        }
    }

    const playAudio = (id) => new Promise((resolve, reject) => {
        const audio = document.getElementById(id);
        audio.play();
        audio.onerror = reject;
        audio.onended = resolve;
        setState(true);
    });

    return(
        <MDBMask className="flex-center hover" overlay="teal-slight">
            <MDBBtn floating flat style={{'boxShadow': 'none'}} color='transparent' size='lg' onClick={toggleAudio}>
                <MDBIcon far style={{opacity: '.8'}} icon={ isPlaying? 'pause-circle' : 'play-circle' } size='5x' className='white-text'/>
            </MDBBtn> )  
            <audio id={'audio-' + props.id}>
                <source src={props.source} />
            </audio>
        </MDBMask>
    );
}

export default SearchList;