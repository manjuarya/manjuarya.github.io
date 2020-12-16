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
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9mhynvlYCTc2alQM7NbTBbygHVFg1FusOA&usqp=CAU) center / cover'}}>React Project #1</CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            Video Streaming App 
                        </CardText> 
                        <CardActions border>
                            <a href="https://github.com/manjuarya/VideoStreamingApp" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://videostreamingapp.netlify.app" rel="noopener noreferrer" target="_blank">
                                <Button colored>Netlify</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*PROJECT 2*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>React Project #2</CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            E-Commerce Website 
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/manjuarya/React-Commercial-Website" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://react-commercial-website.netlify.app" rel="noopener noreferrer" target="_blank">
                                <Button colored>Netlify</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/*PROJECT 3*/}
                    <Card shadow={5} style={{width: '400px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxkRMbwko-gNBym8XC1lYgKaZ86DFYO1-nw&usqp=CAU) center / cover'}}>React Project #3</CardTitle>
                        <CardText style={{fontSize: '15px'}}>
                            Restaurant Website Development 
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/manjuarya/RestaurantWebsite" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="https://restaurantwebsite.netlify.app" rel="noopener noreferrer" target="_blank">
                                <Button colored>Netlify</Button>
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
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgOiVtONtGbpp_1u0QNatX7JBtDdt59GUiw&usqp=CAU) center / cover'}}>React Project #1</CardTitle>
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
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAwF7VPLKMCsNM2wTGwtIoERNZRDOX9lgYw&usqp=CAU) center / cover'}}>React Project #2</CardTitle>
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
                        <CardTitle style={{color: 'black', height: '200px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxguDOELG4oWA9E7TnEdYz8-Dh-3hmavbZA&usqp=CAU) center / cover'}}>React Project #3</CardTitle>
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
        }else if(this.state.activeTab === 2){
            return(
                <div>
                    <h1>This is HTML & CSS</h1>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="category-tab">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>HTML & CSS</Tab>
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
