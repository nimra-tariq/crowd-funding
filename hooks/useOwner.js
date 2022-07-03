import { useContractRead, useAccount } from "wagmi";
import { CROWD_FUNDING_ABI } from "../constants";
import { CROWD_FUNDING_ADDRESS } from "../constants";

const useOwner = () => {
  const { data: account } = useAccount();
  const address = account?.address;

  const { data: owner } = useContractRead(
    {
      addressOrName: CROWD_FUNDING_ADDRESS,
      contractInterface: CROWD_FUNDING_ABI,
    },
    "owner"
  );
  //   console.log(owner, "owner");
  return {
    isOwner: owner == address,
  };
};

export default useOwner;
