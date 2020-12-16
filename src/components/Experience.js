import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{fontSize: '15px'}}>{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <p style={{fontSize: '15px'}}>{this.props.jobDescription}</p>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                </Cell>
            </Grid>
        )
    }
}
