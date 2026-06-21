import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function IntegrationsPlugins() {
    const [plugins, setPlugins] = useState([
        { id: 'shopify', name: 'Shopify', status: 'Connected', desc: 'Sync orders and update tracking info automatically.' },
        { id: 'woocommerce', name: 'WooCommerce', status: 'Disconnected', desc: 'Link WooCommerce stores using secure REST integration.' },
        { id: 'magento', name: 'Magento 2', status: 'Disconnected', desc: 'Automate checkout shipping rate calculation.' }
    ]);

    const toggleStatus = (id) => {
        setPlugins(prev => prev.map(p => {
            if (p.id === id) {
                return { ...p, status: p.status === 'Connected' ? 'Disconnected' : 'Connected' };
            }
            return p;
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
                            <h2 className="font-headline-lg text-headline-lg text-primary">Store Plugins &amp; Carts</h2>
                            <p className="text-on-surface-variant text-sm mt-1">Connect your online store directly to import and manage sales channel shipments in real-time.</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                            {plugins.map((plugin) => (
                                <div key={plugin.id} className="bg-white border border-outline-variant rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl font-bold text-secondary text-lg border border-outline-variant">
                                                {plugin.name[0]}
                                            </div>
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                                                plugin.status === 'Connected' 
                                                    ? 'bg-on-tertiary-container/10 text-on-tertiary-container' 
                                                    : 'bg-surface-container text-on-surface-variant border border-outline-variant'
                                            }`}>
                                                {plugin.status}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline-md text-base font-semibold text-primary">{plugin.name}</h4>
                                            <p className="text-on-surface-variant text-xs mt-1.5 leading-relaxed">{plugin.desc}</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => toggleStatus(plugin.id)}
                                        className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all active:scale-[0.98] ${
                                            plugin.status === 'Connected'
                                                ? 'bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-variant'
                                                : 'bg-secondary hover:bg-secondary/90 text-white shadow-sm'
                                        }`}
                                    >
                                        {plugin.status === 'Connected' ? 'Disconnect Platform' : 'Connect Platform'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
