import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Header, List, Segment, Modal } from 'semantic-ui-react'
import { Navbar } from 'components'
import { connect } from "react-redux"
import * as styles from './DataBlocksStart.less'
import Com_00_01 from '../Com_00_01/Com_00_01'
import { action_apiCall } from '../../actions'

class DataBlocksStart extends Component{
    componentWillMount () {
        this.props.onGetData();
    }
    render() {
        const {bIsStart} = this.props;
        const leftItems = [
        // {
        //   as: 'a',
        //   content: 'Documentation',
        //   href: 'https://react.semantic-ui.com/',
        //   icon: 'book',
        //   key: 'docs',
        //   target: '_blank',
        // },
        ];
        const rightItems = [
        // {
        //   as: 'a',
        //   content: 'Github',
        //   href: 'https://github.com/Semantic-Org/Semantic-UI-React',
        //   icon: 'github',
        //   key: 'github',
        //   target: '_blank',
        // },
        // {
        //   as: 'a',
        //   content: 'Stack Overflow',
        //   icon: 'stack overflow',
        //   href: 'https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=votes',
        //   key: 'so',
        //   target: '_blank',
        // },
        ];
        return (
            <div>
                {!bIsStart && <Com_00_01></Com_00_01>}
                <Navbar leftItems={leftItems} rightItems={rightItems}>
                </Navbar>
                <Grid centered style={{marginTop: '200px'}}>
                    <Grid.Column computer={6} tablet={8} mobile={14}>    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button>Unclear</Button>
                        <Button>Interesting</Button>
                        <Button>Boring</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
      }
}
const mapStateToProps = state => ({
    bIsStart: state.get('bIsStart'),
});
const mapDispatchToProps = dispatch => ({
    onGetData: () => dispatch(action_apiCall())
});
export default connect(mapStateToProps, mapDispatchToProps)(DataBlocksStart)