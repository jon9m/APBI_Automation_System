import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { InfoboxProject } from '../UI/Infobox';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions';
import Loading from '../Helpers/Loading';

class Projects extends Component {
     componentDidMount() {
         this.props.dispatch(actionCreators.fetchProjects());
     }

    render() {
        let results = this.props.projects.map((project) => {
            return <InfoboxProject key={project.id} project={project} />
        });

        return (
            this.props.isFetching ? <div className="content-inner"><Loading /></div> :
           
                <div className="content-inner">
                    <div className="projects">
                        {results}
                    </div>
                </div>
         
        );
    }
}

Projects.propTypes = {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    projects: PropTypes.array.isRequired
};

export default connect((store) => {
    return {
        projects: store.projectState.data,
        pagination: store.projectState.pagination,
        isFetching: store.projectState.isFetching
    };
})(Projects)
