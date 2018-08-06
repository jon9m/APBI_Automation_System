import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Infobox from '../UI/Infobox';
import Loading from '../Helpers/Loading';

import { actionCreators } from '../../store/actions';

class Members extends Component {
    componentDidMount() {
        this.props.dispatch(actionCreators.fetchMembers());
    }

    render() {
        let results = this.props.members.map((member) => {
            return <Infobox key={member.id} member={member} />
        });

        return (
            this.props.isFetching ? <div className="content-inner"><Loading /></div> :
          
                    <div className="content-inner">
                        <div className="members">
                            {results}
                        </div>
                    </div>
             
        );
    }
}

Members.propTypes = {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    members: PropTypes.array.isRequired
};

export default connect((store) => {
    return {
        members: store.memberState.data,
        pagination: store.memberState.pagination,
        isFetching: store.memberState.isFetching
    };
})(Members)
