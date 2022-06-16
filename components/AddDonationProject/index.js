import React from 'react'

const AddDonationProject = () => {
    return (
        <>
           <section className="text-gray-600  h-hero-height font-bold body-font bg-donation-img bg-cover object-cover bg-transparent ">
                <div className="container h-full px-5 mx-auto flex justify-center flex-wrap items-center">
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
                        <h2 className="text-indigo-900 text-lg font-medium lg:text-4xl title-font mb-5">Add New Donation Project</h2>
                        <div className="relative mb-4">
                            <label htmlFor="recipient-address" className="leading-7 text-sm text-indigo-900">Recipient Address</label>
                            <input type="text" id="recipient-address" name="recipient-address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base otext-indigo-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="amount-needed" className="leading-7 text-sm text-indigo-900">Amount Needed(WEi)</label>
                            <input type="text" id="amount-needed" name="amount-needed" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-indigo-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="description" className="leading-7 text-sm text-indigo-900">Description</label>
                                <textarea id="description" name="description" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-indigo-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <button className="text-white bg-indigo-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create Project</button>
                        <p className="text-xs text-gray-500 mt-3">Error Message here</p>
                    </div>
                </div>
            </section>

        </>
    )
}

// bg-gradient-to-r from-indigo-900 to-slate-900

export default AddDonationProject

