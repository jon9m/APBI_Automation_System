import * as types from './actionTypes';
import axios from '../../axios-instance';

export function fetchMembers() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_MEMBERS
        });

        axios.get('/data/members.json')
            .then((response) => {
                dispatch({
                    type: types.FETCHING_MEMBERS_SUCCESS,
                    data: response.data.members,
                    dataFetched: true,
                    pagination: response.pagination
                });
            });
    }
}
