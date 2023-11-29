import { lazy } from 'react';

const Floors = lazy(() => import('../pages/Masters/Floors/Index'));
const FloorCreate = lazy(() => import('../pages/Masters/Floors/Create'));
const FloorEdit = lazy(() => import('../pages/Masters/Floors/Edit'));

const FloorsRoutes = [
    {
        path: '/master/floor',
        title: 'Floors',
        component: Floors,
    },
    {
        path: '/master/floor/create',
        title: 'Create Floor',
        component: FloorCreate,
    },
    {
        path: '/master/floor/:id/edit',
        title: 'Edit Floor',
        component: FloorEdit,
    },
];

export default FloorsRoutes;
