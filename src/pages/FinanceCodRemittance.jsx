import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function FinanceCodRemittance() {
    return (
        <div className="h-screen overflow-hidden bg-slate-50 font-sans flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] h-full">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto mt-16 p-4 lg:p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Header */}
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">COD Remittance</h2>
                            <p className="text-sm text-slate-500 mt-1">Track and manage weekly COD payouts from delivered orders.</p>
                        </div>

                        {/* Remittance Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Remitted Amount</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">₹0.00</p>
                                </div>
                                <span className="p-3 bg-red-50 text-red-600 rounded-xl"><span className="material-symbols-outlined text-3xl">history</span></span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next Payout Date</p>
                                    <p className="text-2xl font-bold text-slate-900 mt-2">26 Jun, 2026</p>
                                </div>
                                <span className="p-3 bg-blue-50 text-blue-600 rounded-xl"><span className="material-symbols-outlined text-3xl">calendar_month</span></span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between col-span-1 sm:col-span-2 md:col-span-1">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Upcoming Balance</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">₹0.00</p>
                                </div>
                                <span className="p-3 bg-slate-100 text-slate-600 rounded-xl"><span className="material-symbols-outlined text-3xl">trending_up</span></span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/50">
                                <h3 className="font-bold text-lg text-slate-800">Remittance Logs</h3>
                            </div>
                            <div className="p-12 text-center text-slate-500 italic">
                                <span className="material-symbols-outlined text-5xl opacity-40 mb-2 block">receipt_long</span>
                                No remittance history found.
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
