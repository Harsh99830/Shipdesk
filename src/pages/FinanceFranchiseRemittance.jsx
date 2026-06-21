import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function FinanceFranchiseRemittance() {
    return (
        <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] flex-1">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto mt-16 p-4 sm:p-gutter custom-scrollbar">
                    <div className="max-w-container-max mx-auto space-y-gutter">
                        {/* Header */}
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Franchise Remittance</h2>
                            <p className="text-sm text-slate-500 mt-1">Manage and track your regional distribution partner/franchise payouts and margins.</p>
                        </div>

                        {/* Remittance Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Commission Earned</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">₹0.00</p>
                                </div>
                                <span className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><span className="material-symbols-outlined text-3xl">currency_rupee</span></span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Franchise Outlets</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">0</p>
                                </div>
                                <span className="p-3 bg-blue-50 text-blue-600 rounded-xl"><span className="material-symbols-outlined text-3xl">store</span></span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between col-span-1 sm:col-span-2 md:col-span-1">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unsettled Invoices</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">₹0.00</p>
                                </div>
                                <span className="p-3 bg-red-50 text-red-600 rounded-xl"><span className="material-symbols-outlined text-3xl">receipt</span></span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/50">
                                <h3 className="font-bold text-lg text-slate-800">Franchise Logs</h3>
                            </div>
                            <div className="p-12 text-center text-slate-500 italic">
                                <span className="material-symbols-outlined text-5xl opacity-40 mb-2 block">assignment</span>
                                No logs to display.
                            </div>
                        </div>

                        {/* Footer */}
                        <footer className="py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center sm:text-left">
                            <div className="flex gap-6">
                                <a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
                                <a className="hover:text-blue-600 transition-colors" href="#">Refund Policy</a>
                                <a className="hover:text-blue-600 transition-colors" href="#">Terms of Use</a>
                            </div>
                            <p>Copyright &copy; 2026 Shipdesk Pvt. Ltd.</p>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
}
