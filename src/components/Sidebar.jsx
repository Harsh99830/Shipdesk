import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isRateCalcOpen, setIsRateCalcOpen] = useState(
        location.pathname.startsWith('/rate-calculator')
    );
    const [isFinanceOpen, setIsFinanceOpen] = useState(
        location.pathname.startsWith('/finance')
    );
    const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(
        location.pathname.startsWith('/integrations')
    );

    useEffect(() => {
        const handleToggle = () => setIsOpen(prev => !prev);
        const handleClose = () => setIsOpen(false);
        
        window.addEventListener('toggle-mobile-sidebar', handleToggle);
        window.addEventListener('close-mobile-sidebar', handleClose);
        
        // Close sidebar on route change on mobile
        handleClose();

        if (location.pathname.startsWith('/rate-calculator')) {
            setIsRateCalcOpen(true);
        }
        if (location.pathname.startsWith('/finance')) {
            setIsFinanceOpen(true);
        }
        if (location.pathname.startsWith('/integrations')) {
            setIsIntegrationsOpen(true);
        }

        return () => {
            window.removeEventListener('toggle-mobile-sidebar', handleToggle);
            window.removeEventListener('close-mobile-sidebar', handleClose);
        };
    }, [location.pathname]);

    const menuItems = [
        { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
        { path: '/my-orders', icon: 'package_2', label: 'My Orders' },
        { path: '/pickup-points', icon: 'location_on', label: 'Pickup Points' },
        { path: '/pickup-request', icon: 'add_box', label: 'Pickup Request' },
        { path: '/mop-request', icon: 'request_quote', label: 'MOP Request' },
        { path: '/weight-reconciliation', icon: 'balance', label: 'Weight Reconciliation' },
        { path: '/delivery-appointment', icon: 'calendar_today', label: 'Delivery Appointment' },
        { path: '/ndr', icon: 'report_problem', label: 'NDR & Exceptions' },
        { 
            icon: 'calculate', 
            label: 'Rate Calculator',
            subItems: [
                { path: '/rate-calculator/domestic', label: 'Domestic' },
                { path: '/rate-calculator/international', label: 'International' }
            ]
        },
        { 
            icon: 'payments', 
            label: 'Finance & COD',
            subItems: [
                { path: '/finance/wallet', label: 'Wallet' },
                { path: '/finance/cod-remittance', label: 'COD Remittance' },
                { path: '/finance/franchise-remittance', label: 'Franchise Remittance' }
            ]
        },
        { path: '/billing', icon: 'receipt_long', label: 'Billing' },
        { path: '/price-list', icon: 'list_alt', label: 'Price List' },
        { 
            icon: 'api', 
            label: 'Integrations',
            subItems: [
                { path: '/integrations/rest-apis', label: 'Rest APIs' },
                { path: '/integrations/plugins', label: 'Plugins' },
                { path: '/integrations/courier-integrations', label: 'Courier Integrations' }
            ]
        },
        { path: '/customer-support', icon: 'support_agent', label: 'Customer Support' }
    ];

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div 
                     className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                     onClick={() => setIsOpen(false)}
                />
            )}
            
            <aside className={`fixed left-0 top-0 h-screen w-[260px] bg-primary-container text-primary-fixed-dim z-50 flex flex-col py-6 px-4 overflow-y-auto rounded-r-3xl shadow-2xl border-r border-white/5 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="flex items-center gap-3 px-2 mb-10">
                <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-secondary-container">local_shipping</span>
                </div>
                <div>
                    <h1 className="font-headline-md text-headline-md font-bold text-white leading-none">SHIPDESK</h1>
                    <p className="text-[10px] font-label-caps tracking-widest text-on-primary-container mt-1">SHIPMENT SOLUTIONS</p>
                </div>
            </div>
            <nav className="flex-1 space-y-1">
                {menuItems.map((item) => {
                    if (item.subItems) {
                        const isSubActive = item.subItems.some(sub => location.pathname === sub.path);
                        const isCurrentOpen = 
                            item.label === 'Rate Calculator' ? isRateCalcOpen : 
                            item.label === 'Finance & COD' ? isFinanceOpen : 
                            isIntegrationsOpen;
                        const toggleCurrent = () => {
                            if (item.label === 'Rate Calculator') {
                                setIsRateCalcOpen(prev => !prev);
                            } else if (item.label === 'Finance & COD') {
                                setIsFinanceOpen(prev => !prev);
                            } else {
                                setIsIntegrationsOpen(prev => !prev);
                            }
                        };

                        return (
                            <div key={item.label} className="space-y-1">
                                <button
                                    onClick={toggleCurrent}
                                    className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ease-in-out ${
                                        isSubActive 
                                            ? 'bg-secondary-container/50 text-white font-semibold' 
                                            : 'text-primary-fixed-dim hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${!isSubActive && 'group-hover:scale-110 group-hover:text-secondary'}`} data-icon={item.icon}>{item.icon}</span>
                                        <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
                                    </div>
                                    <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isCurrentOpen ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                {isCurrentOpen && (
                                    <div className="pl-6 space-y-1 transition-all duration-300">
                                        {item.subItems.map((sub) => {
                                            const isLinkActive = location.pathname === sub.path;
                                            return (
                                                <Link
                                                    key={sub.path}
                                                    to={sub.path}
                                                    className={`flex items-center gap-3 rounded-l-full rounded-r-lg text-left text-[12px] font-medium tracking-wide transition-all ${
                                                        isLinkActive
                                                            ? 'text-white font-semibold bg-secondary-container pl-4 pr-3 py-2 border-l-4 border-secondary shadow-sm'
                                                            : 'text-primary-fixed-dim hover:text-white hover:bg-white/5 pl-4 pr-3 py-2'
                                                    }`}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                                                    <span>{sub.label}</span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/dashboard');
                    return (
                        <Link 
                            key={item.path}
                            to={item.path} 
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ease-in-out ${
                                isActive 
                                    ? 'text-white font-semibold border-l-4 border-secondary' 
                                    : 'text-primary-fixed-dim hover:bg-white/5 hover:text-white hover:translate-x-1'
                            }`}
                        >
                            <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${!isActive && 'group-hover:scale-110 group-hover:text-secondary'}`} data-icon={item.icon}>{item.icon}</span>
                            <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
        </>
    );
}
