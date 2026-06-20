import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function PickupRequest() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsModalOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="bg-background font-body-md text-on-surface min-h-screen">
            <Sidebar />
            <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

            {/* Main Content Area */}
            <main className="ml-0 lg:ml-[260px] mt-16 p-4 lg:p-8 max-w-7xl mx-auto min-h-screen">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Pickup Request</h2>
                        <p className="text-on-surface-variant">Schedule and manage your courier pickups across warehouses.</p>
                    </div>
                    <button 
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg" 
                        onClick={() => setIsModalOpen(true)}
                    >
                        <span className="material-symbols-outlined">add</span>
                        <span>New Pickup Request</span>
                    </button>
                </div>

                {/* Dashboard Stats Overview (Bento Style) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <span className="p-2 bg-blue-50 text-blue-600 rounded-xl"><span className="material-symbols-outlined">pending_actions</span></span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Pending Pickups</p>
                        <p className="text-3xl font-bold text-slate-900 mt-1">12</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><span className="material-symbols-outlined">check_circle</span></span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Today</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Completed Today</p>
                        <p className="text-3xl font-bold text-slate-900 mt-1">45</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <span className="p-2 bg-red-50 text-red-600 rounded-xl"><span className="material-symbols-outlined">warning</span></span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Issues</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Missed/Delayed</p>
                        <p className="text-3xl font-bold text-slate-900 mt-1">03</p>
                    </div>
                    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                        <div className="relative z-10">
                            <p className="text-on-primary-container text-xs font-label-caps mb-1">PRO SERVICE</p>
                            <p className="font-headline-md leading-tight">Same Day Pickup</p>
                        </div>
                        <div className="relative z-10 flex items-center justify-between mt-4">
                            <span className="text-xs text-on-primary-container">Enabled for 8 cities</span>
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </div>
                    </div>
                </div>

                {/* Recent Requests Table */}
                <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                        <h3 className="font-bold text-lg text-slate-800">Recent Pickup Requests</h3>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center gap-2 shadow-sm">
                                <span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                            </button>
                            <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors flex items-center gap-2 shadow-sm">
                                <span className="material-symbols-outlined text-[18px]">download</span> Export
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Request ID</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Warehouse</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Package Count</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Date/Time</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Shipping Partner</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-gutter py-4">
                                        <span className="font-label-caps text-secondary font-semibold">#PKU-92831</span>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium">Okhla Industrial Estate</span>
                                            <span className="text-xs text-on-surface-variant">Phase III, New Delhi - 110020</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <span className="bg-surface-container-high px-2.5 py-1 rounded-full text-xs font-bold">24 Units</span>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex flex-col">
                                            <span>Oct 24, 2023</span>
                                            <span className="text-xs text-on-surface-variant">02:00 PM - 04:00 PM</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-on-secondary-fixed-variant flex items-center justify-center text-[10px] text-white font-bold">D</div>
                                            <span>Delhivery Large</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4 text-right">
                                        <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant"><span className="material-symbols-outlined">more_vert</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-gutter py-4">
                                        <span className="font-label-caps text-secondary font-semibold">#PKU-92755</span>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium">Gurgaon Fulfilment Center</span>
                                            <span className="text-xs text-on-surface-variant">Sec 45, Huda City, Haryana</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <span className="bg-surface-container-high px-2.5 py-1 rounded-full text-xs font-bold">08 Units</span>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex flex-col">
                                            <span>Oct 23, 2023</span>
                                            <span className="text-xs text-on-surface-variant">10:00 AM - 12:00 PM</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-on-tertiary-container flex items-center justify-center text-[10px] text-white font-bold">E</div>
                                            <span>Ekart Logistics</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4 text-right">
                                        <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant"><span className="material-symbols-outlined">more_vert</span></button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-gutter py-4">
                                        <span className="font-label-caps text-secondary font-semibold">#PKU-92612</span>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium">Mumbai Distribution Hub</span>
                                            <span className="text-xs text-on-surface-variant">Andheri East, MH - 400069</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <span className="bg-surface-container-high px-2.5 py-1 rounded-full text-xs font-bold">115 Units</span>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex flex-col">
                                            <span>Oct 22, 2023</span>
                                            <span className="text-xs text-on-surface-variant">01:00 PM - 03:00 PM</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-[10px] text-white font-bold">X</div>
                                            <span>Xpressbees</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-4 text-right">
                                        <button className="p-2 hover:bg-surface-variant rounded-full text-on-surface-variant"><span className="material-symbols-outlined">more_vert</span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-gutter flex items-center justify-between border-t border-outline-variant">
                        <span className="text-body-md text-on-surface-variant">Showing 1 to 10 of 24 requests</span>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-all"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-secondary text-white font-bold text-xs">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-all font-bold text-xs">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-all font-bold text-xs">3</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant hover:bg-surface-container transition-all"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center" id="pickup-modal">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="px-8 py-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">New Pickup Request</h3>
                                <p className="text-slate-500 text-sm mt-1">Fill in the details to schedule your shipment pickup.</p>
                            </div>
                            <button 
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-all" 
                                onClick={() => setIsModalOpen(false)}
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Shipping Partner</label>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700">
                                        <option>Delhivery Large</option>
                                        <option>Ekart Logistics</option>
                                        <option>Xpressbees</option>
                                        <option>BlueDart</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Expected Package Count</label>
                                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700" placeholder="e.g. 25" type="number"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Pickup Warehouse</label>
                                <div className="relative">
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none appearance-none text-slate-700">
                                        <option>Okhla Industrial Estate - Phase III, New Delhi</option>
                                        <option>Gurgaon Fulfilment Center - Sec 45, Haryana</option>
                                        <option>Mumbai Distribution Hub - Andheri East, MH</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">keyboard_arrow_down</span>
                                </div>
                                <p className="text-xs text-blue-600 font-medium px-1 flex items-center gap-1 mt-2"><span className="material-symbols-outlined text-[16px]">info</span> Full address will be shared with the courier partner automatically.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Pickup Date</label>
                                    <div className="relative">
                                        <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700" type="date"/>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Pickup Time Range</label>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700" defaultValue="01:00 pm - 03:00 pm">
                                        <option value="09:00 am - 11:00 am">09:00 am - 11:00 am</option>
                                        <option value="11:00 am - 01:00 pm">11:00 am - 01:00 pm</option>
                                        <option value="01:00 pm - 03:00 pm">01:00 pm - 03:00 pm</option>
                                        <option value="03:00 pm - 05:00 pm">03:00 pm - 05:00 pm</option>
                                    </select>
                                </div>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl flex gap-4 items-start border border-amber-100">
                                <span className="material-symbols-outlined text-amber-600 mt-0.5">notification_important</span>
                                <div>
                                    <p className="font-bold text-sm text-amber-800">Pickup Protocol</p>
                                    <p className="text-xs text-amber-700/80 mt-1">Ensure all packages are ready and labeled before the selected time slot. Couriers wait for a maximum of 15 minutes.</p>
                                </div>
                            </div>
                        </div>
                        {/* Modal Actions */}
                        <div className="px-8 py-5 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-3">
                            <button 
                                className="px-6 py-2.5 rounded-xl font-semibold text-slate-600 hover:bg-slate-200/50 transition-all" 
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel Request
                            </button>
                            <button className="bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold hover:shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">send</span>
                                <span>Add Pickup Request</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
