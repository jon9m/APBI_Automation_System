import * as types from './actionTypes';
import axios from '../../axios-instance';

export function fetchProjects() {
    return (dispatch) => {
        dispatch({
            type: types.FETCHING_PROJECTS
        });

        axios.get('/data/projects.json')
            .then((response) => {
                dispatch({
                    type: types.FETCHING_PROJECTS_SUCCESS,
                    data: response.data.projects,
                    dataFetched: true,
                    pagination: response.pagination
                });
            });
    }
}
