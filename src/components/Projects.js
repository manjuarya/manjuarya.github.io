import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div style={{display: 'flex'}}>
                    {/*PROJECT 1*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://drive.google.com/uc?export=view&id=1v3R5tq7r3CtGtVtj5p4Y-kEO_wETYjxI) center / cover'}}></CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            Video Streaming App 
                        </CardText> 
                        <CardActions border>
                            <a href="https://github.com/manjuarya/VideoStreamingApp" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://videostreamingapp.netlify.app" rel="noopener noreferrer" target="_blank">
                                <Button colored>Website</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*PROJECT 2*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://drive.google.com/uc?export=view&id=1Nr1B9Cl-9IJrG2S91Wtn0JGkI4CSaYEy) center / cover'}}></CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            E-Commerce Website 
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/manjuarya/React-Commercial-Website" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://react-commercial-website.netlify.app" rel="noopener noreferrer" target="_blank">
                                <Button colored>Website</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*PROJECT 3*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://drive.google.com/uc?export=view&id=13JOSk-ptY5UOUdeb7nR7PPM9K6tdrpiR) center / cover'}}></CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            Restaurant Website Development 
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/manjuarya/RestaurantWebsite" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://restaurantwebsite.netlify.app" rel="noopener noreferrer" target="_blank">
                                <Button colored>Website</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }else if(this.state.activeTab === 1){
            return(
                <div style={{display: 'flex'}}>
                    {/*PROJECT 1*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvs0U9lgKRRbtWqY3YLCfn8lKTnGWf2x4sg&usqp=CAU) center / cover'}}></CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            Website Development to get outdoor activities appointment in Corona Pandemic  
                        </CardText> 
                        <CardActions border>
                            <a href="https://github.com/manjuarya/SDAFinalGroupProject-OutdoorWebApp" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*PROJECT 2*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAwF7VPLKMCsNM2wTGwtIoERNZRDOX9lgYw&usqp=CAU) center / cover'}}></CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            Fetch nutritional value of protein bars from XML data and show it to customers based on different  
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/manjuarya/fetchNutritionalValueOfProteinBarsFromXML" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*PROJECT 3*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxguDOELG4oWA9E7TnEdYz8-Dh-3hmavbZA&usqp=CAU) center / cover'}}></CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            Command-line based Student attendance management  
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/manjuarya/AttandanceApplication" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }/*else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is HTML & CSS</h1>
                </div>
            );
        }*/
    }

    render() {
        return (
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                </Tabs>
                <section style={{marginTop: '30px'}}>
                    <Grid>
                        <Cell col={12}>
                            <div>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
