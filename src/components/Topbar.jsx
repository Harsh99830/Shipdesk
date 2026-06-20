import React from 'react';

export default function Topbar({ className }) {
  return (
    <header className={`h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-40 ${className || ''}`} data-purpose="top-bar">
      <div className="flex items-center gap-4 flex-1">
        <button 
          className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => window.dispatchEvent(new Event('toggle-mobile-sidebar'))}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="relative w-full max-w-md hidden sm:block">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </span>
          <input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Search BY LRN/AWB no" type="text" />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
          <span className="text-blue-600 font-bold mr-2">₹ 200.00</span>
          <button className="bg-blue-600 text-white rounded p-0.5"><svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
        </div>
        <button className="text-slate-500 hover:text-shipdesk-blue"><svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
        <button className="relative text-slate-500 hover:text-shipdesk-blue">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">Prakhar Sharma</p>
            <p className="text-xs text-slate-500">SHIPDESK12277</p>
          </div>
          <img alt="Profile" className="h-10 w-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvgsBFE7khb7K_wXVYo504YDcqOWrOlDCtz3a_qar_FvM5yW3A1T5s877fyYm5wxWK7kDiiGNZuglogztAnhEIizhBNEMWG5jFJ1jndoHYmKN0JFlbv2aUW9QGU1UDEKClGrxD5qLLnsxAjrf6t4VfupL7l6UvRAQsVhwFCKo918l1knniOCtw2BbX4Tz8s0pBd8w7BNBhDQVJl4PQvjH69D5gRLrNgmZ7q5__tGFiADO6UxCg5etoPrB8wUlqJ1KA_pMMP7JvoQxe" />
        </div>
      </div>
    </header>
  );
}
