import React from "react";
import PropTypes from "prop-types";
import DonationProject from "../DonationProject";

function ViewDonationProject(props) {

  const projects = [{
    description: "description here",
    recipientAdrress: "0x4783763333",
    totalAmountNeeded: "100 wei",
    isFunded: false,
    NoOfVoters: "0"
  },
  {
    description: "description here",
    recipientAdrress: "0x4783763333",
    totalAmountNeeded: "100 wei",
    isFunded: false,
    NoOfVoters: "0"
  },
  {
    description: "description here",
    recipientAdrress: "0x4783763333",
    totalAmountNeeded: "100 wei",
    isFunded: false,
    NoOfVoters: "0"
  },
  {
    description: "description here",
    recipientAdrress: "0x4783763333",
    totalAmountNeeded: "100 wei",
    isFunded: false,
    NoOfVoters: "0"
  }]

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Donation Proposal Requests<br className="hidden sm:block" />
          Donate to become part of decentrailzed funds raising compaign
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* map donation projects here */}
          {
            projects.map(({ description, recipientAdrress, totalAmountNeeded, isFunded, NoOfVoters }, i) =>
              <DonationProject Key={i} theme="indigo" description={description} recipientAdrress={recipientAdrress} totalAmountNeeded={totalAmountNeeded} isFunded={isFunded} NoOfVoters={NoOfVoters} />)
          }
        </div>
      </div>
    </section>
  );
}

ViewDonationProject.defaultProps = {
  theme: 'indigo'
};

ViewDonationProject.propTypes = {
  theme: PropTypes.string.isRequired
};

export default ViewDonationProject;