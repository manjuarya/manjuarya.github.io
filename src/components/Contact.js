import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Manju Arya</h2>
                        <img src="https://drive.google.com/uc?export=view&id=1JXOn65m0kG_zmKCKH_FoMsQKb4Glv0sY" alt="manju" className="manju-img"/>
                        <p style={{width: '100%', margin: 'auto', paddingTop: '1em', fontSize: '2em'}}>Full Stack Developer</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton', fontSize: '25px'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" style={{color: '#222a30'}}/>
                                        072-768-9251 
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton', fontSize: '25px'}}>
                                        <i className="fa fa-fax" aria-hidden="true" style={{color: '#222a30'}}/>
                                        072-768-9251 
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton', fontSize: '25px'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" style={{color: '#222a30'}}/>
                                        mann.arya@gmail.com 
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontFamily: 'Anton', fontSize: '25px'}}>
                                        <i className="fa fa-skype" aria-hidden="true" style={{color: '#222a30'}}/>
                                        MySkypeID 
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
