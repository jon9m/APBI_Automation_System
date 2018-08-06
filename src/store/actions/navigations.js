
import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const loadNavigationItems = (workspace) => {
    // return dispatch => {
    //     //Async code
    //     axios.get('/data/navigationitems.json').then(response => {
    //         dispatch(loadNavigationItemsSucces(response.data));
    //     }).catch(err => {
    //         dispatch(loadNavigationItemsFail());
    //     });
    // };
    if (workspace !== 'apbi') {
        return {
            type: actionTypes.LOAD_NAVIGATION_ITEMS,
            navigationItems: []
        }
    }

    return dispatch => {

        dispatch(loadNavigationItemsStarts());

        fetch('/data/navigationitems.json')   //TODO 
            .then((response) => response.json())
            .then((response) => {
                console.dir(response.data);
                dispatch(loadNavigationItemsSucces(response.data));
            });
    }
}

export const loadNavigationItemsStarts = () => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS_START
    };
}

export const loadNavigationItemsFail = () => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS_FAIL
    };
}

export const loadNavigationItemsSucces = (navigationItems) => {
    return {
        type: actionTypes.LOAD_NAVIGATION_ITEMS,
        navigationItems: navigationItems
    }
}
