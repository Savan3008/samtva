import { lazy } from 'react';

const ApfLoanBanks = lazy(() => import('../pages/Masters/ApfLoanBanks/Index'));
const ApfLoanBankCreate = lazy(() => import('../pages/Masters/ApfLoanBanks/Create'));
const ApfLoanBankEdit = lazy(() => import('../pages/Masters/ApfLoanBanks/Edit'));

const ApfLoanBanksRoutes = [
    {
        path: '/master/apf-loan-bank',
        title: 'ApfLoanBanks',
        component: ApfLoanBanks,
    },
    {
        path: '/master/apf-loan-bank/create',
        title: 'Create ApfLoanBank',
        component: ApfLoanBankCreate,
    },
    {
        path: '/master/apf-loan-bank/:id/edit',
        title: 'Edit ApfLoanBank',
        component: ApfLoanBankEdit,
    },
];

export default ApfLoanBanksRoutes;
