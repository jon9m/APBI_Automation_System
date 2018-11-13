import * as types from './actionTypes';
import axios from '../../axios-instance';

export function fetchContacts() {
  return (dispatch) => {
    dispatch({
      type: types.FETCHING_CONTACTS
    });

    axios.get('/data/contacts.json')
      .then((response) => {
        dispatch({
          type: types.FETCHING_CONTACTS_SUCCESS,
          data: response.data.contacts,
          dataFetched: true,
          pagination: response.pagination
        });
      });
  }
}
