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
                        <p>Manju Arya is a highly motivated Full-stack developer looking for the opportunity to prove herself in the IT industry. 
                            Currently, she is working as an Frontend developer intern using React JS, HTML, CSS, Google analytics and Swagger APIs. 
                            She has more than one year experience in React JS, Javascript, CSS and created many mini-projects and 
                            close to three-year experience in back-end Java development and writing unit tests using Junit framework in a telecom project. 
                            She has more than 12 years of total experience working as Telecom and software Engineer. 
                            She finds creativity, critical thinking and honesty to be the most valuable qualities for success in a software development career. </p> 
                        <p>Manju has Completed KTH’s Software Development Academy-7 intensive 16 weeks software development course in May’2020. 
                            Improved her skills in ReactJS, HTML, CSS, Google Analytics Java, Spring Boot Framework, MySQL, Docker, Git & Maven. 
                            She holds a Bachelor of Technology in Electronics and communication engineering, where she was the secretary of the Fine Arts and hobby counsel. 
                            She has a strong sense of ownership and value creation and hopes to continue using her determination and critical thinking to be successful 
                            and highly sought after full stack developer.</p> 
                        <p>To hire Manju as an Employee or freelance full stack developer, email her at <em>mann.arya@gmail.com.</em></p>
                        <h1>MY VIDEO</h1>
                        <hr/>
                        <div className='player-wrapper'>
                            <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/Ir1SbbnCKYU'
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
