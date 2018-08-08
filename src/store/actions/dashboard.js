import * as types from './actionTypes';

export function fetchNewBookings() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_NEWBOOKINGS,
            isFetching: true
        });

        fetch('/data/newBookings.json')
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: types.FETCHING_NEWBOOKINGS_SUCCESS,
                    data: response.data,
                    isFetching: false
                });
            });
    }
}