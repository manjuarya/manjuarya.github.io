import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Manju Arya</h2>
                        <img src="https://drive.google.com/uc?export=view&id=1JXOn65m0kG_zmKCKH_FoMsQKb4Glv0sY" alt="manju" className="manju-img"/>
                        <div style={{width: '100%', margin: 'auto', paddingTop: '1em', fontSize: '20px'}}>
                            <p>Full Stack Developer</p>
                            <p><i className="fa fa-phone-square" aria-hidden="true" style={{color: '#222a30'}}/>
                                &nbsp; 072-768-9251</p>
                            <p><i className="fa fa-envelope" aria-hidden="true" style={{color: '#222a30'}}/>
                                &nbsp; mann.arya@gmail.com</p>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div> 
                            <h2>Current Location</h2>
                            <p style={{fontSize: '18px'}}>Stockholm, Sweden</p>
                            <Map 
                                google={this.props.google} 
                                zoom={14} 
                                style={{width: '550px', margin: '0', height: '350px', textAlign: 'left'}}
                                initialCenter={{ lat: 59.265224, lng: 18.042485 }}
                                >
                                <Marker onClick={this.onMarkerClick}
                                        name={'Current location'} 
                                        position={{lat: 59.265224, lng: 18.042485}}
                                        />
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    
                                </InfoWindow>
                            </Map></div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBfYgC66HJOG6XCEYQEWBLexqiun5WN_UU')
  })(Contact)