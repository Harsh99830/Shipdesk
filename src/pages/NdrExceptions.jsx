import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function NdrExceptions() {
    const [activeTab, setActiveTab] = useState('open');

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
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-primary">NDR & Exceptions</h2>
                            <p className="text-slate-500 text-sm mt-1">Manage and resolve non-delivery reports to optimize fulfillment rates.</p>
                        </div>
                        <div className="flex items-center gap-2 p-1.5 bg-slate-200/50 rounded-xl">
                            <button 
                                onClick={() => setActiveTab('open')}
                                className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all text-sm ${
                                    activeTab === 'open' 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                Open
                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                    activeTab === 'open' ? 'bg-white/20' : 'bg-slate-300/50 text-slate-700'
                                }`}>12</span>
                            </button>
                            <button 
                                onClick={() => setActiveTab('pending')}
                                className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all text-sm ${
                                    activeTab === 'pending' 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                Pending
                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                    activeTab === 'pending' ? 'bg-white/20' : 'bg-slate-300/50 text-slate-700'
                                }`}>4</span>
                            </button>
                        </div>
                    </div>

                    {/* Dashboard Metric Quick-View */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Total Exceptions</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-4xl font-bold leading-none text-slate-800">128</h3>
                                <span className="text-red-600 flex items-center text-sm font-bold">
                                    <span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                                    +12%
                                </span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Resolution Rate</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-4xl font-bold leading-none text-slate-800">94%</h3>
                                <span className="text-emerald-600 flex items-center text-sm font-bold">
                                    <span className="material-symbols-outlined text-[16px] mr-1">check_circle</span>
                                    Optimized
                                </span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">Avg. Response</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-4xl font-bold leading-none text-slate-800">2.4h</h3>
                                <span className="text-blue-600 flex items-center text-sm font-bold">
                                    <span className="material-symbols-outlined text-[16px] mr-1">speed</span>
                                    Fast
                                </span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-2">High Priority</p>
                            <div className="flex items-end justify-between">
                                <h3 className="text-4xl font-bold leading-none text-slate-800">08</h3>
                                <span className="px-2.5 py-1 bg-red-100 text-red-700 rounded-md text-[10px] font-bold uppercase tracking-widest">Needs Action</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Data Card */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                        {/* Table Header/Filter Bar */}
                        <div className="p-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50">
                            <div className="flex items-center gap-4">
                                <div className="relative group">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                        Filter By Reason
                                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </button>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                        Date Range
                                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2.5 text-slate-500 border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all shadow-sm" title="Download Report">
                                    <span className="material-symbols-outlined text-[20px]">download</span>
                                </button>
                                <button className="p-2.5 text-slate-500 border border-slate-200 bg-white hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all shadow-sm" title="Refresh Data">
                                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                                </button>
                            </div>
                        </div>

                        {/* Empty State */}
                        <div className="py-20 flex flex-col items-center justify-center text-center px-6">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 border border-slate-200">
                                <span className="material-symbols-outlined text-[40px] text-slate-400">content_paste_off</span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-800">No NDR records found</h4>
                            <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                                There are currently no active non-delivery reports for your account. You're all caught up!
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5">
                                    Check Past Records
                                </button>
                                <button className="w-full sm:w-auto px-6 py-2.5 border border-slate-300 bg-white text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">
                                    Request Support
                                </button>
                            </div>
                        </div>

                        {/* Footer / Pagination */}
                        <div className="px-6 py-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
                            <p className="text-sm text-slate-500">Showing <span className="font-bold text-slate-700">0</span> to <span className="font-bold text-slate-700">0</span> of 0 entries</p>
                            <div className="flex items-center gap-2">
                                <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm" disabled>
                                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                </button>
                                <div className="flex items-center">
                                    <span className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-lg font-bold text-sm shadow-md">1</span>
                                </div>
                                <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm" disabled>
                                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <footer className="mt-12 pb-8 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
                            <a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-blue-600 transition-colors" href="#">Refund Policy</a>
                            <a className="hover:text-blue-600 transition-colors" href="#">Terms of Use</a>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-slate-500 font-medium">
                            <p>Copyright &copy; 2026 Truxcargo Pvt Ltd.</p>
                            <div className="flex items-center gap-1.5">
                                <span>Made in 🇮🇳 with</span>
                                <span className="material-symbols-outlined text-red-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </div>
                        </div>
                    </footer>
                    </div>
                </main>
            </div>
        </div>
    );
}
