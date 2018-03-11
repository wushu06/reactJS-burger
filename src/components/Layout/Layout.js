import React, {Component} from 'react';
import Auxx from '../../hoc/Auxx';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrwaerToggle = () => {
        this.setState( (prevState)  => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render (){
        return(
            <Auxx>
                <Toolbar drawerToggleClicked={this.sideDrwaerToggle}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <div>sidebar </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        )
    }


}

export default Layout;