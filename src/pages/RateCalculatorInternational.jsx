import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function RateCalculatorInternational() {
    const [calculating, setCalculating] = useState(false);

    const handleCalculate = (e) => {
        e.preventDefault();
        setCalculating(true);
        setTimeout(() => setCalculating(false), 800);
    };

    return (
        <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] flex-1">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto mt-16 p-4 sm:p-gutter custom-scrollbar">
                    <div className="max-w-container-max mx-auto space-y-gutter flex flex-col h-full">
                        {/* Header */}
                        <div>
                            <h2 className="font-headline-lg text-3xl font-bold text-slate-900 tracking-tight">International Shipping Rate Calculator</h2>
                            <p className="text-slate-500 text-sm mt-1">Get precise logistics costs across borders with our intelligent pricing engine.</p>
                        </div>

                        {/* Layout Grid */}
                        <div className="grid grid-cols-12 gap-6 flex-1">
                            {/* Form Area */}
                            <div className="col-span-12 lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm h-fit">
                                <form onSubmit={handleCalculate} className="space-y-6">
                                    {/* Origin & Destination */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Origin Pincode <span className="text-red-500">*</span></label>
                                            <input required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700" placeholder="Enter pincode" type="text"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Destination Country <span className="text-red-500">*</span></label>
                                            <select required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700">
                                                <option value="">Select Destination Country</option>
                                                <option>United States</option>
                                                <option>United Kingdom</option>
                                                <option>Germany</option>
                                                <option>Canada</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Destination Zipcode <span className="text-red-500">*</span></label>
                                            <input required className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700" placeholder="Enter zipcode" type="text"/>
                                        </div>
                                    </div>

                                    {/* Weight & Dimensions (Dark Section) */}
                                    <div className="bg-slate-800 rounded-xl p-6 text-white">
                                        <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-emerald-400">square_foot</span>
                                            Weight &amp; Dimensions
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Weight (Kg) *</label>
                                                <input required className="w-full bg-slate-700/50 border-none text-white placeholder:text-slate-500 rounded-lg p-2 text-sm focus:ring-1 focus:ring-emerald-400 outline-none" placeholder="0.00" step="any" type="number"/>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Qty *</label>
                                                <input required className="w-full bg-slate-700/50 border-none text-white placeholder:text-slate-500 rounded-lg p-2 text-sm focus:ring-1 focus:ring-emerald-400 outline-none" placeholder="1" type="number"/>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Length *</label>
                                                <input required className="w-full bg-slate-700/50 border-none text-white placeholder:text-slate-500 rounded-lg p-2 text-sm focus:ring-1 focus:ring-emerald-400 outline-none" placeholder="cm" type="number"/>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Width *</label>
                                                <input required className="w-full bg-slate-700/50 border-none text-white placeholder:text-slate-500 rounded-lg p-2 text-sm focus:ring-1 focus:ring-emerald-400 outline-none" placeholder="cm" type="number"/>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Height *</label>
                                                <input required className="w-full bg-slate-700/50 border-none text-white placeholder:text-slate-500 rounded-lg p-2 text-sm focus:ring-1 focus:ring-emerald-400 outline-none" placeholder="cm" type="number"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Secondary Form Params */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-dashed border-slate-200">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Shipment Type <span className="text-red-500">*</span></label>
                                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700">
                                                <option>Courier Document</option>
                                                <option>Parcel (Merchandise)</option>
                                                <option>Palletized Cargo</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Invoice Value <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                                                <input required className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-700" placeholder="0.00" type="number"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                        <button className="flex-1 bg-[#009668] hover:opacity-90 text-white font-bold py-4 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2" type="submit">
                                            <span className="material-symbols-outlined">analytics</span>
                                            {calculating ? 'Calculating Rates...' : 'Calculate Shipping Rate'}
                                        </button>
                                        <button className="px-10 border border-slate-400 text-slate-600 hover:bg-slate-50 font-bold py-4 rounded-lg transition-all" type="reset">
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Illustration Side Panel */}
                            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                                <div className="relative group overflow-hidden rounded-2xl h-full min-h-[450px] flex flex-col bg-[#2170e4] text-white shadow-sm">
                                    {/* Decorative background pattern */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                                    {/* Illustration Placeholder */}
                                    <div className="relative flex-1 flex items-center justify-center p-8 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2170e4] to-blue-800 opacity-60"></div>
                                        <img className="relative z-10 w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out object-contain drop-shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz-NIRSrO-OcQNei1WhM9F-w4ZZA39zVvSVCpGjUjZ7rt5d0pWq1uXosGoqk9w_TDzp3HsKDeo2I2D87oityZfCz6zGDL3xlmIRki87LpPFsKps_-uZv32EB_HrPk-IlY7UOyGI2irthG53oZbGniRVO4eRoh-e1uxTMZyFO6rdwXS86Qy-WMlWzbjHWjvtFtM-MDM9ZZ20Z8-jdQkpHVJyBz5cflU0yk3ShoHSaiBOCUDDnhPyPbRrC1SEI1fu_yOSbwjNoHkmzSk" alt="Plane Illustration" />
                                    </div>
                                    {/* Content overlay */}
                                    <div className="bg-white p-6 sm:p-8 relative z-10 border-t border-slate-200 text-slate-800">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shrink-0">
                                                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900">Global Reach</h4>
                                                <p className="text-slate-500 text-sm mt-1">Connect to over 220+ countries with optimized routes and real-time tracking intelligence.</p>
                                            </div>
                                        </div>
                                        <div className="mt-8 grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AVG SPEED</p>
                                                <p className="text-lg font-bold text-blue-600">3-5 Days</p>
                                            </div>
                                            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ACCURACY</p>
                                                <p className="text-lg font-bold text-emerald-600">99.8%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Trust Marks */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60 hover:opacity-100 transition-all duration-500 pt-6">
                            <div className="flex items-center justify-center py-4 px-6 border border-slate-200 rounded-lg border-dashed text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">SECURE PAYMENT</p>
                            </div>
                            <div className="flex items-center justify-center py-4 px-6 border border-slate-200 rounded-lg border-dashed text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">IATA CERTIFIED</p>
                            </div>
                            <div className="flex items-center justify-center py-4 px-6 border border-slate-200 rounded-lg border-dashed text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">SMART ROUTING</p>
                            </div>
                            <div className="flex items-center justify-center py-4 px-6 border border-slate-200 rounded-lg border-dashed text-center">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">24/7 SUPPORT</p>
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
