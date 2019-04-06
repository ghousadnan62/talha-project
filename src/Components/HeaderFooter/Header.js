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
    state = {
        drawerOpen: false,
        headerShow: false

    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () =>{
        if(window.scrollY>0){
            this.setState({
                headerShow:true
            })
        }else{
            this.setState({
                headerShow:false
            })
        }
    };


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
                    backgroundColor: this.state.headerShow? '#212121' : 'transparent',
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
                        <Button
                            onClick={()=>{console.log('About US')}}
                            color={"inherit"}>
                            ABOUT US
                        </Button>

                        <Button
                            onClick={()=>{console.log('SERVICES')}}
                            color={"inherit"}>
                            SERVICES
                        </Button>

                        <Button
                            onClick={()=>{console.log('OFFICE LOCATIONS')}}
                            color={"inherit"}>
                            OFFICE LOCATIONS
                        </Button>

                        <Button
                            onClick={()=>{console.log('OUR PROJECTS')}}
                            color={"inherit"}>
                            OUR PROJECTS
                        </Button>

                    </MediaQuery>


                </Toolbar>


            </AppBar>
        );
    }
}

export default Header;