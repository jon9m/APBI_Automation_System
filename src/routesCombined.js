import { routes } from './routes';
import { dashboardRoutes } from './components/Pages/Bookings/DashboardRoutes';

export const combinedRoutes = [...routes, ...dashboardRoutes];