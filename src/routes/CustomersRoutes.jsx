import { lazy } from 'react';

const Customers = lazy(() => import('../pages/Masters/Customers/Index'));
const CustomerCreate = lazy(() => import('../pages/Masters/Customers/Create'));
const CustomerEdit = lazy(() => import('../pages/Masters/Customers/Edit'));

const CustomersRoutes = [
    {
        path: '/master/customer',
        title: 'Customers',
        component: Customers,
    },
    {
        path: '/master/customer/create',
        title: 'Create Customer',
        component: CustomerCreate,
    },
    {
        path: '/master/customer/:id/edit',
        title: 'Edit Customer',
        component: CustomerEdit,
    },
];

export default CustomersRoutes;
