import React, { Component } from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

export default class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={3}>
                    <div>{this.props.skills}</div>
                </Cell>
                <Cell col={9}>
                    <ProgressBar style={{margin: 'auto', width: '60%'}} progress={this.props.progress} />
                </Cell>
            </Grid>
        )
    }
}
