import React, { Component } from 'react';
import ReactTable from '../../Helpers/ReactTable';
import { connect } from 'react-redux';

import Spinner from '../../Helpers/Spinner/Spinner';
import { actionCreators } from '../../../store/actions';

class CompletedBookings extends Component {

    componentDidMount() {
        this.props.loadCompletedBookings();
    }

    render() {

        const columns = [
            {
                Header: 'Reference Number',
                accessor: 'Reference_Number'
            },
            {
                Header: 'Date Time',
                accessor: 'Date_Time'
            },
            {
                Header: 'Client',
                accessor: 'Client'
            },
            {
                Header: 'Client phone',
                accessor: 'Client_phone'
            },
            {
                Header: 'Property Address',
                accessor: 'Property_Address'
            },
            {
                Header: 'Building Type',
                accessor: 'Building_Type'
            },
            {
                Header: 'Building Size',
                accessor: 'Building_Size'
            },
            {
                Header: 'Inspection Type',
                accessor: 'Inspection_Type'
            }
        ];

        const subcolumns = [
            {
                Header: 'Date Time',
                accessor: 'Date_Time'
            },
            {
                Header: 'Status',
                accessor: 'Status'
            },
            {
                Header: 'Inspection Type',
                accessor: 'Inspection_Type'
            }
        ];

        let completedBookings = <Spinner />;

        if (!this.props.loading) {
            completedBookings = <ReactTable
                data={this.props.completedBookings}
                columns={columns}
                defaultPageSize={10}
                filterable

                SubComponent={row => {
                    let subTable = null;
                    if (row.original.data) {
                        subTable = <div style={{ padding: "20px" }}>
                            <ReactTable
                                data={row.original.data}
                                columns={subcolumns}
                                defaultPageSize={row.original.data.length}
                                showPagination={false}
                            />
                        </div>;
                    }
                    return (subTable);
                }}
            />;
        }

        return (
            <div className="box">
                {completedBookings}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCompletedBookings: () => (dispatch(actionCreators.fetchCompletedBookings()))
    }
}

const mapStateToProps = state => {
    return {
        completedBookings: state.dashboardState.data,
        loading: state.dashboardState.isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedBookings);