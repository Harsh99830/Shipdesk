import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';


export default function Dashboard() {
    useEffect(() => {
        // Micro-interactions and interactions logic
        const elements = document.querySelectorAll('a, button');
        const mousedownHandler = function() { this.classList.add('scale-95'); };
        const mouseupHandler = function() { this.classList.remove('scale-95'); };
        const mouseleaveHandler = function() { this.classList.remove('scale-95'); };

        elements.forEach(el => {
            el.addEventListener('mousedown', mousedownHandler);
            el.addEventListener('mouseup', mouseupHandler);
            el.addEventListener('mouseleave', mouseleaveHandler);
        });

        return () => {
            elements.forEach(el => {
                el.removeEventListener('mousedown', mousedownHandler);
                el.removeEventListener('mouseup', mouseupHandler);
                el.removeEventListener('mouseleave', mouseleaveHandler);
            });
        };
    }, []);

    return (
        <div className="bg-background text-on-background min-h-screen">
            <Sidebar />

            {/* Top App Bar */}
            <Topbar className="fixed top-0 left-[260px] right-0" />


            {/* Main Content Area */}
            <main className="ml-[260px] mt-16 p-8 min-h-screen bg-background">
                {/* Hero Section */}
                <div className="mb-10 flex justify-between items-end">
                    <div>
                        <h2 className="font-display-lg text-display-lg text-primary">Welcome!</h2>
                        <p className="font-headline-md text-headline-md text-on-primary-fixed-variant mt-1">Prakhar Sharma</p>
                    </div>
                    <div className="bg-secondary-container/10 border border-secondary/20 px-4 py-2 rounded-lg">
                        <span className="text-secondary font-bold">Today's Orders: 0</span>
                    </div>
                </div>

                {/* Bento Grid: Quick Actions & Plans */}
                <div className="grid grid-cols-12 gap-gutter mb-gutter">
                    {/* Quick Action Grid */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-6 gap-4">
                        <div className="col-span-1 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant hover:shadow-lg transition-all text-center cursor-pointer group">
                            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">calculate</span>
                            </div>
                            <span className="text-[11px] font-bold block leading-tight">Rate Calculator</span>
                        </div>
                        <div className="col-span-1 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant hover:shadow-lg transition-all text-center cursor-pointer group">
                            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">wallet</span>
                            </div>
                            <span className="text-[11px] font-bold block leading-tight">Wallet Recharge</span>
                        </div>
                        <div className="col-span-1 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant hover:shadow-lg transition-all text-center cursor-pointer group">
                            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">balance</span>
                            </div>
                            <span className="text-[11px] font-bold block leading-tight">Weight Dispute</span>
                        </div>
                        <div className="col-span-1 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant hover:shadow-lg transition-all text-center cursor-pointer group">
                            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">add_box</span>
                            </div>
                            <span className="text-[11px] font-bold block leading-tight">Order Creation</span>
                        </div>
                        <div className="col-span-1 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant hover:shadow-lg transition-all text-center cursor-pointer group">
                            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <span className="text-[11px] font-bold block leading-tight">Pickup Points</span>
                        </div>
                        <div className="col-span-1 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant hover:shadow-lg transition-all text-center cursor-pointer group">
                            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <span className="text-[11px] font-bold block leading-tight">Pickup Request</span>
                        </div>

                        {/* Pickup Banner */}
                        <div className="col-span-6 relative h-48 bg-primary-container rounded-2xl overflow-hidden flex items-center px-10">
                            <div className="absolute inset-0 opacity-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-white font-headline-lg text-headline-lg">Streamline Your Shipping</h3>
                                <p className="text-on-primary-container text-body-lg mb-6">Schedule your pickups with a single click and track in real-time.</p>
                                <button className="bg-tertiary-fixed text-on-tertiary-fixed px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined">add</span>
                                    Add Pickup Request
                                </button>
                            </div>
                            <div className="absolute right-10 bottom-0 w-64 h-40">
                                <img className="w-full h-full object-contain" data-alt="A stylized 3D isometric illustration of a modern delivery truck" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kqIX1tnD6J1jmgVjsgBnUXoNEBPOIFE3dqAFFjOrZZZIHPqHWQugdP2uEfC-Wv21AxkAxp4KeerC5o4cbWLzVyebv4Rm4XuitUx-zYU-BAyMx2sXD_RwuGrfNSLzBR5ygD_Lzr4d8KJZwSwDg3KBN8M9HxSQzMO8NUUoU9DYPT_Nat9rZChd1sdWQNp1bvJwi8ERXjfe9eBleAFJDwRqE3zes4SZO5TEhyf7wRqQ03tNyhxmCDCUe1BkFYr9-jvfDS4aUw31ASMP" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Our Plans Section */}
                    <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-outline-variant">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="font-headline-md text-headline-md">Our Plans</h4>
                            <button className="text-secondary font-bold text-body-md flex items-center gap-1">
                                View All <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-secondary p-4 rounded-xl text-white text-center">
                                <p className="text-[10px] font-label-caps opacity-80 mb-1">BASIC PLAN</p>
                                <p className="font-bold text-lg">Free</p>
                            </div>
                            <div className="bg-primary-container p-4 rounded-xl text-white text-center">
                                <p className="text-[10px] font-label-caps opacity-80 mb-1">STARTUP</p>
                                <p className="font-bold text-lg">₹ 999</p>
                            </div>
                            <div className="bg-secondary-container p-4 rounded-xl text-white text-center">
                                <p className="text-[10px] font-label-caps opacity-80 mb-1">SME</p>
                                <p className="font-bold text-lg">₹ 2499</p>
                            </div>
                            <div className="bg-[#ba1a1a] p-4 rounded-xl text-white text-center">
                                <p className="text-[10px] font-label-caps opacity-80 mb-1">ENTERPRISE</p>
                                <p className="font-bold text-lg">₹ 4999</p>
                            </div>
                        </div>
                        <button className="w-full bg-tertiary-fixed text-on-tertiary-fixed py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Upgrade Shipping Plan
                        </button>
                    </div>
                </div>

                {/* Middle Row: Latest Orders & Promo */}
                <div className="grid grid-cols-12 gap-gutter mb-gutter">
                    {/* Latest Orders Table */}
                    <div className="col-span-12 lg:col-span-9 bg-white rounded-2xl border border-outline-variant overflow-hidden">
                        <div className="p-6 border-b border-outline-variant flex justify-between items-center">
                            <h4 className="font-headline-md text-headline-md">Latest Orders</h4>
                            <button className="bg-surface-container-high px-4 py-1.5 rounded-full text-body-md font-medium">See All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-surface-bright text-on-surface-variant font-label-caps text-[12px] uppercase">
                                    <tr>
                                        <th className="px-6 py-4">LR/AWB NO</th>
                                        <th className="px-6 py-4">CONSIGNEE</th>
                                        <th className="px-6 py-4">MANIFESTED ON</th>
                                        <th className="px-6 py-4">STATUS</th>
                                        <th className="px-6 py-4">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant">
                                    <tr className="hover:bg-surface-container-lowest transition-colors">
                                        <td className="px-6 py-12 text-center text-on-surface-variant italic" colSpan="5">
                                            No recent orders found. Start shipping now!
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Early COD Card */}
                    <div className="col-span-12 lg:col-span-3 space-y-gutter">
                        <div className="bg-tertiary-fixed-dim/20 border border-tertiary-fixed-dim p-6 rounded-2xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="font-bold text-on-tertiary-fixed-variant mb-2">Early COD Remittance</h4>
                                <p className="text-sm text-on-tertiary-fixed-variant/70 mb-6 leading-relaxed">Weekly COD payouts to boost your business cash flow.</p>
                                <button className="bg-white text-on-tertiary-fixed-variant px-4 py-2 rounded-lg font-bold text-sm shadow-sm">Get Started</button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 grayscale group-hover:grayscale-0 transition-all">
                                <img className="w-full h-full object-contain" data-alt="A high-quality 3D rendered human character" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB60Kl9wKl7lWh6-6GrMpjMwmXTXzw-wuOBS3XLKvw__Uaj3_vxNXybh3kTDNmTcnNiMjuYGZrg51H2-_V8TY0Qrj1b7SJgUR2Tsj0tTosKjQ-z1WiYDd98o0oBz2HixfYoRGv32agE2nWtdfjNubFe2qxnL5iIrGduTmtBX8RakNWvATt_pwp-kYM3rdx6Izbmtpnwpn0oNREPryMf6BefiKQjsgp5UNVCafBQ2y0OMTUs6aaqxVhbCHIUnNKtyHCReDTlA6x9M-km" alt="" />
                            </div>
                        </div>

                        <div className="bg-secondary-container text-white p-6 rounded-2xl shadow-xl">
                            <h4 className="font-bold mb-4 flex items-center justify-between">
                                Your Bookings
                                <span className="material-symbols-outlined opacity-50">analytics</span>
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <p className="text-[10px] uppercase opacity-70">Today</p>
                                    <p className="text-2xl font-bold">0</p>
                                </div>
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <p className="text-[10px] uppercase opacity-70">Overall</p>
                                    <p className="text-2xl font-bold">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional & Remittance Row */}
                <div className="grid grid-cols-12 gap-gutter mb-gutter">
                    {/* Map Distribution */}
                    <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl border border-outline-variant">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="font-headline-md text-headline-md">Regional Shipments</h4>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-bold">Jun 2024</span>
                                <button className="text-secondary text-xs font-bold flex items-center gap-1">Download <span className="material-symbols-outlined text-[14px]">download</span></button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 h-48 bg-surface-container rounded-xl relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 grayscale opacity-40">
                                    <img className="w-full h-full object-cover" data-location="India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB14Spe_s6Y5Mn25De1Zqs5DaUCZTSZI955EXxiyo6LG9ED8E5SSv20X6DB0nbSqpv5aVDS1n5mtb5EKUqXBEZBp98TqB0UI9xAzzZDT2J7PgNd8PotbJYpa0uJqsCVpKaK3KZlwQY_yPxqe5orrcME5gZsi-qfThD7jtGeioIkhBW0rxqQnR7UrN9B2-6xVVHjHkzj1flUifl7QGdXm0n6M2Y30cjKyLLwYXAq67rPwnpT51C21TPrOcQ_uOMBB8phwczl-_80CGDY" alt="" />
                                </div>
                                <div className="relative z-10 text-center">
                                    <span className="material-symbols-outlined text-4xl text-secondary">explore</span>
                                    <p className="text-xs font-bold mt-1">Geospatial Distribution</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 w-full md:w-64">
                                <div className="bg-secondary/5 border border-secondary/10 p-3 rounded-xl flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary">north_east</span>
                                    <div>
                                        <p className="text-[10px] font-bold text-on-surface-variant">NORTH</p>
                                        <p className="text-lg font-bold">0 kg</p>
                                    </div>
                                </div>
                                <div className="bg-secondary/5 border border-secondary/10 p-3 rounded-xl flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary">south_east</span>
                                    <div>
                                        <p className="text-[10px] font-bold text-on-surface-variant">SOUTH</p>
                                        <p className="text-lg font-bold">0 kg</p>
                                    </div>
                                </div>
                                <div className="bg-secondary/5 border border-secondary/10 p-3 rounded-xl flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary">west</span>
                                    <div>
                                        <p className="text-[10px] font-bold text-on-surface-variant">WEST</p>
                                        <p className="text-lg font-bold">0 kg</p>
                                    </div>
                                </div>
                                <div className="bg-secondary/5 border border-secondary/10 p-3 rounded-xl flex items-center gap-3">
                                    <span className="material-symbols-outlined text-secondary">east</span>
                                    <div>
                                        <p className="text-[10px] font-bold text-on-surface-variant">EAST</p>
                                        <p className="text-lg font-bold">0 kg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Remittance & Performance Summary */}
                    <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-outline-variant flex flex-col justify-between">
                        <div>
                            <h4 className="font-headline-md text-headline-md mb-6">Remittance Track</h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-error-container/20 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-error">history</span>
                                        <span className="text-sm font-medium">Last Remittance</span>
                                    </div>
                                    <span className="font-bold text-error">₹ 0</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-secondary-container/10 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-secondary">calendar_month</span>
                                        <span className="text-sm font-medium">Next Remittance</span>
                                    </div>
                                    <span className="font-bold text-secondary">26 Jun, 2026</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-tertiary-fixed-dim/20 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-on-tertiary-fixed-variant">trending_up</span>
                                        <span className="text-sm font-medium">Upcoming</span>
                                    </div>
                                    <span className="font-bold text-on-tertiary-fixed-variant">₹ 0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Matrix Section */}
                <div className="mb-gutter">
                    <h4 className="font-headline-md text-headline-md mb-6 px-2">Shipment Performance Matrix</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Order Performance */}
                        <div className="bg-white p-6 rounded-2xl border border-outline-variant">
                            <h5 className="text-xs font-label-caps text-on-surface-variant mb-4 flex items-center justify-between">
                                ORDER PERFORMANCE
                                <span className="material-symbols-outlined text-[16px]">monitoring</span>
                            </h5>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">bar_chart</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">0</p>
                                    <p className="text-[10px] uppercase font-bold text-on-surface-variant">Total Orders</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-y-4 border-t border-outline-variant pt-4">
                                <div><p className="text-xs text-on-surface-variant">Manifested</p><p className="font-bold">0</p></div>
                                <div><p className="text-xs text-on-surface-variant">In-Transit</p><p className="font-bold">0</p></div>
                                <div><p className="text-xs text-on-surface-variant">Pending</p><p className="font-bold">0</p></div>
                                <div><p className="text-xs text-on-surface-variant">Delivered</p><p className="font-bold">0</p></div>
                                <div><p className="text-xs text-on-surface-variant">RTO</p><p className="font-bold">0</p></div>
                                <div><p className="text-xs text-on-surface-variant">Lost</p><p className="font-bold">0</p></div>
                            </div>
                        </div>

                        {/* Order Revenue */}
                        <div className="bg-white p-6 rounded-2xl border border-outline-variant">
                            <h5 className="text-xs font-label-caps text-on-surface-variant mb-4 flex items-center justify-between">
                                ORDER REVENUE
                                <span className="material-symbols-outlined text-[16px]">payments</span>
                            </h5>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">currency_rupee</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">₹ 0</p>
                                    <p className="text-[10px] uppercase font-bold text-on-surface-variant">Today's Revenue</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-y-4 border-t border-outline-variant pt-4">
                                <div><p className="text-xs text-on-surface-variant">This Week</p><p className="font-bold">₹ 0.08K</p></div>
                                <div><p className="text-xs text-on-surface-variant">This Month</p><p className="font-bold">₹ 0.08K</p></div>
                                <div><p className="text-xs text-on-surface-variant">Last 3 Months</p><p className="font-bold">₹ 0</p></div>
                                <div><p className="text-xs text-on-surface-variant">Last 6 Months</p><p className="font-bold">₹ 0</p></div>
                            </div>
                        </div>

                        {/* Average Shipping */}
                        <div className="bg-white p-6 rounded-2xl border border-outline-variant">
                            <h5 className="text-xs font-label-caps text-on-surface-variant mb-4 flex items-center justify-between">
                                AVERAGE SHIPPING
                                <span className="material-symbols-outlined text-[16px]">scale</span>
                            </h5>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">weight</span>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">0 Kg</p>
                                    <p className="text-[10px] uppercase font-bold text-on-surface-variant">Today's Shipping</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-y-4 border-t border-outline-variant pt-4">
                                <div><p className="text-xs text-on-surface-variant">This Week</p><p className="font-bold">0.5 Kg</p></div>
                                <div><p className="text-xs text-on-surface-variant">This Month</p><p className="font-bold">0.5 Kg</p></div>
                                <div><p className="text-xs text-on-surface-variant">Last 3 Months</p><p className="font-bold">0 Ton</p></div>
                                <div><p className="text-xs text-on-surface-variant">Last 6 Months</p><p className="font-bold">0 Ton</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analytical Charts Row */}
                <div className="grid grid-cols-12 gap-gutter">
                    {/* Performance Report Chart */}
                    <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl border border-outline-variant">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h4 className="font-headline-md text-headline-md">Performance Analytics</h4>
                                <p className="text-xs text-on-surface-variant">Order volume trend across B2B &amp; B2C channels</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                                    <span className="text-xs font-medium">B2B Shipments</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
                                    <span className="text-xs font-medium">B2C Shipments</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 relative">
                            {/* Chart Placeholder Visual */}
                            <div className="absolute inset-0 flex items-end justify-between px-4 pb-8">
                                <div className="w-full h-px bg-outline-variant/30 absolute bottom-12"></div>
                                <div className="w-full h-px bg-outline-variant/30 absolute bottom-24"></div>
                                <div className="w-full h-px bg-outline-variant/30 absolute bottom-36"></div>
                                <div className="w-full h-px bg-outline-variant/30 absolute bottom-48"></div>
                                {/* Simulated Chart Path */}
                                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                    <path d="M0,200 Q100,180 200,190 T400,160 T600,180 T800,150" fill="none" stroke="#0058be" strokeWidth="3"></path>
                                    <path d="M0,220 Q100,210 200,200 T400,220 T600,210 T800,200" fill="none" stroke="#4edea3" strokeDasharray="4" strokeWidth="3"></path>
                                </svg>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-wider px-2">
                                <span>Feb-26</span>
                                <span>Mar-26</span>
                                <span>Apr-26</span>
                                <span>May-26</span>
                                <span>Jun-26</span>
                            </div>
                        </div>
                    </div>

                    {/* Order Status Report */}
                    <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-outline-variant">
                        <h4 className="font-headline-md text-headline-md mb-8">Status Distribution</h4>
                        <div className="flex items-center justify-center h-48 relative">
                            {/* Circular Gauge Placeholder */}
                            <svg className="w-40 h-40 transform -rotate-90">
                                <circle cx="80" cy="80" fill="none" r="70" stroke="#f2f4f6" strokeWidth="20"></circle>
                                <circle cx="80" cy="80" fill="none" r="70" stroke="#0058be" strokeDasharray="440" strokeDashoffset="380" strokeLinecap="round" strokeWidth="20"></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-3xl font-bold">0</p>
                                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Total Active</p>
                            </div>
                        </div>
                        <div className="mt-8 space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    <span>Pending</span>
                                </div>
                                <span className="font-bold">0%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                                    <span>Delivered</span>
                                </div>
                                <span className="font-bold">0%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* FAB for quick action (as seen in some modern UIs) */}
            <button className="fixed bottom-8 right-8 w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
                <span className="material-symbols-outlined text-[28px]">add_circle</span>
            </button>
        </div>
    );
}
