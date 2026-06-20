import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function WeightReconciliation() {
    const [activeTab, setActiveTab] = useState('mismatched');

    const records = [
        {
            date: "Oct 24, 2023",
            time: "14:20 PM",
            awb: "AWB77821092",
            lrn: "LRN: 882190",
            orderInfo: "Consumer Electronics",
            route: "Mumbai → Bangalore",
            partner: "BlueDart Express",
            partnerInitials: "B",
            partnerColor: "bg-slate-800",
            initialWt: "2.40 Kgs",
            initialDim: "20x15x10 cm",
            capturedWt: "3.85 Kgs",
            capturedDim: "25x20x15 cm",
            status: "Mismatched"
        },
        {
            date: "Oct 23, 2023",
            time: "09:15 AM",
            awb: "AWB77821105",
            lrn: "LRN: 882201",
            orderInfo: "Home Furnishing",
            route: "Delhi → Pune",
            partner: "Delhivery Plus",
            partnerInitials: "D",
            partnerColor: "bg-blue-600",
            initialWt: "5.00 Kgs",
            initialDim: "40x30x20 cm",
            capturedWt: "7.20 Kgs",
            capturedDim: "45x35x25 cm",
            status: "Mismatched"
        }
    ];

    return (
        <div className="bg-slate-50 text-slate-800 min-h-screen font-body-md">
            <Sidebar />
            <Topbar className="fixed top-0 left-[260px] right-0 z-40" />

            {/* Main Content Shell */}
            <main className="ml-[260px] mt-16 min-h-screen">
                <div className="p-8 space-y-6 max-w-7xl mx-auto">
                    
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        <div>
                            <h2 className="font-headline-lg text-3xl font-bold text-slate-900 tracking-tight">Weight Reconciliation</h2>
                            <p className="text-sm font-medium text-slate-500 mt-1">Review and dispute discrepancies in weight and dimensions.</p>
                        </div>
                        <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95 shadow-md">
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            Report
                        </button>
                    </div>

                    {/* Global Filters */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-end gap-4 mb-6">
                        <div className="flex-1 min-w-[240px]">
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Search Reference</label>
                            <input 
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" 
                                placeholder="Search BY LR/AWB" 
                                type="text"
                            />
                        </div>
                        <div className="w-full md:w-48">
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Status</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none">
                                <option>All Status</option>
                                <option>Pending</option>
                                <option>Accepted</option>
                                <option>Disputed</option>
                            </select>
                        </div>
                        <div className="w-full md:w-48">
                            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Time Period</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none">
                                <option>Last 30 Days</option>
                                <option>Last 60 Days</option>
                                <option>Last 90 Days</option>
                            </select>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md">
                                Apply
                            </button>
                            <button className="border border-slate-300 text-slate-600 bg-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* Overview Grid (Metric Clusters) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Weight Discrepancies</span>
                                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="material-symbols-outlined text-slate-400">scale</span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-slate-800">1,240</span>
                                <span className="text-xl font-bold text-slate-400">Kgs</span>
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md w-fit">
                                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                <span className="text-xs font-bold">+12.5% vs last month</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Discrepancies Accepted</span>
                                <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
                                    <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-slate-800">850</span>
                                <span className="text-xl font-bold text-slate-400">Kgs</span>
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md w-fit">
                                <span className="text-xs font-bold">68.5% of total</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Discrepancies Rejected</span>
                                <div className="p-2 bg-red-50 rounded-lg border border-red-100">
                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-slate-800">390</span>
                                <span className="text-xl font-bold text-slate-400">Kgs</span>
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-md w-fit">
                                <span className="text-xs font-bold">31.5% of total</span>
                            </div>
                        </div>
                    </div>

                    {/* Notice Banner */}
                    <div className="bg-blue-50 p-4 rounded-2xl border-l-4 border-blue-600 flex flex-col md:flex-row items-center justify-between gap-4 mb-6 shadow-sm">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-blue-600">info</span>
                            <p className="text-sm font-medium text-blue-900">
                                Weight discrepancies are auto-accepted after <span className="font-bold text-blue-700">7 days</span> of generation if no dispute is raised.
                            </p>
                        </div>
                        <button className="text-xs font-bold bg-white text-blue-700 border border-blue-200 px-4 py-2 rounded-xl hover:bg-blue-100 transition-colors shadow-sm whitespace-nowrap">
                            SOP Of Weight Reconciliation
                        </button>
                    </div>

                    {/* Status Tabs & Table Section */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                        <div className="flex items-center px-6 py-4 border-b border-slate-200 gap-8 bg-slate-50/50">
                            <button 
                                onClick={() => setActiveTab('mismatched')}
                                className={`relative py-2 px-1 font-bold text-sm flex items-center gap-2 group transition-colors ${activeTab === 'mismatched' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                Mismatched
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === 'mismatched' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>12</span>
                                {activeTab === 'mismatched' && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></div>}
                            </button>
                            <button 
                                onClick={() => setActiveTab('raised')}
                                className={`relative py-2 px-1 font-bold text-sm flex items-center gap-2 group transition-colors ${activeTab === 'raised' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                Disputes Raised
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === 'raised' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>04</span>
                                {activeTab === 'raised' && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></div>}
                            </button>
                            <button 
                                onClick={() => setActiveTab('settled')}
                                className={`relative py-2 px-1 font-bold text-sm flex items-center gap-2 group transition-colors ${activeTab === 'settled' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                                Disputes Settled
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeTab === 'settled' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>28</span>
                                {activeTab === 'settled' && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></div>}
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">AWB/LR No.</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Order Info</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Shipping Partner</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Initial Wt.</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Captured Wt.</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {records.map((rec, index) => (
                                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-bold text-slate-800">{rec.date}</p>
                                                <p className="text-[12px] text-slate-500">{rec.time}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-blue-600">{rec.awb}</span>
                                                    <span className="text-[12px] text-slate-500">{rec.lrn}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-medium text-slate-800">{rec.orderInfo}</p>
                                                <p className="text-[12px] text-slate-500">{rec.route}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-6 h-6 rounded-md ${rec.partnerColor} flex items-center justify-center text-[10px] text-white font-bold`}>
                                                        {rec.partnerInitials}
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-800">{rec.partner}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-sm font-medium text-slate-800">{rec.initialWt}</span>
                                                <p className="text-[10px] text-slate-500 uppercase">{rec.initialDim}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-sm font-bold text-red-600">{rec.capturedWt}</span>
                                                <p className="text-[10px] text-slate-500 uppercase">{rec.capturedDim}</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 bg-red-50 border border-red-200 text-red-700 font-bold text-[11px] rounded-full uppercase tracking-widest">
                                                    {rec.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <button className="text-blue-600 hover:text-blue-800 hover:underline font-bold text-[13px]">Dispute</button>
                                                    <button className="text-slate-400 hover:text-slate-700 transition-colors p-1.5 rounded-full hover:bg-slate-100">
                                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Table Footer */}
                        <div className="bg-slate-50 p-4 flex items-center justify-between border-t border-slate-200">
                            <p className="text-sm text-slate-500">Showing 2 of 12 records</p>
                            <div className="flex gap-2">
                                <button className="px-3 py-1.5 border border-slate-200 bg-white rounded-lg text-slate-400 disabled:opacity-50 shadow-sm" disabled>
                                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                </button>
                                <button className="px-3 py-1.5 border border-blue-600 rounded-lg text-white bg-blue-600 font-bold shadow-sm">1</button>
                                <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 shadow-sm">2</button>
                                <button className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="border-t border-slate-200 pt-8 pb-8 flex flex-wrap items-center justify-between gap-6 mt-12">
                        <div className="flex gap-6">
                            <a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
                            <a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Refund Policy</a>
                            <a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Terms of Use</a>
                        </div>
                        <p className="text-xs font-medium text-slate-500">
                            Copyright &copy; 2026 LogiReconcile Pvt. Ltd. | Made with <span className="text-red-500 material-symbols-outlined text-[14px] align-middle" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span> for Logistics
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
}
