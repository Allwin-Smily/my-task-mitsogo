import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

export default function Router() {
  return useRoutes([
    { path: '/dashboard', element: <DashboardLayout /> },
    { path: '/home', element: <DashboardLayout /> },
    { path: '/inbox', element: <DashboardLayout /> },
    { path: '/products', element: <DashboardLayout /> },
    { path: '/admin', element: <DashboardLayout /> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
