import Contacts from './components/Pages/Contacts';
import Dashboard from './components/Pages/Dashboard';
import Headquarters from './components/Pages/Headquarters';
import Icons from './components/Pages/Icons';
import Login from './components/Pages/Login';
import Invoice from './components/Pages/Invoice';
import Tasks from './components/Pages/Tasks';
import Members from './components/Pages/Members';
import Projects from './components/Pages/Projects';
import Forms from './components/Pages/Forms';
import Locations from './components/Pages/Locations';
import Communications from './components/Pages/Communications';
import TrainingCourses from './components/Pages/TrainingCourses';

export const routes = [
    {
        path: '/',
        title: 'Dashboard',
        breadcrumb: 'Dashboard',
        breadcrumb_link: true,
        exact: true,
        component: Dashboard,
    },
    {
        path: '/headquarters',
        title: 'Portal Setting',
        breadcrumb: 'Portal Setting',
        breadcrumb_link: true,
        exact: true,
        component: Headquarters,
    },
    {
        path: '/contacts',
        title: 'Contacts Management',
        breadcrumb: 'Contacts Management',
        breadcrumb_link: true,
        exact: true,
        component: Contacts
    },
    {
        path: '/invoice',
        title: 'User Management',
        breadcrumb: 'User Management',
        breadcrumb_link: false,
        exact: true,
        component: Invoice
    },
    {
        path: '/tasks',
        title: 'Tasks',
        breadcrumb: 'Tasks',
        breadcrumb_link: false,
        exact: true,
        component: Tasks
    },
    {
        path: '/members',
        title: 'Bookings',
        breadcrumb: 'Bookings',
        breadcrumb_link: false,
        exact: true,
        component: Members
    },
    {
        path: '/forms',
        title: 'Forms',
        breadcrumb: 'Forms',
        breadcrumb_link: false,
        exact: true,
        component: Forms
    },
    {
        path: '/icons',
        title: 'Icons',
        breadcrumb: 'Icons',
        breadcrumb_link: false,
        exact: true,
        component: Icons
    },
    {
        path: '/projects',
        title: 'Projects',
        breadcrumb: 'Projects',
        breadcrumb_link: false,
        exact: true,
        component: Projects
    },
    {
        path: '/login',
        title: 'Login',
        breadcrumb: 'Login',
        breadcrumb_link: false,
        exact: true,
        component: Login
    },
    {
        path: '/locations',
        title: 'Locations Management',
        breadcrumb: 'Locations Management',
        breadcrumb_link: false,
        exact: true,
        component: Locations
    },
    {
        path: '/communication',
        title: 'Communications',
        breadcrumb: 'Communications',
        breadcrumb_link: false,
        exact: true,
        component: Communications
    },
    {
        path: '/training',
        title: 'Training Course',
        breadcrumb: 'Training Course',
        breadcrumb_link: false,
        exact: true,
        component: TrainingCourses
    },
    {
        path: '/userspolicies',
        title: 'Users and Policies',
        breadcrumb: 'Users and Policies',
        breadcrumb_link: false,
        exact: true,
        component: Communications
    }
];