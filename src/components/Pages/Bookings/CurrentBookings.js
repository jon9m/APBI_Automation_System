import React, { Component } from 'react';
import ReactTable from '../../Helpers/ReactTable';
import { connect } from 'react-redux';

import Spinner from '../../Helpers/Spinner/Spinner';
import { actionCreators } from '../../../store/actions';

class CurrentBookings extends Component {

    componentDidMount() {
        this.props.loadCurrentBookings();
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

        let currentBookings = <Spinner />;

        if (!this.props.loading) {
            currentBookings = <ReactTable
                data={this.props.currentBookings}
                columns={columns}
                defaultPageSize={10}
                filterable
                filerColumnId={'Reference_Number'}

                SubComponent={row => {
                    let subTable = null;
                    if (row.original.data) {
                        subTable = <div className={'SubTable'}>
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
                {currentBookings}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCurrentBookings: () => (dispatch(actionCreators.fetchCurrentBookings()))
    }
}

const mapStateToProps = state => {
    return {
        currentBookings: state.dashboardState.data,
        loading: state.dashboardState.isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBookings);