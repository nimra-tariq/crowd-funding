import { useContractWrite, useAccount } from "wagmi";
import { CROWD_FUNDING_ARGS } from "../constants";

const useCastVote = (req_id) => {
  //hook to exe makeRequestProposal method
  const {
    data,
    status,
    isLoading: loading,
    isError,
    isSuccess,
    write: castVote,
  } = useContractWrite(CROWD_FUNDING_ARGS, "castVote", {
    args: [req_id],
    onError(error) {
      console.log("Error", error);
    },
    watch: true,
  });

  return {
    loading,
    castVote: () => castVote(),
    status,
    success: isSuccess,
    error: isError,
  };
};

export default useCastVote;
