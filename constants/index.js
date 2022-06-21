import CROWD_FUNDING_ABI from "../crowdFundingABi.json";
export const CROWD_FUNDING_ADDRESS =
  "0xAb1207074D6A81CAeDc95c257914Fde2564EFEF8";

// export const CROWD_FUNDING_ABI = CROWD_FUNDING_ABI;
export { CROWD_FUNDING_ABI };

export const CROWD_FUNDING_ARGS = {
  addressOrName: CROWD_FUNDING_ADDRESS,
  contractInterface: CROWD_FUNDING_ABI,
};

export const projects = [
  {
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
    recipientAdrress: "0x4783763333",
    totalAmountNeeded: "100 wei",
    isFunded: false,
    NoOfVoters: "0",
  },
  {
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
    recipientAdrress: "0x4783763333",
    totalAmountNeeded: "100 wei",
    isFunded: false,
    NoOfVoters: "1",
  },
  {
    description:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
    recipientAdrress: "0x4783763333",
    totalAmountNeeded: "100 wei",
    isFunded: false,
    NoOfVoters: "2",
  },
  // {
  //     description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
  //     recipientAdrress: "0x4783763333",
  //     totalAmountNeeded: "100 wei",
  //     isFunded: false,
  //     NoOfVoters: "3"
  // }
];

export const Units = [
  { label: "Wei", val: 0 },
  { label: "Mwei", val: 6 },
  { label: "Gwei", val: 9 },
  { label: "Ether", val: 18 },
];
