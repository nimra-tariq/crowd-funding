import React from "react";
import { projects } from "../constants";
import useViewRequest from "../hooks/useViewRequest";
const DonationProject = ({ req_id, theme }) => {
  const {
    description,
    recipientAdrress,
    totalAmountNeeded,
    isFunded,
    NoOfVoters,
  } = useViewRequest(Number(req_id));

  // console.log(
  //   description,"des",
  //   recipientAdrress,"add",
  //   totalAmountNeeded,"amount",
  //   isFunded,"bool",
  //   NoOfVoters,"voters"
  // );

  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div
            className={`w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-${theme}-500 text-white flex-shrink-0`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-white text-lg title-font font-medium">
            {description} 
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            Recipient : {recipientAdrress}
          </p>
          <p className="leading-relaxed text-base">
            Total Amount Needed : {totalAmountNeeded} Wei
          </p>
          <h2 className="text-white text-lg title-font font-medium mb-2">
            Total Voters : {NoOfVoters}
          </h2>
          <h2 className="text-white text-lg title-font font-medium mb-2">
            Funded : {isFunded ? "true" : "false"}
          </h2>
          <div className="justify-center inline-flex items-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Donate
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProject;
