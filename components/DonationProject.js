import React from 'react'

const DonationProject = ({ description, recipientAdrress, totalAmountNeeded, isFunded, NoOfVoters, theme }) => {
    return (
        <div className="p-4 md:w-1/3 flex">
            <div className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${theme}-100 text-${theme}-500 mb-4 flex-shrink-0`}>
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </div>
            <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    {description}
                </h2>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Recipient : {recipientAdrress}
                </h2>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Amount Needed : {totalAmountNeeded}
                </h2>
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Total Voters : {NoOfVoters}
                </h2>
                {/* <a href className={`mt-3 text-${props.theme}-500 inline-flex items-center`}>
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a> */}
                <div className="justify-center inline-flex items-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate</button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Cast Vote</button>
                </div>
            </div>
        </div>
    )
}

export default DonationProject