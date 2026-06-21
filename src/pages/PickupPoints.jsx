import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function PickupPoints() {
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
        <div className="h-screen overflow-hidden bg-slate-50 font-sans flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] h-full">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                {/* BEGIN: Main Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 mt-16 custom-scrollbar flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Pickup Points</h2>
                            <p className="text-sm text-slate-500 mt-1">Manage and add your warehouse/pickup locations.</p>
                        </div>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 rounded-eight flex items-center justify-center gap-2 font-bold transition-all shadow-sm self-start sm:self-auto w-full sm:w-auto"
                        >
                            <span className="material-symbols-outlined text-sm">add</span>
                            <span>Add Pickup Point</span>
                        </button>
                    </div>

                    {/* BEGIN: Filter Bar */}
                    <div className="bg-white p-6 rounded-eight border border-slate-200 shadow-sm mb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                            <div className="col-span-1 sm:col-span-2">
                                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest">Search by Warehouse/Address</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                    <input className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="Enter Pickup Point Name or City" type="text"/>
                                </div>
                            </div>
                            <button className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-eight hover:bg-blue-700 transition-all">Search</button>
                            <button className="w-full bg-slate-50 border border-slate-200 text-slate-600 font-bold py-2.5 rounded-eight hover:bg-slate-100 transition-all">Clear Filter</button>
                        </div>
                    </div>
                    {/* END: Filter Bar */}

                    {/* BEGIN: Table Section */}
                    <div className="bg-white border border-slate-200 rounded-eight overflow-hidden shadow-sm mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Partners</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Address</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                        <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {/* Table Row 1 */}
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-6">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-slate-800">Primary Hub</span>
                                                <span className="text-xs text-slate-500">Kshitij Kumar</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6">
                                            <p className="text-sm text-slate-600 max-w-md">Plot No 45, Okhla Industrial Estate Phase 3, Near Metro Station, New Delhi, 110020</p>
                                        </td>
                                        <td className="px-6 py-6">
                                            <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">Active</span>
                                        </td>
                                        <td className="px-6 py-6 text-right whitespace-nowrap">
                                            <button className="text-blue-600 hover:text-blue-800 font-bold text-sm">Edit</button>
                                            <span className="mx-2 text-slate-300">|</span>
                                            <button className="text-red-500 hover:text-red-700 font-bold text-sm">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
                            <p className="text-sm text-slate-500">Showing 1 to 1 of 1 entries</p>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 cursor-not-allowed"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                                <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white text-sm font-bold shadow-sm">1</button>
                                <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 cursor-not-allowed"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                            </div>
                        </div>
                    </div>
                    {/* END: Table Section */}

                    {/* BEGIN: Footer */}
                    <footer className="mt-auto py-6 px-4 sm:px-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-slate-400 uppercase tracking-widest">
                        <div className="flex flex-wrap justify-center gap-4">
                            <a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-blue-600 transition-colors" href="#">Refund Policy</a>
                            <a className="hover:text-blue-600 transition-colors" href="#">Terms of Use</a>
                        </div>
                        <div className="text-center md:text-right">
                            Copyright © 2024 Truxcargo Pvt. Ltd. | Made with ❤️ in India
                        </div>
                    </footer>
                    {/* END: Footer */}
                </main>
                {/* END: Main Content */}
            </div>

            {/* BEGIN: Add Pickup Point Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" id="pickup-point-modal">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50 shrink-0">
                            <h3 className="text-lg font-bold text-slate-900">Add New Pickup Point</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Pickup Point Name <span className="text-red-500">*</span></label>
                                        <input required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700" placeholder="Pickup Point Name" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Contact Name <span className="text-red-500">*</span></label>
                                        <input required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700" placeholder="Enter Contact Name" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Contact No <span className="text-red-500">*</span></label>
                                        <input required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700" placeholder="Enter Phone Number" type="tel"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Pincode <span className="text-red-500">*</span></label>
                                        <input required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700" placeholder="Enter Pincode" type="text"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Address <span className="text-red-500">*</span></label>
                                        <input required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700" placeholder="Enter Address" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">City <span className="text-red-500">*</span></label>
                                        <input required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700" placeholder="Enter City Name" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">State <span className="text-red-500">*</span></label>
                                        <select required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white text-slate-700">
                                            <option value="">Select A State</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Karnataka">Karnataka</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Email <span className="text-red-500">*</span></label>
                                        <input required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-slate-700" placeholder="Enter Email Id" type="email"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">Address Type <span className="text-red-500">*</span></label>
                                        <select required className="w-full p-2.5 border border-slate-200 rounded-eight text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white text-slate-700">
                                            <option value="Office">Office</option>
                                            <option value="Warehouse">Warehouse</option>
                                            <option value="Residential">Residential</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Decorative Separator */}
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-8">
                                    <div className="h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 w-1/3"></div>
                                </div>
                                {/* Modal Actions */}
                                <div className="flex justify-center gap-4 pt-4 shrink-0">
                                    <button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-3 rounded-eight font-bold shadow-md transition-all" type="submit">
                                        Add Pickup Point
                                    </button>
                                    <button onClick={() => setIsModalOpen(false)} className="bg-white border border-slate-200 text-slate-600 px-8 py-3 rounded-eight font-bold hover:bg-slate-50 transition-all" type="button">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* END: Add Pickup Point Modal */}
        </div>
    );
}
