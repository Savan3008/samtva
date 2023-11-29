import { lazy } from 'react';

const Units = lazy(() => import('../pages/Masters/Units/Index'));
const UnitCreate = lazy(() => import('../pages/Masters/Units/Create'));
const UnitEdit = lazy(() => import('../pages/Masters/Units/Edit'));

const UnitsRoutes = [
    {
        path: '/master/unit',
        title: 'Units',
        component: Units,
    },
    {
        path: '/master/unit/create',
        title: 'Create Unit',
        component: UnitCreate,
    },
    {
        path: '/master/unit/:id/edit',
        title: 'Edit Unit',
        component: UnitEdit,
    },
];

export default UnitsRoutes;
