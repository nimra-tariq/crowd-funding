import { useContractWrite, useAccount } from "wagmi";
import { CROWD_FUNDING_ARGS } from "../constants";

const useMakePayment = (req_id) => {
  //hook to exe makeRequestProposal method
  const {
    data,
    status,
    isLoading: loading,
    isError,
    isSuccess,
    write: withdraw,
  } = useContractWrite(CROWD_FUNDING_ARGS, "withdrawAmount", {
    args: [req_id],
    onError(error) {
      console.log("Error", error);
    },
    watch: true,
  });

  return {
    loading,
    withdraw: () => withdraw(),
    status,
    success: isSuccess,
    error: isError,
  };
};

export default useMakePayment;
