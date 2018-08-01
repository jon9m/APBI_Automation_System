import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Aux from '../../Hoc/Auxi';

import navItems from './NavigationItems';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export default class Navigation extends Component {

    currNavItems = navItems;  //TODO  - use action creators and load during page init

    state = {
        menuExpandedItems: [],
        navigationItems: this.currNavItems
    }

    isLinkActive = () => {
        return false;
    }

    menuItemClickHandler = (itemId) => {
        console.log("menuItemClickHandler itemId " + itemId);
        this.setState({
            menuExpandedItems: [itemId]
        });

        //this.state.menuExpandedItems.push(itemId);  //Immutable ????
        console.dir(this.state.menuExpandedItems);
    }

    subMenuItemDisplayHandler = (subItemName) => {
        console.log("subMenuItemDisplayHandler subItemName " + subItemName);
        console.dir(this.state.menuExpandedItems);

        if (this.state.menuExpandedItems.indexOf(subItemName) >= 0) {
            return true;
        }
        return false;
    }

    render() {
        console.log("rendering sidebar......"); //TODO - set background color of parent div of selected  - #efefef
        const { navigationItems } = this.state;

        const navItems = Object.keys(navigationItems).map((igKey) => {
            return <Aux key={igKey}>
                <TransitionGroup>
                    <li onClick={() => this.menuItemClickHandler(navigationItems[igKey].id)}>
                        <NavLink isActive={this.isLinkActive} to={navigationItems[igKey].path} exact={true} activeClassName="active" style={{backgroundColor:'#d6d6d6'}}>
                            <i className="md-icon">{navigationItems[igKey].class}</i> <span>{navigationItems[igKey].title}</span>
                        </NavLink>
                    </li>
                    {
                        Object.keys(navigationItems[igKey].children).map((cKey) => {
                            return this.subMenuItemDisplayHandler(navigationItems[igKey].children[cKey].id) ?
                                <CSSTransition key={cKey} timeout={{ enter: 100, exit: 300 }} classNames="fade">
                                    <li key={cKey} className="submenuitems">
                                        <NavLink to={navigationItems[igKey].children[cKey].path} exact={true} activeClassName="active">
                                            <i className="sm-icon">{navigationItems[igKey].children[cKey].class}</i> <span>{navigationItems[igKey].children[cKey].title}</span>
                                        </NavLink>
                                    </li>
                                </CSSTransition>
                                : null
                        })
                    }
                </TransitionGroup>
            </Aux>
        });


        return (
            <div className="navigation">
                <ul>
                    {navItems}
                </ul>

                <strong>Additional Links</strong>

                <ul>
                    <li>
                        <NavLink to="/login" activeClassName="active">
                            <i className="md-icon">arrow_forward</i> <span>Login</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/icons" activeClassName="active">
                            <i className="md-icon">grid_on</i> <span>Icons</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/forms" activeClassName="active">
                            <i className="md-icon">input</i> <span>Forms</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
