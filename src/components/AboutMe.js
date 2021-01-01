import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

export default class AboutMe1 extends Component {
    render() {
        return (
            <div>
                  <Grid  className="about-div">
                    {/*Right Side*/}
                    <Cell col={6}>
                        <h1>ABOUT ME</h1>
                        <hr/>
                        <p>Manju Arya is a highly motivated Full-stack developer looking for the opportunity to prove herself in the IT industry. She finds creativity, critical thinking and honesty to be the most valuable qualities for success in a software development career. She has a total of 12 years experience in the telecom domain operating different PSTN switches where she also worked as unit test writer using JUnit framework in a Java project for one year. She has also attended a 16 weeks intensive course in software development from KTH provided by Novare Potential consultancy which got completed in May 2020.</p> 
                        <p>Manju holds a Bachelor of Technology in Electronics and communication engineering, where she was the secretary of the Fine Arts and hobby counsel. Manju has a strong sense of ownership and value creation and hopes to continue using her determination and critical thinking to be successful and highly sought after full stack developer.</p> 
                        <p>To hire Manju as an Employee or freelance full stack developer, email her at <em>mann.arya@gmail.com.</em></p>

                        <h1>MY VIDEO</h1>
                        <hr/>
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/BhcvpGgSXc4'
                            width='100%'
                            height='100%'
                            />
                        </div>
                        
                    </Cell>

                </Grid>
            </div>
        )
    }
}
