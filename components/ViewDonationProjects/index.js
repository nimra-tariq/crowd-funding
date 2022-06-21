import React from "react";
import PropTypes from "prop-types";
import DonationProject from "../DonationProject";
import useTotalRequests from "../../hooks/useTotalRequests";
import { useState, useEffect } from "react";

function ViewDonationProject(props) {
  //contract hook
  const { requests } = useTotalRequests();
  //state var for handling hydration issues of requests hook on preRender and firstRender
  const [reqs, setReqs] = useState("0");

  useEffect(() => {
    setReqs(requests);
  }, [requests]);

  return (
    <section className="text-gray-400 bg-gray-900 body-font  lg:h-hero-height">
      <div className="container bg-gray-900 px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex  flex-col text-center w-full mb-20">
          <h2
            className={`text-xs text-${props.theme}-400 tracking-widest font-medium title-font mb-1`}
          >
            Donation Proposal Requests
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Donate to become part of decentrailzed funds raising compaign
          </h1>
        </div>
        {Array(Number(reqs))
          ?.fill(1)
          ?.map((x, i) => (
            <div key={i}>
              <DonationProject theme="indigo" req_id={i} />
            </div>
          ))}
      </div>
    </section>
  );
}

ViewDonationProject.defaultProps = {
  theme: "indigo",
};

ViewDonationProject.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ViewDonationProject;
