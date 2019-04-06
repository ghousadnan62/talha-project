import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../App.css';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';
import IconButton from '@material-ui/core/IconButton';
import IconMenu from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'

class Header extends Component {
    state={
        drawerOpen: false,

    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }


    render() {
        return (
            <AppBar
                position={'fixed'}
                style={{
                    backgroundColor: '#212121',
                    boxShadow: 'none'
                }}
            >
                <Toolbar>
                    <div className={'HeaderContainer'}>
                        SHELTERS
                    </div>


                    {/*code for handling the smaller devices*/}
                    <MediaQuery query="(max-width: 600px)">
                        <IconButton
                            color={"inherit"}
                            onClick = {()=>this.toggleDrawer(true)}

                        >
                            <IconMenu/>
                        </IconButton>

                        <SideDrawer
                            open={this.state.drawerOpen}
                            onClose={(value)=> this.toggleDrawer(value)}
                        />
                    </MediaQuery>


                    {/*Code for Handling larger devices*/}
                    <MediaQuery query="(min-width: 600px)">
                        <Button color={"inherit"}>ABOUT US</Button>
                        <Button color={"inherit"}>SERVICES</Button>
                        <Button color={"inherit"}>OFFICES</Button>
                        <Button color={"inherit"}>PROJECTS</Button>
                    </MediaQuery>


                </Toolbar>


            </AppBar>
        );
    }
}

export default Header;