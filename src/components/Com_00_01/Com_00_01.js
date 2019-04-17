import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Button } from 'semantic-ui-react'
import { CustomButton } from 'components'
import * as styles from './Com_00_01.less'
import { action_startTesting } from '../../actions'
import { connect } from "react-redux"

class Com_00_01 extends Component{
    componentWillMount () {
    }
    onStartTest = () => {
        const { onStartTesting } = this.props;
        onStartTesting();
    }
    render() {
        return (
            <div>
                <div className={styles.modal_back}></div>
                <Grid style={{marginTop: '200px'}} className={styles.modal_start}>
                    <Grid.Column computer={14} tablet={16} mobile={16}>
                        <div className={styles.modal_content}>
                            <Header as='h2'>{this.props.jsonData[0] == undefined? '' : this.props.jsonData[0].Title}</Header>
                            <p className="mb40">{this.props.jsonData[0] == undefined? '' : this.props.jsonData[0].Description}</p>
                            <Button className={styles.blackbtn} onClick={this.onStartTest}>{this.props.jsonData[0] == undefined? '' : this.props.jsonData[0].BtnText}</Button>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    bIsStart: state.get('bIsStart'),
    jsonData: state.get('jsonData')
});
const mapDispatchToProps = dispatch => ({
    onStartTesting: () => dispatch(action_startTesting())
});
export default connect(mapStateToProps, mapDispatchToProps)(Com_00_01)