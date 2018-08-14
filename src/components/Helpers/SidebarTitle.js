import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { actionCreators } from '../../store/actions';

class SidebarTitle extends Component {
    toggleBodyClass() {
        document.body.classList.toggle('sidebar-title-content-open');
    }

    removeBodyClass() {
        document.body.classList.remove('sidebar-title-content-open');
    }

    redirectToRoot = () => {
        this.props.history.push({
            pathname: '/'
        });
    }

    changeWorkSpaceHandler(workspace) {
        this.redirectToRoot();
        this.removeBodyClass();
        this.props.onChangeWorkspace(workspace);
    }

    render() {
        return (
            <h1 className="sidebar-title-wrapper">
                <div className="sidebar-title-inner" onClick={this.toggleBodyClass.bind(this)}>
                    <div className="sidebar-subtitle">Switch Workspace</div>
                    <div className="sidebar-title">System Admin</div>

                    <div className="sidebar-action">
                        <i className="md-icon">arrow_drop_down</i>
                    </div>
                </div>

                <div className="sidebar-title-content">
                    {/* <div className="sidebar-title-content-label">
                        Switch Workspace
                    </div> */}

                    <div className="sidebar-title-content-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search " />
                            </div>
                        </form>
                        <ul>
                            <li onClick={() => this.changeWorkSpaceHandler('apbi')}>APBI</li>
                            <li onClick={() => this.changeWorkSpaceHandler('x')}>Leath Furniture</li>
                            <li onClick={() => this.changeWorkSpaceHandler('a')}>Grade A Investment</li>
                            <li onClick={() => this.changeWorkSpaceHandler('b')}>Desmonds Formal Wear</li>
                            <li onClick={() => this.changeWorkSpaceHandler('c')}>Dun Rite Lawn Maintenance</li>
                            <li onClick={() => this.changeWorkSpaceHandler('d')}>Red Robin Stores</li>
                            <li onClick={() => this.changeWorkSpaceHandler('e')}>Gino's Hamburgers</li>
                            <li onClick={() => this.changeWorkSpaceHandler('f')}>Wholesale Club, Inc.</li>
                        </ul>

                        {/* <div className="sidebar-title-content-body-more">
                            Show All Companies
                        </div> */}
                    </div>
                </div>
            </h1>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeWorkspace: (workspace) => {
            dispatch(actionCreators.loadNavigationItems(workspace));
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(SidebarTitle));