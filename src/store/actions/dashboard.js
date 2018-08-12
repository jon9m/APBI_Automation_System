import * as types from './actionTypes';
import * as endpoints from '../../Shared/app-global';

export function fetchNewBookings() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_NEWBOOKINGS,
            isFetching: true
        });

        fetch(endpoints.API_NEW_BOOKONGS)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_NEWBOOKINGS_SUCCESS,
                    data: response.data,
                    isFetching: false
                });
            }).catch(err =>{
                dispatch({
                    type: types.FETCHING_NEWBOOKINGS_FAIL,
                    data: [],
                    isFetching: false
                });
            });
    }
}