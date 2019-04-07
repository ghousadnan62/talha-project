import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../App.css';
import ButtonComp from '../Utilities/ButtonComp'
import MediaQuery from 'react-responsive';
import IconButton from '@material-ui/core/IconButton';
import IconMenu from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'

class Header extends Component {

    state = {
        headerShow: this.props.headerVisible
    }

    render() {
        return (
            <AppBar
                position={'fixed'}
                style={{
                    backgroundColor: this.state.headerShow ? '#433D1D' : 'transparent',
                    boxShadow: 'none'
                }}
            >
                <Toolbar>
                    <div className={'HeaderContainer'}>
                        SHELTERS
                    </div>


                    {/*code for handling the smaller devices*/}
                    <MediaQuery query="(max-width: 620px)">
                        <IconButton
                            color={"inherit"}
                            onClick={() => this.toggleDrawer(true)}

                        >
                            <IconMenu/>
                        </IconButton>

                        <SideDrawer
                            open={this.state.drawerOpen}
                            onClose={(value) => this.toggleDrawer(value)}
                        />
                    </MediaQuery>


                    {/*Code for Handling larger devices*/}
                    <MediaQuery query="(min-width: 620px)">
                        <ButtonComp>
                            about us
                        </ButtonComp>

                    </MediaQuery>


                </Toolbar>


            </AppBar>
        );
    }
}

export default Header;