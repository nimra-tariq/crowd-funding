import { useContractRead } from "wagmi";
import { CROWD_FUNDING_ABI } from "../constants";
import { CROWD_FUNDING_ADDRESS } from "../constants";
import { formatUnits } from "ethers/lib/utils";

const useTotalRequests = () => {
  const { data: requests } = useContractRead(
    {
      addressOrName: CROWD_FUNDING_ADDRESS,
      contractInterface: CROWD_FUNDING_ABI,
    },
    "noOfRequests",
    {
      watch: true,
    }
  );

  return {
    requests: formatUnits(requests || "0", 0),
  };
};

export default useTotalRequests;
