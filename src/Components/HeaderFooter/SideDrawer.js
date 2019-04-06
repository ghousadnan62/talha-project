import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider'


const SideDrawer = (props) => {
    return (

        <Drawer
            anchor={"right"}
            open={props.open}
            onClose={() => props.onClose(false)}
            classes={{
                paper:"black"
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
                    OFFICE LOCATIONS
                </ListItem>
                <Divider/>

                <ListItem button onClick={() => console.log('Project')}>
                    OUR PROJECTS
                </ListItem>
                <Divider/>


            </List>

        </Drawer>

    );
};

export default SideDrawer;