import { lazy } from 'react';

import UnitTypesRoutes from './UnitTypesRoutes';
import FloorsRoutes from './FloorsRoutes';
import UnitsRoutes from './UnitsRoutes';
import BanksRoutes from './BanksRoutes';
import ApfLoanBanksRoutes from './ApfLoanBanksRoutes';
import LoanAgentsRoutes from './LoanAgentsRoutes';
import CustomersRoutes from './CustomersRoutes';

const Dashboard = lazy(() => import('../pages/Dashboard'));

const coreRoutes = [
  {
    path: '/',
    title: 'Dashboard',
    component: Dashboard,
  }
];

const routes = [
  ...coreRoutes,
  ...UnitTypesRoutes,
  ...FloorsRoutes,
  ...UnitsRoutes,
  ...BanksRoutes,
  ...ApfLoanBanksRoutes,
  ...LoanAgentsRoutes,
  ...CustomersRoutes,
];
export default routes;
