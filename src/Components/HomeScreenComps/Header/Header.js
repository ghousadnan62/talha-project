import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import '../../../App.css';
import MediaQuery from 'react-responsive';
import IconButton from '@material-ui/core/IconButton';
import IconMenu from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'
import {ScreenBreakPoint1} from '../../Utilities/ScreenBreakPoint'
import {NavLink} from "react-router-dom";


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
                    backgroundColor: this.state.headerShow ? '#281e11' : '#281e11',
                    boxShadow: 'none'
                }}
            >
                <Toolbar>
                    <div className={'headerContainer'}>
                        <NavLink to={"/"} className={'linkStyling'}>SHELTERS</NavLink>
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
                        <div style={{
                            display:'flex',
                            flexDirection:'row'
                        }}>

                            <div className={"headingPadding"}><NavLink to={"/AboutUs"} className={'linkStyling robotoFont'}>ABOUT US</NavLink></div>

                            <div className={"headingPadding"}><NavLink to={"/OurServices"} className={'linkStyling robotoFont'}>SERVICES</NavLink></div>

                            <div className={"headingPadding"}><NavLink to={"/Locations"} className={'linkStyling robotoFont'}>LOCATIONS</NavLink></div>

                            <div className={"headingPadding"}><NavLink to={"/Projects"} className={'linkStyling robotoFont'}>PROJECTS</NavLink></div>

                            <div className={"headingPadding"}><NavLink to={"/OurAssociates"} className={'linkStyling robotoFont'}>OUR ASSOCIATES</NavLink></div>

                            <div className={"headingPadding"}><NavLink to={"/Blog"} className={'linkStyling robotoFont'}>BLOG</NavLink></div>

                        </div>
                    </MediaQuery>


                </Toolbar>


            </AppBar>
        );
    }
}

export default Header;