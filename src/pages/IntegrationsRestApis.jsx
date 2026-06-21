import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function IntegrationsRestApis() {
    const [copied, setCopied] = useState(false);
    const apiKey = "sd_live_51hG782kL90pQxZ2m_99834vBcDeFgHiJk";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(apiKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col">
            <Sidebar />

            <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] flex-1">
                <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

                <main className="flex-1 overflow-y-auto mt-16 p-4 sm:p-gutter custom-scrollbar">
                    <div className="max-w-container-max mx-auto space-y-gutter">
                        <header className="mb-stack-lg">
                            <h2 className="font-headline-lg text-headline-lg text-primary">Rest API Integration</h2>
                            <p className="text-on-surface-variant text-sm mt-1">Generate API credentials and connect Shipdesk directly to your custom inventory systems.</p>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                            {/* API Keys Column */}
                            <div className="col-span-12 lg:col-span-7 space-y-gutter">
                                <div className="bg-white rounded-xl border border-outline-variant p-6 space-y-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                                        <span className="material-symbols-outlined text-secondary">vpn_key</span>
                                        API Credentials
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <label className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">Production API Key</label>
                                        <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded-lg p-3">
                                            <code className="text-xs font-mono select-all break-all flex-1 text-secondary-container font-semibold">{apiKey}</code>
                                            <button 
                                                onClick={copyToClipboard}
                                                className="shrink-0 p-2 hover:bg-surface-variant rounded-lg transition-colors flex items-center justify-center"
                                                title="Copy to clipboard"
                                            >
                                                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                                                    {copied ? 'check_circle' : 'content_copy'}
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-2">
                                        <button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-4 py-2.5 rounded-lg text-sm transition-all active:scale-95">
                                            Regenerate API Key
                                        </button>
                                        <span className="text-xs text-on-surface-variant">Last regenerated: 3 days ago</span>
                                    </div>
                                </div>

                                {/* Code Snippet Block */}
                                <div className="bg-[#131b2e] text-white rounded-xl p-6 space-y-4 shadow-sm relative group overflow-hidden">
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-headline-md text-sm text-secondary-fixed flex items-center gap-2">
                                            <span className="material-symbols-outlined text-secondary-fixed">code</span>
                                            cURL Request Example
                                        </h4>
                                    </div>
                                    <pre className="text-xs font-mono bg-black/40 p-4 rounded-lg overflow-x-auto text-[#a5d6ff]">
{`curl -X POST "https://api.shipdesk.com/v1/shipments" \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "origin_pincode": "110001",
    "destination_pincode": "400001",
    "weight": 2.5,
    "payment_mode": "Prepaid"
  }'`}
                                    </pre>
                                </div>
                            </div>

                            {/* Info Guide Column */}
                            <div className="col-span-12 lg:col-span-5">
                                <div className="bg-white border border-outline-variant rounded-xl p-6 space-y-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-primary border-l-4 border-secondary pl-4">Developer Reference</h3>
                                    
                                    <div className="space-y-4 text-sm text-on-surface-variant">
                                        <div className="flex gap-3 items-start">
                                            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">description</span>
                                            <div>
                                                <h5 className="font-semibold text-primary">API Documentation</h5>
                                                <p className="text-xs mt-1 text-on-surface-variant">Explore detailed reference guides for endpoints, headers, and payloads.</p>
                                                <a href="#" className="text-secondary hover:underline text-xs font-semibold inline-block mt-2">View API Docs &rarr;</a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-3 items-start pt-4 border-t border-slate-100">
                                            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">webhook</span>
                                            <div>
                                                <h5 className="font-semibold text-primary">Webhooks</h5>
                                                <p className="text-xs mt-1 text-on-surface-variant">Subscribe to real-time order updates, tracking status, and delivery milestones.</p>
                                                <a href="#" className="text-secondary hover:underline text-xs font-semibold inline-block mt-2">Manage Webhooks &rarr;</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
