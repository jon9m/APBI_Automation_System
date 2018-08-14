export const BASE_URL = 'http://34.251.200.88:8080';
export const API_ENDPOINT = BASE_URL + '/controlPanel';
//-----------------------------------------------------

//DEV
export const API_NAVIGATION_ITEMS = '/data/navigationitems.json';
export const API_NEW_BOOKINGS = '/data/newBookings.json';
export const API_CURRENT_BOOKINGS = '/data/currentBookings.json';
export const API_PAYMENTPENDINGS = '/data/paymentPendings.json';
export const API_COMPLETED_BOOKINGS = '/data/completedBookings.json';
export const API_CANCELLED_BOOKINGS = '/data/cancelledBookings.json';

//TEST
// export const API_NAVIGATION_ITEMS = BASE_URL + '/adminConsole/data/navigationitems.json';
// export const API_NEW_BOOKINGS = API_ENDPOINT + '/cpLoadBookings?type=conp&draw=1&start=0&length=100&search[value]';
// export const API_CURRENT_BOOKINGS = API_ENDPOINT + '/cpLoadBookings?type=insp&draw=1&start=0&length=100&search[value]';
// export const API_PAYMENTPENDINGS = API_ENDPOINT + '/cpLoadBookings?type=payp&draw=1&start=0&length=100&search[value]';
// export const API_COMPLETED_BOOKINGS = API_ENDPOINT + '/cpLoadBookings?type=completed&draw=1&start=0&length=100&search[value]';
// export const API_CANCELLED_BOOKINGS = API_ENDPOINT + '/cpLoadBookings?type=cancelled&draw=1&start=0&length=100&search[value]';