import { lazy } from 'react';

const Banks = lazy(() => import('../pages/Masters/Banks/Index'));
const BankCreate = lazy(() => import('../pages/Masters/Banks/Create'));
const BankEdit = lazy(() => import('../pages/Masters/Banks/Edit'));

const BanksRoutes = [
    {
        path: '/master/bank',
        title: 'Banks',
        component: Banks,
    },
    {
        path: '/master/bank/create',
        title: 'Create Bank',
        component: BankCreate,
    },
    {
        path: '/master/bank/:id/edit',
        title: 'Edit Bank',
        component: BankEdit,
    },
];

export default BanksRoutes;
