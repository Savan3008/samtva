import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Icons from '../components/Icons';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '../images/logo.jpg';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );

    const navigations = [
        {
            title: 'Dashboard',
            link: '/',
            icon: 'user',
        },
        {
            title: 'Master',
            link: '/master',
            icon: 'menu',
            children: [
                {
                    title: 'Unit Types',
                    link: '/master/unit-type',
                    icon: 'menu',
                },
                {
                    title: 'Floors',
                    link: '/master/floor',
                    icon: 'menu',
                },
                {
                    title: 'Units',
                    link: '/master/unit',
                    icon: 'menu',
                },
                {
                    title: 'Banks',
                    link: '/master/bank',
                    icon: 'menu',
                },
                {
                    title: 'APF Loan Banks',
                    link: '/master/apf-loan-bank',
                    icon: 'menu',
                },
                {
                    title: 'Loan Agents',
                    link: '/master/loan-agent',
                    icon: 'menu',
                },
                {
                    title: 'Customers',
                    link: '/master/customer',
                    icon: 'menu',
                },
            ]
        },
    ]

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded');
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-65 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-center gap-4 px-6 py-5.5 lg:py-6.5">
                <NavLink to="/">
                    <img src={Logo} alt="Logo" width={150}/>
                </NavLink>
                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block text-left lg:hidden"
                >
                    <Icons name={`right-arrow`} />
                </button>
            </div>

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                    <div>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            {
                                navigations.map((nav, i) => {
                                    return (
                                        <>
                                            {
                                                nav?.children ?
                                                    <SidebarLinkGroup key={i}
                                                        activeCondition={
                                                            pathname === nav?.link || pathname.includes(nav?.link)
                                                        }
                                                    >
                                                        {(handleClick, open) => {
                                                            return (
                                                                <React.Fragment>
                                                                    <NavLink
                                                                        to="#"
                                                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === nav?.link ||
                                                                            pathname.includes(nav?.link)) &&
                                                                            'bg-graydark dark:bg-meta-4'
                                                                            }`}
                                                                        onClick={(e) => {
                                                                            e.preventDefault();
                                                                            sidebarExpanded
                                                                                ? handleClick()
                                                                                : setSidebarExpanded(true);
                                                                        }}
                                                                    >
                                                                        <Icons name={nav.icon} />
                                                                        {nav.title}
                                                                        <svg
                                                                            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'
                                                                                }`}
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                                                                fill=""
                                                                            />
                                                                        </svg>
                                                                    </NavLink>
                                                                    <div
                                                                        className={`translate transform overflow-hidden ${!open && 'hidden'
                                                                            }`}
                                                                    >
                                                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                                            {
                                                                                nav.children.map((child, index) => (
                                                                                    <li key={index}>
                                                                                        <NavLink
                                                                                            to={child.link}
                                                                                            className={({ isActive }) =>
                                                                                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                                                                (isActive && '!text-white')
                                                                                            }
                                                                                        >
                                                                                            {child.title}
                                                                                        </NavLink>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </React.Fragment>
                                                            );
                                                        }}
                                                    </SidebarLinkGroup > : <li key={i}>
                                                        <NavLink
                                                            to={nav.link}
                                                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 text-md font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes('/user') ? 'bg-graydark dark:bg-meta-4' : ''
                                                                }`}
                                                        >
                                                            <Icons name={nav.icon} />
                                                            {nav.title}
                                                        </NavLink>
                                                    </li>
                                            }
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div >
        </aside >
    );
};

export default Sidebar;
