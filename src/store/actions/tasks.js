import * as types from './actionTypes';
import axios from '../../axios-instance';

export function fetchTasks() {
  return (dispatch) => {
    dispatch({
      type: types.FETCHING_TASKS
    });

    axios.get('/data/tasks.json')
      .then((response) => {
        dispatch({
          type: types.FETCHING_TASKS_SUCCESS,
          data: response.data.tasks,
          dataFetched: true,
          pagination: response.pagination
        });
      });
  }
}
