import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{fontSize: '15px'}}>{this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <p style={{fontSize: '15px'}}>{this.props.schoolDescription}</p>
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                </Cell>
            </Grid>
        )
    }
}
