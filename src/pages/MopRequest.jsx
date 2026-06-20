import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function MopRequest() {
    const [searchFocused, setSearchFocused] = useState(false);

    // Dummy data to simulate empty state if needed. Set to empty array to see empty state.
    const mopRequests = [
        {
            date: "Oct 24, 2023",
            lr: "TC-449210-AWB",
            mop: "COD to Prepaid",
            codAmt: "₹ 4,500.00",
            profit: "+ ₹ 120.00",
            remark: "Customer requested payment change...",
            status: "Approved"
        },
        {
            date: "Oct 25, 2023",
            lr: "TC-449255-AWB",
            mop: "Prepaid to COD",
            codAmt: "₹ 1,200.00",
            profit: "₹ 0.00",
            remark: "Manual reversal...",
            status: "Pending"
        },
        {
            date: "Oct 26, 2023",
            lr: "TC-449301-AWB",
            mop: "COD to Prepaid",
            codAmt: "₹ 8,900.00",
            profit: "- ₹ 45.00",
            remark: "Adjustment fee...",
            status: "Rejected"
        }
    ];

    return (
        <div className="bg-slate-50 font-body-md text-on-surface min-h-screen">
            <Sidebar />
            <Topbar className="fixed top-0 left-[260px] right-0" />

            {/* Main Content Canvas */}
            <main className="ml-[260px] mt-16 min-h-screen">
                <div className="max-w-7xl mx-auto p-8">
                    {/* Page Header Area */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-slate-800 tracking-tight">Mode Of Payment Request</h2>
                            <p className="text-slate-500 font-body-md mt-1">Manage and track your MOP status updates and requests.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all">
                            <span className="material-symbols-outlined">add</span>
                            <span>New MOP Request</span>
                        </button>
                    </div>

                    {/* Dashboard Filters & Controls (Bento-like layout) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        {/* Search & Action Card */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-end gap-4">
                            <div className="w-full">
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 ml-1">Search Requests</label>
                                <div className={`relative transition-transform duration-200 ${searchFocused ? 'scale-[1.01]' : ''}`}>
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">manage_search</span>
                                    <input 
                                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-body-md outline-none text-slate-700" 
                                        placeholder="Search by LR / AWB Number..." 
                                        type="text"
                                        onFocus={() => setSearchFocused(true)}
                                        onBlur={() => setSearchFocused(false)}
                                    />
                                </div>
                            </div>
                            <button className="bg-slate-100 border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 shrink-0">
                                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                <span>Apply Filters</span>
                            </button>
                        </div>
                        
                        {/* Stats Summary Card (Asymmetric) */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 shadow-lg flex items-center justify-between text-white">
                            <div>
                                <p className="text-slate-300 font-bold text-xs uppercase tracking-wider">Pending Approvals</p>
                                <h3 className="font-display-lg text-4xl font-bold mt-1">08</h3>
                            </div>
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-3xl">hourglass_empty</span>
                            </div>
                        </div>
                    </div>

                    {/* Table Container (Modular Card Grid Pattern) */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">LR/AWB NO</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">MOP</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">COD AMT</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Profit</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Remark</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {mopRequests.length === 0 ? (
                                        <tr id="empty-state">
                                            <td className="py-24 text-center" colSpan="8">
                                                <div className="flex flex-col items-center justify-center opacity-60 text-slate-500">
                                                    <span className="material-symbols-outlined text-6xl mb-4">inbox_customize</span>
                                                    <p className="font-headline-md text-xl font-bold text-slate-700">No requests found</p>
                                                    <p className="text-body-md mt-1">Try adjusting your filters or search terms</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        mopRequests.map((req, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-6 py-5 font-body-md text-slate-700">{req.date}</td>
                                                <td className="px-6 py-5 font-bold text-blue-600">{req.lr}</td>
                                                <td className="px-6 py-5">
                                                    <span className="bg-slate-100 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-700 border border-slate-200">{req.mop}</span>
                                                </td>
                                                <td className="px-6 py-5 font-body-md text-slate-700">{req.codAmt}</td>
                                                <td className={`px-6 py-5 font-semibold ${req.profit.startsWith('+') ? 'text-emerald-600' : req.profit.startsWith('-') ? 'text-red-600' : 'text-slate-500'}`}>
                                                    {req.profit}
                                                </td>
                                                <td className="px-6 py-5 text-slate-500 italic truncate max-w-[150px]">{req.remark}</td>
                                                <td className="px-6 py-5">
                                                    {req.status === 'Approved' && (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold uppercase">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                            Approved
                                                        </span>
                                                    )}
                                                    {req.status === 'Pending' && (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold uppercase">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                                            Pending
                                                        </span>
                                                    )}
                                                    {req.status === 'Rejected' && (
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-[11px] font-bold uppercase">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                            Rejected
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-5 text-right">
                                                    <button className="p-2 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-all">
                                                        <span className="material-symbols-outlined">more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* Table Pagination */}
                        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
                            <p className="text-sm text-slate-500">Showing 1 to 3 of 8 entries</p>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all disabled:opacity-50" disabled>
                                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                                </button>
                                <button className="px-4 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-sm">1</button>
                                <button className="px-4 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 text-sm">2</button>
                                <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all">
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Meta */}
                    <footer className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4 mt-8 pb-8">
                        <div className="flex gap-6">
                            <a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-blue-600 transition-colors" href="#">Refund Policy</a>
                            <a className="hover:text-blue-600 transition-colors" href="#">Terms of Use</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Copyright &copy; 2024 Truxcargo Pvt. Ltd.</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                            <span>Made In 🇮🇳 with <span className="material-symbols-outlined text-red-500 text-[12px] inline-block align-middle" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span></span>
                        </div>
                    </footer>
                </div>
            </main>

            {/* Floating Atmosphere Elements */}
            <div className="fixed bottom-8 right-8 z-[100]">
                <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center hover:scale-110 hover:bg-blue-700 active:scale-95 transition-all group overflow-hidden border-2 border-white">
                    <span className="material-symbols-outlined text-3xl group-hover:animate-bounce">support_agent</span>
                </button>
            </div>
        </div>
    );
}
