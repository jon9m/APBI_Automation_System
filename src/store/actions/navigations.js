
import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const initNavigationItems = (workspace) => {
    // return dispatch => {
    //     //Async code
    //     axios.get('/data/navigationitems.json').then(response => {
    //         dispatch(loadNavigationItems(response.data));
    //     }).catch(err => {
    //         dispatch(loadNavigationItemsFail());
    //     });
    // };
    if(workspace !== 'apbi'){
        return {
            type: actionTypes.LOAD_NAVIGATION_ITEMS,
            navigationItems: []
        }
    }

    return dispatch => {
        fetch('/data/navigationitems.json')
            .then((response) => response.json())
            .then((response) => {
                console.dir(response.data);
                dispatch(loadNavigationItems(response.data));
            });
    }
}

export const loadNavigationItemsFail = () => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS_FAIL
    };
}

export const loadNavigationItems = (navigationItems) => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS,
        navigationItems: navigationItems
    }
}
