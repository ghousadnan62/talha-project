import React from 'react';
import Drawer from '@material-ui/core/Drawer/index';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import Divider from '@material-ui/core/Divider/index'

import {NavLink} from "react-router-dom";

const SideDrawer = (props) => {
    return (
        <div >
            <Drawer
                anchor={"right"}
                open={props.open}
                onClose={() => props.onClose(false)}
                classes={{
                    paper: "black"
                }}
            >
                <List component='nav'>

                    <ListItem>
                        <NavLink to={"/AboutUs"}>ABOUT US</NavLink>
                    </ListItem>
                    <Divider/>


                    <ListItem>
                        <NavLink to={"/OurServices"}>SERVICES</NavLink>
                    </ListItem>
                    <Divider/>

                    <ListItem>
                        <NavLink to={"/Locations"}>LOCATIONS</NavLink>
                    </ListItem>
                    <Divider/>

                    <ListItem >
                        <NavLink to={"/Projects"}>PROJECTS</NavLink>
                    </ListItem>
                    <Divider/>

                    <ListItem>
                        <NavLink to={"/OurAssociates"}>OUR ASSOCIATES</NavLink>
                    </ListItem>
                    <Divider/>

                    <ListItem>
                        <NavLink to={"/Blog"}>BLOG</NavLink>
                    </ListItem>
                    <Divider/>


                </List>

            </Drawer>
        </div>
    );
};

export default SideDrawer;