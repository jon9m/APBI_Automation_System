import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import Auxi from '../../Hoc/Auxi';
import Spinner from '../Helpers/Spinner/Spinner';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

class Navigation extends Component {

    state = {
        menuExpandedItems: [],
        subMenuClickedItem: []
    }

    menuItemClickHandler = (itemId) => {
        console.log("menuItemClickHandler itemId " + itemId);
        if (this.state.menuExpandedItems.indexOf(itemId) >= 0) {
            this.setState((prevState) => {
                let oldState = [
                    ...prevState.menuExpandedItems
                ];
                oldState.splice(oldState.indexOf(itemId));

                return {
                    menuExpandedItems: oldState
                }
            });
        } else {
            this.setState({
                menuExpandedItems: [itemId]
            });
        }
    }

    subItemClickHandler = (itemId) => {
        console.log("sub menuItemClickHandler itemId " + itemId);
        if (this.state.subMenuClickedItem.indexOf(itemId) >= 0) {
            this.setState((prevState) => {
                let oldState = [
                    ...prevState.subMenuClickedItem
                ];
                oldState.splice(oldState.indexOf(itemId));

                return {
                    subMenuClickedItem: oldState
                }
            });
        } else {
            this.setState({
                subMenuClickedItem: [itemId]
            });
        }
    }

    isSubItemActive = (path) => {
        if (this.state.subMenuClickedItem.indexOf(path) >= 0) {
            return true;
        }
        return false;
    }

    subMenuItemDisplayHandler = (subItemName) => {
        if (this.state.menuExpandedItems.indexOf(subItemName) >= 0) {
            return true;
        }
        return false;
    }

    mainMenuItemHandleClick(e, children) {
        if (children && children.length > 0) {
            e.preventDefault();
        }
    }


    render() {
        let navItems = <Spinner />;

        console.dir("rendering sidebar......");
        const navigationItems = this.props.navigationItems;

        if (!this.props.loading) {
            navItems = Object.keys(navigationItems).map((igKey) => {
                return (
                    <Auxi key={igKey}>
                        <TransitionGroup>
                            <Auxi>
                                <li onClick={() => this.menuItemClickHandler(navigationItems[igKey].id)}>
                                    <NavLink
                                        onClick={(e) => this.mainMenuItemHandleClick(e, navigationItems[igKey].children)}
                                        to={navigationItems[igKey].path}
                                        exact={true}
                                        activeClassName="active"
                                        style={{ backgroundColor: '#4559641f' }}>
                                        <i className="md-icon">{navigationItems[igKey].class}</i><span>{navigationItems[igKey].title}</span>
                                    </NavLink>
                                </li>
                            </Auxi>
                            {
                                Object.keys(navigationItems[igKey].children).map((cKey) => {
                                    return this.subMenuItemDisplayHandler(navigationItems[igKey].children[cKey].id) ?
                                        (<CSSTransition key={cKey} timeout={{ enter: 100, exit: 300 }} classNames="fade">
                                            <li key={cKey} className="submenuitems" onClick={() => this.subItemClickHandler(navigationItems[igKey].children[cKey].path)}>
                                                <NavLink to={navigationItems[igKey].children[cKey].path} exact={true} activeClassName="active" isActive={() => this.isSubItemActive(navigationItems[igKey].children[cKey].path)}>
                                                    <i className="sm-icon">{navigationItems[igKey].children[cKey].class}</i> <span>{navigationItems[igKey].children[cKey].title}</span>
                                                </NavLink>
                                            </li>
                                        </CSSTransition>)
                                        : null
                                })
                            }
                        </TransitionGroup>
                    </Auxi>
                );
            });
        }


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


const mapStateToProps = state => {
    return {
        navigationItems: state.navigationState.navigationItems,
        loading: state.navigationState.loading
    }
}

export default connect(mapStateToProps, null)(Navigation);
