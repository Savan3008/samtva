import { lazy } from 'react';

const UnitTypes = lazy(() => import('../pages/Masters/UnitTypes/Index'));
const UnitTypeCreate = lazy(() => import('../pages/Masters/UnitTypes/Create'));
const UnitTypeEdit = lazy(() => import('../pages/Masters/UnitTypes/Edit'));

const UnitTypesRoutes = [
    {
        path: '/master/unit-type',
        title: 'Unit Types',
        component: UnitTypes,
    },
    {
        path: '/master/unit-type/create',
        title: 'Create Unit Type',
        component: UnitTypeCreate,
    },
    {
        path: '/master/unit-type/:id/edit',
        title: 'Edit Unit Type',
        component: UnitTypeEdit,
    },
];

export default UnitTypesRoutes;
