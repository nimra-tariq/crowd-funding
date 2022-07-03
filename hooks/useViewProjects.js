import { useAccount, useBalance } from "wagmi";
import { formatEther } from "ethers/lib/utils";
import { BigNumber } from "ethers";

const useViewProject = (description, amountNeeded, unit, recipientAddress) => {
  const { data: account } = useAccount();
  const address = account?.address;

  const { data: balance } = useBalance({
    addressOrName: address,
  });

  //hook to exe makeRequestProposal method

  console.log(typeof balance?.formatted);
  console.log(balance?.formatted);

  const oneEther = BigNumber.from("1964979756224775479");
  console.log(formatEther(oneEther, 18));

  return {
    // totalBalance : balance?.decimals ? formatUnits(BigNumber.from("2.964979756224775479")) : 0
  };
};

export default useViewProject;
