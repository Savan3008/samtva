import { lazy } from 'react';

const LoanAgents = lazy(() => import('../pages/Masters/LoanAgents/Index'));
const LoanAgentCreate = lazy(() => import('../pages/Masters/LoanAgents/Create'));
const LoanAgentEdit = lazy(() => import('../pages/Masters/LoanAgents/Edit'));

const LoanAgentsRoutes = [
    {
        path: '/master/loan-agent',
        title: 'LoanAgents',
        component: LoanAgents,
    },
    {
        path: '/master/loan-agent/create',
        title: 'Create LoanAgent',
        component: LoanAgentCreate,
    },
    {
        path: '/master/loan-agent/:id/edit',
        title: 'Edit LoanAgent',
        component: LoanAgentEdit,
    },
];

export default LoanAgentsRoutes;
