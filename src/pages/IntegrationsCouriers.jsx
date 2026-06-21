import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function IntegrationsCouriers() {
    const [couriers, setCouriers] = useState([
        { id: 'delhivery', name: 'Delhivery', enabled: true, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3fogpaVTEbRehsbUMoK7PzP421A0JZQ8QASsCtDnYS1nafx4kpabeeO0jzoQV2JTPuSZZPLXKeED_2Bqdx5iWmQrkvGpLyt6kiGNATfesX3AaX1hRvMJM59-KcJrQGUwfuGplX_Du4YRgO9feOgwObSh_25WjnYCbljO7ZfxMqiQfS2gP_uemk8Kq37F8qGWGM5UEAY94kfgsDE0Kx4eodsCiE0zMV0HQb7tPVIzZKuXsw4bvYYVdyKLGzbiWiMs9DbZjdFOuqKCg' },
        { id: 'amazon', name: 'Amazon Logistics', enabled: true, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxkOc_ftT8ArIBQgtnI3XDADV4bb70JZmHLuZqIzAW676UAyrPwaRsY3toU5fE79UGluAEzd6A96UQa2gbP_yNLYYhP3ykmct91SsCAU8ZWfMaFOrAi5DY6PJJACslAswDd9ezsvK_m0j_SrFQrsW-uENDM2YLJsaRKEHTEHClTJrqyuySdpJgx_o5gMpRGZjT63RFpe-VHRcwjWTfq6A9OZLpyxgFu5Ai5aaezhDFNQ5pvNDk0XC6t6Kyx3Re4bTCRgDT0PCDx3Vg' },
        { id: 'bluedart', name: 'Blue Dart', enabled: false, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBzBjAGCubR4N8S-LuagNFRLQj8klhqbNjHjlhvfImU5raF80V2SGXfjLYTARUVzktNoGxbpcUQgO45I7XxNESLP-Ygy4D20laJ6h22K4JGdRyqNJevd0kXP5iCbrfrHj0IexCs5_HVc2Xw9v9z4s5LYKu0vSNrom-WqKFwyuLZ4Dp-KNCaPyAZL_UkAX9-9t-nIq5VxoWsrR-s2rrXVwbsFaAtX-ib0soUB547P0YEh9H-W8nzmS33ATme-uy0tlQFOrTI8co5DoD' },
        { id: 'xpressbees', name: 'XpressBees', enabled: true, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMliGo1tPhG0d_Y600A6XmettzqA-nuv8uOSUtUY06_NoEjWFBO8h813dlh2zr71T9C-TQwmwE_8T058fN2U2QlOwTfFvTihUaB7iLmijLYMioI1-K68zGUFlo5zQFkp769_1EGAB9SZxvhbtEt_v58zhyKXoOzaW2gp7KUt_1jQ5-1U5rJW8qYSG9AXB9dGVfQm9iJhYe9jIXULOJYNeQKmljeIKPbDnvt3lxEegm5k4BQtLGbZ1iQLBtaENLhx8woISr5P1cFjZD' }
    ]);

    const toggleCourier = (id) => {
        setCouriers(prev => prev.map(c => {
            if (c.id === id) {
                return { ...c, enabled: !c.enabled };
            }
            return c;
        }));
    };

    return (
        <div className="min-h-screen bg-background text-on-surface flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] flex-1">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                <main className="flex-1 overflow-y-auto mt-16 p-4 sm:p-gutter custom-scrollbar">
                    <div className="max-w-container-max mx-auto space-y-gutter">
                        <header className="mb-stack-lg">
                            <h2 className="font-headline-lg text-headline-lg text-primary">Courier Channel Integrations</h2>
                            <p className="text-on-surface-variant text-sm mt-1">Configure active channels for routing options. Enable or disable shipping partners based on operational requirements.</p>
                        </header>

                        <div className="bg-white border border-outline-variant rounded-xl shadow-sm divide-y divide-outline-variant overflow-hidden">
                            {couriers.map((courier) => (
                                <div key={courier.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-24 h-12 bg-white border border-outline-variant rounded-lg p-2 flex items-center justify-center">
                                            <img src={courier.logo} alt={courier.name} className="max-h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-base font-semibold text-primary">{courier.name}</h4>
                                            <p className="text-xs text-on-surface-variant mt-0.5">Active across India. Auto-reconciled billing enabled.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 self-end sm:self-auto">
                                        <span className={`text-xs font-semibold ${courier.enabled ? 'text-on-tertiary-container' : 'text-on-surface-variant'}`}>
                                            {courier.enabled ? 'Active Routing' : 'Disabled'}
                                        </span>
                                        <button 
                                            onClick={() => toggleCourier(courier.id)}
                                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                                courier.enabled ? 'bg-secondary' : 'bg-slate-200'
                                            }`}
                                        >
                                            <span 
                                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                                    courier.enabled ? 'translate-x-5' : 'translate-x-0'
                                                }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
