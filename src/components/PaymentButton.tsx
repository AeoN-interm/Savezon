import React, { useState } from "react";
import { ethers } from "ethers";

interface PaymentButtonProps {
  totalPrice: number; // Total price passed as a prop
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ totalPrice }) => {
  const [status, setStatus] = useState("Not connected");
  const [loading, setLoading] = useState(false);

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setStatus("✅ Connected to MetaMask");
      } catch (error) {
        console.error("❌ Connection failed:", error);
        setStatus("❌ Connection failed");
      }
    } else {
      alert("Please install MetaMask to proceed.");
      setStatus("❌ MetaMask not installed");
    }
  };

  // Payment function
  const makePayment = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      try {
        setLoading(true);
        setStatus("🔄 Waiting for MetaMask confirmation...");

        // Convert totalPrice to Wei
        const valueInWei = ethers.utils.parseUnits(totalPrice.toString(), "ether");

        // Send the transaction
        const tx = await signer.sendTransaction({
          to: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", // Replace with your payment address
          value: valueInWei,
        });

        console.log("🚀 Transaction sent:", tx);
        setStatus("✅ Payment successful");
      } catch (error: any) {
        console.error("❌ Payment failed:", error);

        // Handle specific errors
        if (
          error.message &&
          (error.message.toLowerCase().includes("insufficient funds") ||
            error.code === "INSUFFICIENT_FUNDS")
        ) {
          alert("⚠️ You don’t have enough ETH to complete this payment.");
          setStatus("❌ Payment failed: Insufficient funds");
        } else if (error?.code === 4001) {
          // User rejected the transaction
          alert("⚠️ Transaction rejected by user.");
          setStatus("❌ Transaction rejected");
        } else {
          // General error
          alert("❌ Payment failed. Please try again.");
          setStatus("❌ Payment failed. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please connect to MetaMask first.");
      setStatus("❌ MetaMask not connected");
    }
  };

  return (
    <div className="space-y-4 p-4 rounded-xl shadow-md border max-w-sm mx-auto mt-6 bg-white dark:bg-gray-900">
      <button
        onClick={connectWallet}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition"
        disabled={loading || status === "✅ Connected to MetaMask"}
      >
        {loading ? "Please wait..." : "Connect Wallet"}
      </button>
      <button
        onClick={makePayment}
        disabled={loading || status !== "✅ Connected to MetaMask"}
        className={`w-full ${loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"} text-white font-semibold py-2 px-4 rounded-xl transition`}
      >
        {loading ? "Processing payment..." : `Pay ${totalPrice.toFixed(6)} ETH`}
      </button>
      <p className={`text-sm ${status.includes("failed") ? "text-red-500" : "text-green-600"}`}>
        {status}
      </p>
    </div>
  );
};

export default PaymentButton;
