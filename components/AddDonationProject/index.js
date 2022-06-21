import React from "react";
import useCreateProject from "../../hooks/useCreateProject";
import { useState } from "react";
import {
  Select,
  Paper,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";
import { Units } from "../../constants";

const AddDonationProject = () => {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [description, setDescription] = useState("");
  const [amountNeeded, setAmountNeeded] = useState("0");
  const [unit, setUnit] = useState(0);

  //hook makeProposalRequest
  const { makeProposalRequest,status } = useCreateProject(description,amountNeeded,unit,recipientAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    makeProposalRequest();
  };

  return (
    <>
      {/* lg:w-2/6 */}
      <section className="text-gray-600  h-hero-height font-bold body-font bg-gradient-to-r from-indigo-900 to-slate-900 lg:bg-donation-img md:bg-donation-img sm:bg-donation-img bg-cover bg-center object-cover bg-transparent ">
        <div className="container h-full px-5 mx-auto flex justify-center flex-wrap items-center">
          {/* <form type="submit"> */}
          <div className=" md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
            <h2 className="text-indigo-900 text-lg font-medium lg:text-4xl title-font mb-5">
              Add New Donation Project
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="recipient-address"
                className="leading-7 text-sm text-indigo-900"
              >
                Recipient Address
              </label>
              <input
                required
                type="text"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                id="recipient-address"
                name="recipient-address"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base otext-indigo-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="amount-needed"
                className="leading-7 text-sm text-indigo-900"
              >
                Amount Needed
              </label>
              <input
                required
                type="number"
                id="amount-needed"
                name="amount-needed"
                value={amountNeeded || "0"}
                min="0"
                onChange={(e) => setAmountNeeded(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-indigo-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <Paper>
                <Select
                  value={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                >
                  {Units.map((type, i) => {
                    return (
                      <MenuItem key={i} value={type.val}>
                        {type.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Paper>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="description"
                  className="leading-7 text-sm text-indigo-900"
                >
                  Description
                </label>
                {/* <textarea
                  required
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-indigo-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea> */}
                <TextareaAutosize
                  required
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-indigo-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="text-white bg-indigo-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Create Project
            </button>
            <p className="text-2xl  text-green-800 mt-3">{status}</p>
          </div>
          {/* </form> */}
        </div>
      </section>
    </>
  );
};

// bg-gradient-to-r from-indigo-900 to-slate-900

export default AddDonationProject;
