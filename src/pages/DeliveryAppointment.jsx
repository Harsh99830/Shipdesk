import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function DeliveryAppointment() {
    const [isSearching, setIsSearching] = useState(false);

    const appointments = [
        {
            lrNo: "LR-9823101",
            date: "Oct 24, 2023",
            slot: "10:00 AM - 12:00 PM",
            poNumber: "PO-882291",
            poCopy: "visibility",
            asn: "ASN-22910",
            apptId: "#APT-2910",
            status: "Scheduled",
            remark: "Gate 4 Arrival"
        },
        {
            lrNo: "LR-9823105",
            date: "Oct 22, 2023",
            slot: "02:00 PM - 04:00 PM",
            poNumber: "PO-882294",
            poCopy: "download",
            asn: "ASN-22914",
            apptId: "#APT-2914",
            status: "Completed",
            remark: "N/A"
        },
        {
            lrNo: "LR-9823098",
            date: "Oct 20, 2023",
            slot: "09:00 AM - 11:00 AM",
            poNumber: "PO-882285",
            poCopy: "visibility",
            asn: "ASN-22905",
            apptId: "#APT-2905",
            status: "Missed",
            remark: "Vehicle Breakdown"
        }
    ];

    const handleSearch = () => {
        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] flex-1">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-gutter mt-16 custom-scrollbar">
                    <div className="max-w-container-max mx-auto space-y-gutter">
                    
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div className="space-y-1">
                            <h2 className="font-headline-lg text-headline-lg text-primary">Delivery Appointment</h2>
                            <p className="font-body-md text-slate-500">Schedule and manage warehouse delivery slots for your shipments efficiently.</p>
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-body-md font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 hover:shadow-lg transition-all shadow-md active:scale-95 self-start md:self-auto w-full md:w-auto">
                            <span className="material-symbols-outlined text-lg">add</span>
                            <span>Add Appointment</span>
                        </button>
                    </div>

                    {/* Filters Section */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                            <div className="space-y-2">
                                <label className="font-label-caps text-[11px] font-bold uppercase text-slate-500 px-1">Search By LR/AWB</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                                    <input 
                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700" 
                                        placeholder="Enter LR/AWB Number" 
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-label-caps text-[11px] font-bold uppercase text-slate-500 px-1">Date Range</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">calendar_today</span>
                                    <select className="w-full pl-10 pr-8 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none appearance-none text-slate-700">
                                        <option>All Dates</option>
                                        <option>Today</option>
                                        <option>Last 7 Days</option>
                                        <option>Last 30 Days</option>
                                        <option>Custom Range</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">expand_more</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button 
                                    onClick={handleSearch}
                                    className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl font-body-md font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                                >
                                    {isSearching ? (
                                        <><span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span> Searching...</>
                                    ) : (
                                        'Search'
                                    )}
                                </button>
                                <button className="flex-1 bg-transparent border border-slate-300 text-slate-600 py-2.5 rounded-xl font-body-md font-medium hover:bg-slate-50 transition-all shadow-sm">
                                    Clear Filter
                                </button>
                            </div>
                            <div className="hidden md:block"></div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">LR No.</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">Appointment Date</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">Slot Time</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">PO Number</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs text-center">PO Copy</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">ASN</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">Appt. ID</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">Status</th>
                                        <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wider text-xs">Remark</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {appointments.map((appt, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <a className="font-semibold text-blue-600 hover:underline" href="#">{appt.lrNo}</a>
                                            </td>
                                            <td className="px-6 py-4 text-slate-700">{appt.date}</td>
                                            <td className="px-6 py-4 text-slate-500">{appt.slot}</td>
                                            <td className="px-6 py-4 text-slate-700">{appt.poNumber}</td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-full transition-colors">
                                                    <span className="material-symbols-outlined text-lg">{appt.poCopy}</span>
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 text-slate-700">{appt.asn}</td>
                                            <td className="px-6 py-4 font-mono text-xs text-slate-500">{appt.apptId}</td>
                                            <td className="px-6 py-4">
                                                {appt.status === 'Scheduled' && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 border border-blue-200 text-blue-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                        Scheduled
                                                    </span>
                                                )}
                                                {appt.status === 'Completed' && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                        Completed
                                                    </span>
                                                )}
                                                {appt.status === 'Missed' && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 border border-red-200 text-red-700">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                        Missed
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-slate-500 italic text-sm">{appt.remark}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* Pagination */}
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <p className="text-sm text-slate-500">Showing 1 to 3 of 42 entries</p>
                            <div className="flex items-center gap-2">
                                <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm" disabled>
                                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                </button>
                                <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-sm shadow-md">1</button>
                                <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-sm shadow-sm transition-all">2</button>
                                <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-sm shadow-sm transition-all">3</button>
                                <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-all shadow-sm">
                                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Empty State Example (Hidden by default, used for logic demonstration) */}
                    {appointments.length === 0 && (
                        <div className="bg-white rounded-2xl border border-slate-200 py-20 flex flex-col items-center justify-center text-center space-y-4 shadow-sm" id="empty-state">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-2 border border-slate-200">
                                <span className="material-symbols-outlined text-4xl text-slate-400">event_busy</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">No appointments found</h3>
                                <p className="text-sm text-slate-500 max-w-sm mx-auto mt-2">Try adjusting your filters or search criteria to find what you're looking for.</p>
                            </div>
                            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2.5 rounded-xl font-bold hover:bg-blue-50 transition-all mt-4">
                                Reset All Filters
                            </button>
                        </div>
                    )}
                    </div>
                </main>
            </div>
        </div>
    );
}
