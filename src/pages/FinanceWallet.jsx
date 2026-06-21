import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function FinanceWallet() {
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
                            <h2 className="text-2xl font-black text-slate-900">Wallet Management</h2>
                            <p className="text-sm text-slate-500 mt-1">Recharge your account, view transaction history, and manage billing thresholds.</p>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Available Balance</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">₹14,250.00</p>
                                </div>
                                <span className="p-3 bg-blue-50 text-blue-600 rounded-xl"><span className="material-symbols-outlined text-3xl">account_balance_wallet</span></span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Recharge</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">₹5,000.00</p>
                                </div>
                                <span className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><span className="material-symbols-outlined text-3xl">payments</span></span>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending COD Adjustments</p>
                                    <p className="text-3xl font-bold text-slate-900 mt-2">₹2,840.00</p>
                                </div>
                                <span className="p-3 bg-amber-50 text-amber-600 rounded-xl"><span className="material-symbols-outlined text-3xl">history</span></span>
                            </div>
                        </div>

                        {/* Recent Transactions */}
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/50">
                                <h3 className="font-bold text-lg text-slate-800">Recent Transactions</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Transaction ID</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Description</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-mono text-xs text-blue-600 font-bold">TXN-90281</td>
                                            <td className="px-6 py-4 text-sm text-slate-700">Jun 20, 2026</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Online Wallet Recharge - UPI</td>
                                            <td className="px-6 py-4 text-sm text-emerald-600 font-bold text-right">+ ₹5,000.00</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-mono text-xs text-blue-600 font-bold">TXN-89912</td>
                                            <td className="px-6 py-4 text-sm text-slate-700">Jun 18, 2026</td>
                                            <td className="px-6 py-4 text-sm text-slate-600">Freight Charge - AWB77821092</td>
                                            <td className="px-6 py-4 text-sm text-red-600 font-bold text-right">- ₹320.00</td>
                                        </tr>
                                    </tbody>
                                </table>
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
