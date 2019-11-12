import React, {useState} from 'react';

import { MDBContainer, MDBBtn, MDBBtnGroup, MDBListGroup, MDBListGroupItem, MDBIcon, MDBInput, MDBRow, MDBCol, MDBModalHeader, MDBModalFooter, MDBModal, MDBModalBody} from "mdbreact";


const Playlist = (props) => {
    const [createModal, setCreateModal] = useState({isOpen: false});
    const [chooseModal, setChooseModal] = useState({isOpen: false});

    const createPlaylist = (data) => {
        props.createPlaylist(data, props.token, props.userId);
        setCreateModal({isOpen: false});
    }

    const openPlaylistModal = () => {
        props.getUserPlaylists(props.token, props.userId);
        setChooseModal({isOpen: true});
    }

    const onChooseSumbit = (id) => {
        props.choosePlaylist(id, props.token);
        setChooseModal({isOpen: false});
    }

    return (
        <MDBContainer className='bg-warning' style={{minHeight: '100vh'}}>
            {!props.playlist || props.playlist.length > 1? 
                <OpenOrCreatePlaylist createPlaylist={() => setCreateModal({isOpen: true})} openPlaylist={() => openPlaylistModal() } />
                : <div><PlaylistTopMenu title={props.playlist.name} />
                    <RenderPlaylist items={props.tracks}/></div>
            }
            <CreatePlaylistModal toggle={() => setCreateModal(!createModal.isOpen)} isOpen={createModal.isOpen} submit={(data) => createPlaylist(data)}/>
            <ChoosePlaylistModal toggle={() => setChooseModal(!chooseModal.isOpen)} isOpen={chooseModal.isOpen} isLoading={props.chooseIsLoading} submit={(id) => onChooseSumbit(id)} items={props.playlist}/>
        </MDBContainer>
    );
}

export const OpenOrCreatePlaylist = (props) => {
    return(
        <MDBBtnGroup>
            <MDBBtn onClick={props.createPlaylist} color="info" size="lg">Create New Playlist</MDBBtn>
            <MDBBtn onClick={props.openPlaylist} color="info" size="lg">Open a Playlist</MDBBtn>
        </MDBBtnGroup>
    );
}

export const PlaylistTopMenu = (props) => {
    return(
        <MDBContainer className='bg-success z-depth-1 text-white px-2 py-1'>
            <MDBRow className='align-items-center justify-content-between'>
                <MDBCol className='d-flex align-items-center justify-content-between px-5'>
                    <h1 className='text-white'>{props.title}</h1>
                    <div>
                        <MDBBtn floating flat style={{'boxShadow': 'none'}} color='transparent' size='lg'>
                            <MDBIcon far  icon="save" size="2x" />
                        </MDBBtn>
                        <MDBBtn floating flat style={{'boxShadow': 'none'}} color='transparent' size='lg'>
                            <MDBIcon far  icon="edit" size="2x" />
                        </MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export const RenderPlaylist = (props) => {

    return(
        <MDBContainer>
            <MDBListGroup style={{ width: "22rem" }}>
                {props.items && props.items.length? props.items.map((item) => {
                    return (<MDBListGroupItem key={item.track.id} className="d-flex justify-content-between align-items-center text-dark">
                        <div>
                            {item.track.name}<br/> 
                            <small>{item.track.artists[0].name} - {item.track.album.name}</small>
                        </div>
                        <div>
                        <MDBBtn floating flat style={{'boxShadow': 'none'}} color='transparent' size='lg' onClick={() => props.onClickTrash(item.id)} >
                            <MDBIcon far  icon="trash-alt" size="2x" />
                        </MDBBtn>
                        <MDBBtn floating flat style={{'boxShadow': 'none'}} color='transparent' size='lg' onClick={() => props.onClickInfo(item.id)} >
                            <MDBIcon icon="info" size='2x'/>
                        </MDBBtn>  
                        </div>
                    </MDBListGroupItem>)
                }) : ''}
            </MDBListGroup>
        </MDBContainer>
    );
}

export const CreatePlaylistModal = (props) => {
    const [data, setFormData] = useState({
        name: '',
        description: '',
        public: false
    });

    return(
        <MDBContainer>
            <MDBModal isOpen={props.isOpen} toggle={props.toggle}>
                <MDBModalHeader toggle={props.toggle}>Create a new Playlist</MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <MDBInput onChange={(event) => setFormData({...data, name: event.target.value})} id='ModalPlaylistTitle' label="Title" />
                        <MDBInput onChange={(event) => setFormData({...data, description: event.target.value})} type="textarea" label="Description" rows="4" />
                        <MDBBtnGroup>
                            <MDBBtn onClick={() => setFormData({...data, public: false})} className={!data.public? 'active' : ''} color="default" size="lg">Private</MDBBtn>
                            <MDBBtn onClick={() => setFormData({...data, public: true})} className={data.public? 'active' : ''} color="default" size="lg">Public</MDBBtn>
                        </MDBBtnGroup>
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={props.toggle}>Close</MDBBtn>
                <MDBBtn color="primary" onClick={() => props.submit(data)}>Create</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}

export const ChoosePlaylistModal = (props) => {
    const [playlist, setPlaylist] = useState({
        id: null
    });

    return(
        <MDBContainer>
            <MDBModal isOpen={props.isOpen} toggle={props.toggle}>
                <MDBModalHeader toggle={props.toggle}>Choose a Playlist</MDBModalHeader>
                <MDBModalBody>
                    <MDBListGroup>
                        {props.items && props.items.length? props.items.map((item) => {
                            return(
                                <MDBListGroupItem className={item.id === playlist.id? 'active' : ''} hover key={item.id} onClick={() => setPlaylist({id: item.id})}>
                                    {item.name}
                                </MDBListGroupItem>
                            )
                        }) : ''
                        }
                    </MDBListGroup>
                    {props.isLoading? 
                        <MDBListGroupItem>
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </MDBListGroupItem>
                        : ''
                    }
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={props.toggle}>Close</MDBBtn>
                <MDBBtn color="primary" className={ !playlist.id? 'disabled' : ''} onClick={() => props.submit(playlist.id)}>Choose</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}




export default Playlist;