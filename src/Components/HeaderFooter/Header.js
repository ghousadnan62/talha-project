import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../App.css'
import MenuIcon from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'


class Header extends Component {
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

                        <div className={'HeaderHeading'}>
                            SELTERS
                        </div>

                        <div className={'HeaderSubHeading'}>
                            ENGINEERING SERVICES
                        </div>

                    </div>

                    <Button color={"inherit"}>About Us</Button>
                    <Button color={"inherit"}>Service</Button>
                    <Button color={"inherit"}>Location</Button>
                    <Button color={"inherit"}>Projects</Button>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;