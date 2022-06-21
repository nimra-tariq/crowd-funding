import { useContractWrite, useAccount } from "wagmi";
import { CROWD_FUNDING_ARGS } from "../constants";
import { parseUnits } from "ethers/lib/utils";

const useCreateProject = (
  description,
  amountNeeded,
  unit,
  recipientAddress
) => {
  const { data: account } = useAccount();
  const address = account?.address;

  //hook to exe makeRequestProposal method
  const {
    data,
    status,
    write: makeProposalRequest,
  } = useContractWrite(CROWD_FUNDING_ARGS, "makeRequestProposal", {
    args: [
      description,
      recipientAddress,
      parseUnits(amountNeeded || "0", unit),
    ],
    onError(error) {
      console.log("Error", error);
    },
  });

  return {
    makeProposalRequest: () => makeProposalRequest(),
    status,
  };
};

export default useCreateProject;
