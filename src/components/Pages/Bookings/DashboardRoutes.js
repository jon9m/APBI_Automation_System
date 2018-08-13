import NewBookings from './NewBookings';

export const dashboardRoutes = [
    {
        path: '/dashboard/newBookings',
        title: 'New Bookings',
        breadcrumb: 'New Bookings',
        breadcrumb_link: true,
        exact: true,
        component: NewBookings
    }
];