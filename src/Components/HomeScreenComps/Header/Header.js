import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import '../../../App.css';
import ButtonComp from '../../Utilities/ButtonComp'
import MediaQuery from 'react-responsive';
import IconButton from '@material-ui/core/IconButton';
import IconMenu from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'
import {ScreenBreakPoint1} from '../../Utilities/ScreenBreakPoint'

class Header extends Component {

    //setting state
    state = {
        drawerOpen: false,
        headerShow: false

    };

    // Attaching scroll listener to the window
    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }


    // function to change state upon scroll
    scrollHandler = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    };


    //functions to handle the drawer opening and closing
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    };


    render() {
        return (
            <AppBar
                position={'fixed'}
                style={{
                    backgroundColor: this.state.headerShow ? '#281e11' : 'transparent',
                    boxShadow: 'none'
                }}
            >
                <Toolbar>
                    <div className={'headerContainer'}>
                        SHELTERS
                    </div>


                    {/*code for handling the smaller devices*/}
                    <MediaQuery maxWidth={ScreenBreakPoint1}>
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
                    <MediaQuery minWidth={ScreenBreakPoint1}>
                        <ButtonComp>
                            about us
                        </ButtonComp>

                        <ButtonComp>
                            services
                        </ButtonComp>

                        <ButtonComp>
                            locations
                        </ButtonComp>

                        <ButtonComp>
                            projects
                        </ButtonComp>

                        <ButtonComp>
                            our associates
                        </ButtonComp>

                        <ButtonComp>
                            Blog
                        </ButtonComp>

                    </MediaQuery>


                </Toolbar>


            </AppBar>
        );
    }
}

export default Header;