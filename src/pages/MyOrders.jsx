import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

export default function MyOrders() {
  return (
    <div className="h-screen overflow-hidden bg-shipdesk-surface font-sans">
      <Sidebar />

      <div className="flex flex-col min-w-0 ml-0 lg:ml-[260px] h-full">
        <Topbar className="fixed top-0 left-0 lg:left-[260px] right-0 z-40" />

        {/* BEGIN: MainContent */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar mt-16 lg:mt-0">
          {/* BEGIN: StepIndicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-blue-600 font-semibold">Create New Order</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-400">Choose Shipping Partners</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-400">Create Order Details</span>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors shadow-sm self-start sm:self-auto">
              ✈️ Create International Order
            </button>
          </div>
          {/* END: StepIndicator */}
          <div className="flex flex-col xl:flex-row gap-8">
            {/* BEGIN: FormContainer */}
            <div className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden" data-purpose="order-form-container">
              <div className="p-8 space-y-10">
                {/* BEGIN: PickupDestinationDetails */}
                <section data-purpose="pickup-destination-section">
                  <h2 className="text-lg font-bold text-slate-800 mb-6">Pickup &amp; Destination Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Pickup Area Pincode <span className="text-red-500">*</span></label>
                      <input className="w-full border-slate-200 rounded-lg bg-slate-50/50 p-3 focus:ring-shipdesk-blue focus:border-shipdesk-blue" placeholder="Origin Pincode" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Deliver Area Pincode <span className="text-red-500">*</span></label>
                      <input className="w-full border-slate-200 rounded-lg bg-slate-50/50 p-3 focus:ring-shipdesk-blue focus:border-shipdesk-blue" placeholder="Destination Pincode" type="text" />
                    </div>
                  </div>
                </section>
                {/* END: PickupDestinationDetails */}
                {/* BEGIN: WeightDimensions */}
                <section data-purpose="weight-dimensions-section">
                  <h2 className="text-lg font-bold text-slate-800 mb-6">Weight &amp; Dimensions(In cm)</h2>
                  <div className="overflow-x-auto pb-4 custom-scrollbar">
                    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 min-w-[600px]">
                      <div className="grid grid-cols-5 text-[11px] font-bold text-slate-400 uppercase tracking-wider px-6 py-4 bg-slate-900/40">
                        <div className="col-span-1">Weight (in Kg)</div>
                        <div className="text-center">Qty</div>
                        <div className="text-center">Length</div>
                        <div className="text-center">Width</div>
                        <div className="text-center">Height</div>
                      </div>
                      <div className="grid grid-cols-5 gap-3 p-6 pt-2">
                        <div className="col-span-1">
                          <input className="w-full bg-slate-700/50 border-slate-600 rounded-lg text-white placeholder-slate-500 text-sm py-2.5 focus:ring-blue-500" placeholder="Enter Total Weight" type="text" />
                        </div>
                        <div className="text-center">
                          <input className="w-3/4 mx-auto bg-slate-700/50 border-slate-600 rounded-lg text-white placeholder-slate-500 text-sm py-2.5 text-center focus:ring-blue-500" placeholder="Qty" type="text" />
                        </div>
                        <div className="text-center">
                          <input className="w-3/4 mx-auto bg-slate-700/50 border-slate-600 rounded-lg text-white placeholder-slate-500 text-sm py-2.5 text-center focus:ring-blue-500" placeholder="Length" type="text" />
                        </div>
                        <div className="text-center">
                          <input className="w-3/4 mx-auto bg-slate-700/50 border-slate-600 rounded-lg text-white placeholder-slate-500 text-sm py-2.5 text-center focus:ring-blue-500" placeholder="Width" type="text" />
                        </div>
                        <div className="text-center">
                          <input className="w-3/4 mx-auto bg-slate-700/50 border-slate-600 rounded-lg text-white placeholder-slate-500 text-sm py-2.5 text-center focus:ring-blue-500" placeholder="Height" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* END: WeightDimensions */}
                {/* BEGIN: ModeInvoiceDetails */}
                <section data-purpose="mode-invoice-section">
                  <h2 className="text-lg font-bold text-slate-800 mb-6 border-t pt-8 border-slate-100">Mode &amp; Invoice Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Payment Mode <span className="text-red-500">*</span></label>
                      <select className="w-full border-slate-200 rounded-lg bg-slate-50/50 p-3 focus:ring-shipdesk-blue focus:border-shipdesk-blue">
                        <option>Prepaid</option>
                        <option>Cash on Delivery</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Invoice Value <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">₹</span>
                        <input className="w-full pl-8 border-slate-200 rounded-lg bg-slate-50/50 p-3 focus:ring-shipdesk-blue focus:border-shipdesk-blue" placeholder="Enter Invoice Value" type="text" />
                      </div>
                    </div>
                  </div>
                </section>
                {/* END: ModeInvoiceDetails */}
                {/* BEGIN: AdditionalSettings */}
                <section className="bg-indigo-50/50 rounded-2xl p-4 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" data-purpose="additional-settings">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 w-full">
                    <div>
                      <p className="text-sm font-semibold text-indigo-900 mb-3">Insurance ?</p>
                      <div className="flex items-center space-x-6">
                        <label className="inline-flex items-center">
                          <input className="rounded text-indigo-600 focus:ring-indigo-500" type="checkbox" />
                          <span className="ml-2 text-sm text-indigo-700">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input defaultChecked={true} className="rounded text-indigo-600 focus:ring-indigo-500" type="checkbox" />
                          <span className="ml-2 text-sm text-indigo-700">No</span>
                        </label>
                      </div>
                    </div>
                    <div className="hidden md:block h-10 w-px bg-indigo-200"></div>
                    <div>
                      <p className="text-sm font-semibold text-indigo-900 mb-3">Appointment Base Delivery</p>
                      <div className="flex items-center">
                        <button className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none bg-slate-300" type="button">
                          <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                        </button>
                        <span className="ml-3 text-sm text-indigo-700">No</span>
                      </div>
                    </div>
                  </div>
                </section>
                {/* END: AdditionalSettings */}
                {/* BEGIN: FormActions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="w-full sm:flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all">
                    Search Courier Partner
                  </button>
                  <button className="w-full sm:w-1/3 bg-white border border-red-200 text-red-600 font-bold py-4 rounded-xl hover:bg-red-50 transition-all">
                    Reset
                  </button>
                </div>
                {/* END: FormActions */}
              </div>
            </div>
            {/* END: FormContainer */}
            {/* BEGIN: SidebarIllustration */}
            <aside className="w-full xl:w-80 flex flex-col gap-6" data-purpose="promo-sidebar">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[600px]">
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl font-bold mb-6">Creating New Order Process</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                      <div className="bg-white/20 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                      <div>
                        <p className="font-semibold">Place a new order</p>
                        <p className="text-indigo-100 text-xs mt-1">Provide origin and destination details</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 opacity-70">
                      <div className="bg-white/20 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                      <div>
                        <p className="font-semibold">Select a shipping partner</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 opacity-70">
                      <div className="bg-white/20 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                      <div>
                        <p className="font-semibold">Enter order details</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Modern 3D Illustration Placeholder */}
                <div className="mt-auto relative z-10">
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <img alt="Logistics Illustration" className="w-full rounded-xl mix-blend-overlay opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyT1TJsGtFxvJRx9OPSSgSEveSzHv-AKNwTfUdlwSbZuLdAG25M643AJaWxz-1n_4Je0p2xycmiBPCQsamupgOdv_OW5amnyvdn3_PGz40tnQObJeQ8YQCUO2u-5f7hWBr7dwunp3k0spPMM-04KwohQ-QhxeuY1ztWFHahj6HLMYIfjJPVIQQLGhWwLJwyxD6tRJ-WWODwhgqHfBu5Keffcmnmzha0Dhk1eZAi0g_k9Qr1lOZaZix0W1IZ_moOWcSs8yJYIdhqy4h" />
                    <div className="mt-4 text-center">
                      <p className="text-xs text-indigo-100">Streamline your shipping workflow with our automated routing engine.</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/* END: SidebarIllustration */}
          </div>
        </main>
        {/* END: MainContent */}
        {/* BEGIN: Footer */}
        <footer className="py-4 bg-white border-t border-slate-100 flex flex-col md:flex-row items-center justify-between px-4 lg:px-8 gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a className="hover:text-shipdesk-blue" href="#">Privacy Policy</a>
            <span className="text-slate-200">|</span>
            <a className="hover:text-shipdesk-blue" href="#">Refund Policy</a>
            <span className="text-slate-200">|</span>
            <a className="hover:text-shipdesk-blue" href="#">Terms of Use</a>
          </div>
          <div className="text-center md:text-right">
            Copyright © 2026 Shipdesk Pvt. Ltd. | Made with <span className="text-red-500">❤️</span> in India
          </div>
        </footer>
        {/* END: Footer */}
      </div>
    </div>
  );
}
