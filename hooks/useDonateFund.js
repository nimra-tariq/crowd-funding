import { useContractWrite, useAccount } from "wagmi";
import { CROWD_FUNDING_ARGS } from "../constants";
import { parseUnits, parseEther } from "ethers/lib/utils";

const useDonateFund = (amount, unit) => {
  //   console.log(amount, unit);
  //   console.log(parseUnits(amount || "0", unit));
  const { data: account } = useAccount();
  const address = account?.address;

  //hook to exe makeRequestProposal method
  const {
    data,
    status,
    // write: donate,
    write,
  } = useContractWrite(CROWD_FUNDING_ARGS, "donateFunds", {
    args: [],
    onError(error) {
      console.log("Error", error);
    },
  });

  //   write({ overrides: { value: ethers.utils.parseEther("0.01") } });

  return {
    donate: () =>
      write({ overrides: { value: parseUnits(amount || "0", unit) } }),
    status,
  };
};

export default useDonateFund;
