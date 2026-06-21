import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function RateCalculatorDomestic() {
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
                    <div className="max-w-container-max mx-auto space-y-gutter">
                        <header className="mb-stack-lg">
                            <h2 className="font-headline-lg text-headline-lg text-primary">Shipping Rate Calculator</h2>
                            <div className="h-1 w-24 bg-secondary mt-2 rounded-full"></div>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                            {/* Calculation Form Column */}
                            <div className="col-span-12 lg:col-span-7">
                                <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-4 sm:p-stack-lg space-y-stack-lg">
                                    <form onSubmit={handleCalculate} className="space-y-stack-lg">
                                        {/* Main Fields Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                                            <div className="space-y-2">
                                                <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                                    Origin Pincode <span className="text-error">*</span>
                                                </label>
                                                <input required className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" placeholder="Origin Pincode" type="text" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                                    Destination Pincode <span className="text-error">*</span>
                                                </label>
                                                <input required className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" placeholder="Destination Pincode" type="text" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                                    Payment Mode <span className="text-error">*</span>
                                                </label>
                                                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all cursor-pointer">
                                                    <option>Prepaid</option>
                                                    <option>COD</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                                    Approx Weight (Kg) <span className="text-error">*</span>
                                                </label>
                                                <input required className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" placeholder="Weight" type="number" step="any" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-1">
                                                Invoice Value <span className="text-error">*</span>
                                            </label>
                                            <input required className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 text-body-md focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" placeholder="Invoice Value" type="number" />
                                        </div>

                                        {/* Dimensions Card */}
                                        <div className="bg-primary-container rounded-xl p-6 text-white overflow-hidden relative group">
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2 bg-secondary rounded-lg">
                                                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>straighten</span>
                                                    </div>
                                                    <h3 className="font-headline-md text-headline-md">Dimensions in cms</h3>
                                                </div>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                                                    <div className="space-y-2">
                                                        <label className="font-label-caps text-[10px] text-on-primary-container">QTY <span className="text-secondary">*</span></label>
                                                        <input required className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white placeholder:text-white/40 focus:bg-white/20 transition-all outline-none" placeholder="Qty" type="text" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="font-label-caps text-[10px] text-on-primary-container">LENGTH <span className="text-secondary">*</span></label>
                                                        <input required className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white placeholder:text-white/40 focus:bg-white/20 transition-all outline-none" placeholder="L" type="text" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="font-label-caps text-[10px] text-on-primary-container">HEIGHT <span className="text-secondary">*</span></label>
                                                        <input required className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white placeholder:text-white/40 focus:bg-white/20 transition-all outline-none" placeholder="H" type="text" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="font-label-caps text-[10px] text-on-primary-container">WIDTH <span className="text-secondary">*</span></label>
                                                        <input required className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white placeholder:text-white/40 focus:bg-white/20 transition-all outline-none" placeholder="W" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Background Accent */}
                                            <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-20 transition-opacity animate-pulse">
                                                <span className="material-symbols-outlined text-[180px]">inventory_2</span>
                                            </div>
                                        </div>

                                        {/* Options Section */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg pt-4 border-t border-dashed border-outline-variant">
                                            <div className="space-y-3">
                                                <p className="font-label-caps text-label-caps text-on-surface-variant">Insurance?</p>
                                                <div className="flex gap-6">
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input className="w-5 h-5 text-secondary border-outline focus:ring-secondary" name="insurance" type="radio" />
                                                        <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Yes</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input defaultChecked className="w-5 h-5 text-secondary border-outline focus:ring-secondary" name="insurance" type="radio" />
                                                        <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <p className="font-label-caps text-label-caps text-on-surface-variant">Appointment Base Delivery?</p>
                                                <div className="flex gap-6">
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input className="w-5 h-5 text-secondary border-outline focus:ring-secondary" name="appointment" type="radio" />
                                                        <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Yes</span>
                                                    </label>
                                                    <label className="flex items-center gap-2 cursor-pointer group">
                                                        <input defaultChecked className="w-5 h-5 text-secondary border-outline focus:ring-secondary" name="appointment" type="radio" />
                                                        <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <button type="submit" className="flex-1 bg-on-tertiary-container hover:bg-on-tertiary-container/90 text-white font-headline-md py-4 rounded-xl transition-all shadow-lg shadow-on-tertiary-container/20 flex items-center justify-center gap-2 w-full sm:w-auto">
                                                {calculating ? (
                                                    <><span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span> Calculating...</>
                                                ) : (
                                                    'Calculate'
                                                )}
                                            </button>
                                            <button type="reset" className="flex-1 bg-white border border-outline-variant hover:bg-surface-container-high text-on-surface font-headline-md py-4 rounded-xl transition-all w-full sm:w-auto">
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Partners Column */}
                            <div className="col-span-12 lg:col-span-5 h-fit lg:h-full">
                                <div className="bg-gradient-to-br from-secondary-container to-primary-container rounded-3xl p-6 sm:p-8 min-h-[400px] h-full flex flex-col relative overflow-hidden group text-white">
                                    {/* Map Layer */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none p-12">
                                        <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Map_of_India.svg')] bg-contain bg-center bg-no-repeat invert brightness-0"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <h3 className="font-headline-lg text-headline-lg text-white mb-8 border-l-4 border-secondary pl-4">Our Delivery Partners</h3>
                                        <div className="grid grid-cols-2 gap-4 mt-auto">
                                            {/* Partner Cards */}
                                            <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform">
                                                <img className="max-h-8 object-contain" alt="Delhivery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3fogpaVTEbRehsbUMoK7PzP421A0JZQ8QASsCtDnYS1nafx4kpabeeO0jzoQV2JTPuSZZPLXKeED_2Bqdx5iWmQrkvGpLyt6kiGNATfesX3AaX1hRvMJM59-KcJrQGUwfuGplX_Du4YRgO9feOgwObSh_25WjnYCbljO7ZfxMqiQfS2gP_uemk8Kq37F8qGWGM5UEAY94kfgsDE0Kx4eodsCiE0zMV0HQb7tPVIzZKuXsw4bvYYVdyKLGzbiWiMs9DbZjdFOuqKCg" />
                                            </div>
                                            <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform">
                                                <img className="max-h-8 object-contain" alt="Amazon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxkOc_ftT8ArIBQgtnI3XDADV4bb70JZmHLuZqIzAW676UAyrPwaRsY3toU5fE79UGluAEzd6A96UQa2gbP_yNLYYhP3ykmct91SsCAU8ZWfMaFOrAi5DY6PJJACslAswDd9ezsvK_m0j_SrFQrsW-uENDM2YLJsaRKEHTEHClTJrqyuySdpJgx_o5gMpRGZjT63RFpe-VHRcwjWTfq6A9OZLpyxgFu5Ai5aaezhDFNQ5pvNDk0XC6t6Kyx3Re4bTCRgDT0PCDx3Vg" />
                                            </div>
                                            <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform">
                                                <img className="max-h-8 object-contain" alt="Blue Dart" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBzBjAGCubR4N8S-LuagNFRLQj8klhqbNjHjlhvfImU5raF80V2SGXfjLYTARUVzktNoGxbpcUQgO45I7XxNESLP-Ygy4D20laJ6h22K4JGdRyqNJevd0kXP5iCbrfrHj0IexCs5_HVc2Xw9v9z4s5LYKu0vSNrom-WqKFwyuLZ4Dp-KNCaPyAZL_UkAX9-9t-nIq5VxoWsrR-s2rrXVwbsFaAtX-ib0soUB547P0YEh9H-W8nzmS33ATme-uy0tlQFOrTI8co5DoD" />
                                            </div>
                                            <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform">
                                                <img className="max-h-8 object-contain" alt="XpressBees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMliGo1tPhG0d_Y600A6XmettzqA-nuv8uOSUtUY06_NoEjWFBO8h813dlh2zr71T9C-TQwmwE_8T058fN2U2QlOwTfFvTihUaB7iLmijLYMioI1-K68zGUFlo5zQFkp769_1EGAB9SZxvhbtEt_v58zhyKXoOzaW2gp7KUt_1jQ5-1U5rJW8qYSG9AXB9dGVfQm9iJhYe9jIXULOJYNeQKmljeIKPbDnvt3lxEegm5k4BQtLGbZ1iQLBtaENLhx8woISr5P1cFjZD" />
                                            </div>
                                            <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform">
                                                <img className="max-h-8 object-contain" alt="Ecom Express" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqENfs81KOoC_78-uYHApaCMESRu5hro_aYMT02SWR6ZKwVdofNkMNeZ4YYG-UUIlsv7KrybuLXdhDxt8te9t7VBAk0p2igyXNtD8zCC2x9rt6okIqhhj9cVbPOfRGt7II2t2MKuIOZF3UacIWoiseLH6O9U5jcedXzKRfTbRwoaKIrv2GUNg-p82OqJni8zjv0-LCYw6uRtm8OjWhfTuHbrmYahwWwqf9b35A9jCgBv0gYeFhI5miQGZFewe_m_P_6gJUY578Yl2Q" />
                                            </div>
                                            <div className="bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform">
                                                <img className="max-h-8 object-contain" alt="Smartr Logistics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2QuRJkhQdNIMCwx1dg2_4peMBBw9NvAyC2ZMY6j-eg4JRwznc_cjAvb4I0DZb7i5YjBrOTacwcq-3iiQ613dIuGMRXOPGu5aHe1c6K2E9un34zXo52jhexomDkjOr8fn3eTcP0h9AcEwh0ZJ2rfo9i0EiDsgqfSJmmVd-MwG-J3vj2MZHcRdLjl4LvUFnQ0KNIEUJmbSZUV8b0O9lXrbap8a8ncOJLzi9VfxHXXRfXvrorGO_TrKY3DrsEds51HlIcjtjfUuPeYI" />
                                            </div>
                                        </div>
                                        <div className="mt-8 text-center">
                                            <p className="text-white/60 text-body-md">Connecting businesses with 27,000+ pincodes across India through reliable network partners.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Stats / Info */}
                        <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-stack-lg pb-10">
                            <div className="bg-white border border-outline-variant p-6 rounded-xl flex items-center gap-4 shadow-sm">
                                <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-full text-secondary">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <div>
                                    <p className="text-xs font-label-caps text-on-surface-variant uppercase">Real-time Rates</p>
                                    <p className="font-headline-md text-on-surface">Precision Pricing</p>
                                </div>
                            </div>
                            <div className="bg-white border border-outline-variant p-6 rounded-xl flex items-center gap-4 shadow-sm">
                                <div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-full text-on-tertiary-container">
                                    <span className="material-symbols-outlined">map</span>
                                </div>
                                <div>
                                    <p className="text-xs font-label-caps text-on-surface-variant uppercase">Network Reach</p>
                                    <p className="font-headline-md text-on-surface">27,000+ Pincodes</p>
                                </div>
                            </div>
                            <div className="bg-white border border-outline-variant p-6 rounded-xl flex items-center gap-4 shadow-sm">
                                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-full text-primary">
                                    <span className="material-symbols-outlined">support</span>
                                </div>
                                <div>
                                    <p className="text-xs font-label-caps text-on-surface-variant uppercase">Customer Support</p>
                                    <p className="font-headline-md text-on-surface">24/7 Assistance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

