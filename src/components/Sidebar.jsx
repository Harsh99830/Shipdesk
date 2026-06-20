import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleToggle = () => setIsOpen(prev => !prev);
        const handleClose = () => setIsOpen(false);
        
        window.addEventListener('toggle-mobile-sidebar', handleToggle);
        window.addEventListener('close-mobile-sidebar', handleClose);
        
        // Close sidebar on route change on mobile
        handleClose();

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
        { path: '/rate-calculator', icon: 'calculate', label: 'Rate Calculator' },
        { path: '/finance', icon: 'payments', label: 'Finance & COD' },
        { path: '/billing', icon: 'receipt_long', label: 'Billing' },
        { path: '/price-list', icon: 'list_alt', label: 'Price List' },
        { path: '/integrations', icon: 'api', label: 'Integrations' },
        { path: '/resource-center', icon: 'menu_book', label: 'Resource Center' },
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
                    const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/dashboard');
                    return (
                        <Link 
                            key={item.path}
                            to={item.path} 
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ease-in-out ${
                                isActive 
                                    ? 'bg-secondary-container text-on-secondary-container shadow-sm border-l-4 border-secondary' 
                                    : 'text-primary-fixed-dim hover:bg-white/5 hover:text-white hover:translate-x-1'
                            }`}
                        >
                            <span className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${!isActive && 'group-hover:scale-110 group-hover:text-secondary'}`} data-icon={item.icon}>{item.icon}</span>
                            <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="mt-8">
                <button className="w-full bg-secondary-container text-on-secondary-container py-3 rounded-xl font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">redeem</span>
                    Refer &amp; Earn
                </button>
            </div>
        </aside>
        </>
    );
}
