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
        <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] flex-1">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-gutter mt-16 custom-scrollbar">
                    <div className="max-w-container-max mx-auto space-y-gutter">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-primary">Pickup Points</h2>
                                <p className="text-on-surface-variant text-sm mt-1">Manage and add your warehouse/pickup locations.</p>
                            </div>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="bg-on-tertiary-container hover:bg-on-tertiary-container/90 text-white px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all shadow-md self-start sm:self-auto w-full sm:w-auto text-sm"
                            >
                                <span className="material-symbols-outlined text-sm">add</span>
                                <span>Add Pickup Point</span>
                            </button>
                        </div>

                        {/* Filter Bar */}
                        <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                                <div className="col-span-1 sm:col-span-2 font-body-md">
                                    <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-2 tracking-widest font-label-caps">Search by Warehouse/Address</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                                        <input className="w-full pl-10 pr-4 py-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all" placeholder="Enter Pickup Point Name or City" type="text"/>
                                    </div>
                                </div>
                                <button className="w-full bg-secondary text-white font-semibold py-2.5 rounded-lg hover:bg-secondary/90 transition-all text-sm shadow-sm">Search</button>
                                <button className="w-full bg-surface-container-low border border-outline-variant text-on-surface-variant font-semibold py-2.5 rounded-lg hover:bg-surface-container transition-all text-sm">Clear Filter</button>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead className="bg-surface-container-low border-b border-outline-variant">
                                        <tr>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Partners</th>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Address</th>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Status</th>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-outline-variant">
                                        <tr className="hover:bg-surface-container-low transition-colors">
                                            <td className="px-6 py-6">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-primary">Primary Hub</span>
                                                    <span className="text-xs text-on-surface-variant mt-0.5">Kshitij Kumar</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-6">
                                                <p className="text-sm text-on-surface-variant max-w-md">Plot No 45, Okhla Industrial Estate Phase 3, Near Metro Station, New Delhi, 110020</p>
                                            </td>
                                            <td className="px-6 py-6">
                                                <span className="px-3 py-1 bg-on-tertiary-container/10 text-on-tertiary-container text-[10px] font-bold rounded-full uppercase">Active</span>
                                            </td>
                                            <td className="px-6 py-6 text-right whitespace-nowrap">
                                                <button className="text-secondary hover:text-secondary/85 font-semibold text-sm">Edit</button>
                                                <span className="mx-2 text-outline-variant">|</span>
                                                <button className="text-error hover:text-error/85 font-semibold text-sm">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-6 py-4 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-low text-xs">
                                <p className="text-on-surface-variant">Showing 1 to 1 of 1 entries</p>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-white text-on-surface-variant/40 cursor-not-allowed"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded bg-secondary text-white text-xs font-bold shadow-sm">1</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-white text-on-surface-variant/40 cursor-not-allowed"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Add Pickup Point Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" id="pickup-point-modal">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low shrink-0">
                            <h3 className="text-lg font-bold text-primary">Add New Pickup Point</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-on-surface-variant hover:text-on-surface transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 overflow-y-auto flex-1 custom-scrollbar">
                            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">Pickup Point Name <span className="text-error">*</span></label>
                                        <input required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface" placeholder="Pickup Point Name" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">Contact Name <span className="text-error">*</span></label>
                                        <input required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface" placeholder="Enter Contact Name" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">Contact No <span className="text-error">*</span></label>
                                        <input required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface" placeholder="Enter Phone Number" type="tel"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">Pincode <span className="text-error">*</span></label>
                                        <input required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface" placeholder="Enter Pincode" type="text"/>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">Address <span className="text-error">*</span></label>
                                        <input required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface" placeholder="Enter Address" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">City <span className="text-error">*</span></label>
                                        <input required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface" placeholder="Enter City Name" type="text"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">State <span className="text-error">*</span></label>
                                        <select required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface">
                                            <option value="">Select A State</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Karnataka">Karnataka</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">Email <span className="text-error">*</span></label>
                                        <input required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface" placeholder="Enter Email Id" type="email"/>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-on-surface-variant mb-2">Address Type <span className="text-error">*</span></label>
                                        <select required className="w-full p-2.5 border border-outline-variant rounded-lg text-sm bg-surface-container-lowest focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-on-surface">
                                            <option value="Office">Office</option>
                                            <option value="Warehouse">Warehouse</option>
                                            <option value="Residential">Residential</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Modal Actions */}
                                <div className="flex justify-end gap-4 pt-4 border-t border-outline-variant">
                                    <button className="bg-on-tertiary-container hover:bg-on-tertiary-container/90 text-white px-8 py-3 rounded-lg font-bold shadow-md transition-all text-sm" type="submit">
                                        Add Pickup Point
                                    </button>
                                    <button onClick={() => setIsModalOpen(false)} className="bg-white border border-outline-variant text-on-surface-variant px-8 py-3 rounded-lg font-bold hover:bg-surface-container-low transition-all text-sm" type="button">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
