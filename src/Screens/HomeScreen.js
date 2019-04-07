import React, {Component} from 'react';
import '../../App.css';




class HomeScreen extends Component {
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
            <div>

            </div>
        );
    }
}

export default HomeScreen;