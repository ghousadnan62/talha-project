import React from 'react';
import Drawer from '@material-ui/core/Drawer/index';
import List from '@material-ui/core/List/index';
import ListItem from '@material-ui/core/ListItem/index';
import Divider from '@material-ui/core/Divider/index'


const SideDrawer = (props) => {
    return (
        <div >
            <Drawer
                style={{backgroundColor:'blue'}}
                anchor={"right"}
                open={props.open}
                onClose={() => props.onClose(false)}
                classes={{
                    paper: "black"
                }}
            >
                <List component='nav'>

                    <ListItem button onClick={() => console.log('About Us')}>
                        ABOUT US
                    </ListItem>
                    <Divider/>


                    <ListItem button onClick={() => console.log('Services')}>
                        SERVICES
                    </ListItem>
                    <Divider/>

                    <ListItem button onClick={() => console.log('Offices')}>
                        LOCATIONS
                    </ListItem>
                    <Divider/>

                    <ListItem button onClick={() => console.log('Project')}>
                        PROJECTS
                    </ListItem>
                    <Divider/>

                    <ListItem button onClick={() => console.log('Project')}>
                        OUR ASSOCIATES
                    </ListItem>
                    <Divider/>

                    <ListItem button onClick={() => console.log('Project')}>
                        BLOG
                    </ListItem>
                    <Divider/>


                </List>

            </Drawer>
        </div>
    );
};

export default SideDrawer;