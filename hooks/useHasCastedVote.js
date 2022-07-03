import { useContractRead, useAccount } from "wagmi";
import { CROWD_FUNDING_ABI } from "../constants";
import { CROWD_FUNDING_ADDRESS } from "../constants";

const useHasCastedVote = (req_id) => {
  //hook to exe makeRequestProposal method
  const { data: account } = useAccount();
  const address = account?.address;

  const { data: hasCastedVote } = useContractRead(
    {
      addressOrName: CROWD_FUNDING_ADDRESS,
      contractInterface: CROWD_FUNDING_ABI,
    },
    "castedVote",
    {
      args: [req_id, address],
    }
  );

  return {
    hasCastedVote,
  };
};

export default useHasCastedVote;
