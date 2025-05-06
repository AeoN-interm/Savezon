import { ethers } from "ethers";

export const getProvider = () => {
  if (window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum);
  }
  throw new Error("No Ethereum provider found");
};

export const getSigner = async () => {
  const provider = getProvider();
  return await provider.getSigner();
};
