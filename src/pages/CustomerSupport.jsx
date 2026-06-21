import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function CustomerSupport() {
    const [activeTab, setActiveTab] = useState('open');

    return (
        <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] flex-1">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto mt-16 p-4 sm:p-gutter custom-scrollbar">
                    <div className="max-w-container-max mx-auto space-y-gutter">
                        
                        {/* Header Actions */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h1 className="font-headline-lg text-headline-lg text-on-surface">Support Ticket</h1>
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <button className="flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2.5 rounded-lg transition-all active:scale-95 text-sm font-medium w-full sm:w-auto">
                                    <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                    <span>Disputes Request</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-2.5 rounded-lg transition-all active:scale-95 text-sm font-medium w-full sm:w-auto">
                                    <span className="material-symbols-outlined text-[20px]">description</span>
                                    <span>POD Request</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-primary-container hover:bg-black text-white px-5 py-2.5 rounded-lg transition-all active:scale-95 text-sm font-medium w-full sm:w-auto">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                    <span>New Request</span>
                                </button>
                            </div>
                        </div>

                        {/* Tabbed Navigation */}
                        <div className="grid grid-cols-3 sm:flex gap-2 w-full sm:w-auto">
                            <button 
                                onClick={() => setActiveTab('open')}
                                className={`px-4 sm:px-8 py-2.5 rounded-lg font-medium border transition-all text-sm text-center ${
                                    activeTab === 'open'
                                        ? 'bg-secondary-container text-on-secondary-container border-secondary-container/20 shadow-sm'
                                        : 'bg-white text-on-surface-variant border-outline-variant hover:text-on-surface hover:border-outline'
                                }`}
                            >
                                Open
                            </button>
                            <button 
                                onClick={() => setActiveTab('pending')}
                                className={`px-4 sm:px-8 py-2.5 rounded-lg font-medium border transition-all text-sm text-center ${
                                    activeTab === 'pending'
                                        ? 'bg-secondary-container text-on-secondary-container border-secondary-container/20 shadow-sm'
                                        : 'bg-white text-on-surface-variant border-outline-variant hover:text-on-surface hover:border-outline'
                                }`}
                            >
                                Pending
                            </button>
                            <button 
                                onClick={() => setActiveTab('closed')}
                                className={`px-4 sm:px-8 py-2.5 rounded-lg font-medium border transition-all text-sm text-center ${
                                    activeTab === 'closed'
                                        ? 'bg-secondary-container text-on-secondary-container border-secondary-container/20 shadow-sm'
                                        : 'bg-white text-on-surface-variant border-outline-variant hover:text-on-surface hover:border-outline'
                                }`}
                            >
                                Closed
                            </button>
                        </div>

                        {/* Data Table Card */}
                        <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto hidden sm:block">
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead className="bg-surface-container-low">
                                        <tr>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Date</th>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Ticket ID</th>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Category</th>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Subject</th>
                                            <th className="px-6 py-4 font-label-caps text-on-surface-variant uppercase tracking-wider text-xs">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Empty State Row */}
                                        <tr>
                                            <td className="px-6 py-20" colSpan={5}>
                                                <div className="flex flex-col items-center justify-center text-center space-y-4">
                                                    <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant/30">
                                                        <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 0" }}>confirmation_number</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-headline-md text-headline-md text-on-surface">No tickets found</h3>
                                                        <p className="text-on-surface-variant text-sm mt-1">You haven't raised any {activeTab} support tickets yet. Click 'New Request' to start.</p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile View Empty State */}
                            <div className="block sm:hidden py-16 px-4">
                                <div className="flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant/30 mx-auto">
                                        <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 0" }}>confirmation_number</span>
                                    </div>
                                    <div>
                                        <h3 className="font-headline-md text-headline-md text-on-surface">No tickets found</h3>
                                        <p className="text-on-surface-variant text-sm mt-1">You haven't raised any {activeTab} support tickets yet. Click 'New Request' to start.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Table Footer / Pagination */}
                            <div className="px-6 py-4 bg-white border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="text-body-md text-on-surface-variant text-sm">
                                    Showing <span className="font-semibold">0</span> to <span className="font-semibold">0</span> of <span className="font-semibold">0</span> entries
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-4 py-2 text-body-md font-medium text-on-surface-variant bg-surface-container-low rounded-lg opacity-50 cursor-not-allowed text-sm">
                                        Previous
                                    </button>
                                    <button className="px-4 py-2 text-body-md font-medium text-on-surface-variant bg-surface-container-low rounded-lg opacity-50 cursor-not-allowed text-sm">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Assistance Bento Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                            <div className="p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all duration-300 space-y-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined">auto_stories</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-headline-md">Knowledge Base</h4>
                                    <p className="text-on-surface-variant text-sm mt-1">Find answers to common logistics questions and platform tutorials.</p>
                                </div>
                                <a className="text-secondary font-medium flex items-center gap-1 hover:underline text-sm inline-block" href="#">
                                    Visit Help Center <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                            <div className="p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all duration-300 space-y-4">
                                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                                    <span className="material-symbols-outlined">chat</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-headline-md">Live Support</h4>
                                    <p className="text-on-surface-variant text-sm mt-1">Chat directly with our support agents during business hours (9AM - 6PM).</p>
                                </div>
                                <a className="text-secondary font-medium flex items-center gap-1 hover:underline text-sm inline-block" href="#">
                                    Start Live Chat <span className="material-symbols-outlined text-sm">chat_bubble</span>
                                </a>
                            </div>
                            <div className="p-6 bg-white border border-outline-variant rounded-xl hover:shadow-md transition-all duration-300 space-y-4">
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-headline-md">Hotline</h4>
                                    <p className="text-on-surface-variant text-sm mt-1">Urgent escalation? Call our dedicated support line for priority accounts.</p>
                                </div>
                                <p className="font-semibold text-primary text-sm">+1 (800) LOGI-INTEL</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
