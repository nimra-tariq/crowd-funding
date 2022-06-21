import { useContractRead } from "wagmi";
import { CROWD_FUNDING_ABI } from "../constants";
import { CROWD_FUNDING_ADDRESS } from "../constants";
import { formatUnits } from "ethers/lib/utils";

const useViewRequest = (req_id) => {
  const { data: request } = useContractRead(
    {
      addressOrName: CROWD_FUNDING_ADDRESS,
      contractInterface: CROWD_FUNDING_ABI,
    },
    "requests",
    {
      args: [req_id],
    }
  );

  const description = request?.description,
    recipientAdrress = request?.recipient,
    totalAmountNeeded = request?.amountNeeded? formatUnits(request?.amountNeeded, 0): 0,
    isFunded = request?.isFunded,
    NoOfVoters = request?.noOfVoters ? formatUnits(request?.noOfVoters, 0) : 0;

  return {
    description,
    recipientAdrress,
    totalAmountNeeded,
    isFunded,
    NoOfVoters,
  };
};

export default useViewRequest;

// description,
//     recipientAdrress,
//     totalAmountNeeded,
//     isFunded,
//     NoOfVoters,
