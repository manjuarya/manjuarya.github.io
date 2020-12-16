import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    {/*Right Side*/}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img src="https://drive.google.com/uc?export=view&id=1JXOn65m0kG_zmKCKH_FoMsQKb4Glv0sY" alt="manju" className="manju-img"/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Manju Arya</h2>
                        <h4 style={{color: 'gray'}}>Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>•Completed Software Development Academy-7 intensive 16 weeks software development course May’2020. Skilled in Java, ReactJS, Spring Boot with Hibernate, MySQL, Git, Maven & Gradle. <br/>•Have bachelor’s degree in Electronics & Communication Engineering and have more than 12 years of experience working as Telecom Engineer. <br/>•Work experience in highly customer-oriented industry where the excellent customer service, teamwork & interpersonal relationship is paramount.</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>#123, Bandhagen, Stockholm</p>
                        <h5>Phone</h5>
                        <p>072 768 9251</p>
                        <h5>Email</h5>
                        <p>mann.arya@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://github.com/manjuarya</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    {/*Left Side*/}
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            endYear={2020}
                            schoolName={'SDA-7, KTH, Sweden'}
                            schoolDescription={'Software development'}
                        />
                        <Education
                            endYear={2005}
                            schoolName={'Electronics and Communication Engineering from Uttar Pradesh Technical, UP, India'}
                            schoolDescription={'B-Tech'}
                        />
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h2>Experience</h2>
                        <Experience 
                            startYear={"Feb'2020"}
                            endYear={'current'}
                            jobName={'Projects'}
                            jobDescription={'Worked on Projects during SDA, KTH and after'}
                        />
                        <Experience 
                            startYear={"Oct'2019"}
                            endYear={"Dec'2019"}
                            jobName={'Learning Swedish'}
                            jobDescription={'Learnt Svenska(SFINX) Intro C-level  from SIFA'}
                        />
                        <Experience 
                            startYear={"Nov'2006"}
                            endYear={"May'2019"}
                            jobName={'Telecom Officer, Bharat Sanchar Nigam Limited (BSNL), Lucknow and Bangalore, India'}
                            jobDescription={'BSNL is an Indian state-owned telecommunications company headquartered in New Delhi.•	Worked in fault repairing system of EWSD Switch, field work and marketing.•	Executed and supervised work related to numbers creation, shifting, modification and disconnection at Main Distribution Frame (MDF).•	Experience in operating, maintaining & supervising C-DOT MAX-XL Switch.•	Coordinator for opening Service Control Point (SCP) codes of BSNL and other private operator of India to all BSNL exchanges of Karnataka circle & made yearly targets of VAS for whole circle, followed up the achievements. •	Trained new team members on telecommunication operations.'}
                        />
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skills={'Java'}
                            progress={75}
                        />
                        <Skills 
                            skills={'JavaScript'}
                            progress={65}
                        />
                        <Skills 
                            skills={'ReactJs'}
                            progress={60}
                        />
                        <Skills 
                            skills={'MySQL'}
                            progress={50}
                        />
                        <Skills 
                            skills={'Git'}
                            progress={75}
                        />
                        <Skills 
                            skills={'Telecommunication systems knowledge'}
                            progress={85}
                        />
                        <Skills 
                            skills={'Agile & Scrum'}
                            progress={65}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
