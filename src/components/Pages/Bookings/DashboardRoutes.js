import NewBookings from './NewBookings';
import CurrentBookings from './CurrentBookings';
import PaymentPending from './PaymentPending';
import CompletedBookings from './CompletedBookings';
import CancelledBookings from './CancelledBookings';

export const dashboardRoutes = [
    {
        path: '/dashboard/newBookings',
        title: 'New Bookings',
        breadcrumb: 'New Bookings',
        breadcrumb_link: true,
        exact: true,
        component: NewBookings
    },
    {
        path: '/dashboard/currentBookings',
        title: 'Current Bookings',
        breadcrumb: 'Current Bookings',
        breadcrumb_link: true,
        exact: true,
        component: CurrentBookings
    },
    {
        path: '/dashboard/paymentPending',
        title: 'Payment Pending',
        breadcrumb: 'Payment Pending',
        breadcrumb_link: true,
        exact: true,
        component: PaymentPending
    },
    {
        path: '/dashboard/completedBookings',
        title: 'Completed Bookings',
        breadcrumb: 'Completed Bookings',
        breadcrumb_link: true,
        exact: true,
        component: CompletedBookings
    },
    {
        path: '/dashboard/cancelledBookings',
        title: 'Cancelled Bookings',
        breadcrumb: 'Cancelled Bookings',
        breadcrumb_link: true,
        exact: true,
        component: CancelledBookings
    }
];