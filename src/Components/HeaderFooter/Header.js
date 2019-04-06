import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../../App.css'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


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
                        SHELTERS
                    </div>

                    <IconButton color={"inherit"} aria-label="Menu">
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;