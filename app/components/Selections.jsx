"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import React from "react";
import { config, projectId } from "@/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";

const Selections = () => {
  createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });
  const { open } = useWeb3Modal();
  return (
    <div className="px-5 sm:px-8">
      <h2 className="text-3xl font-bold text-center text-white">
        Make Your Selection <br className="md:hidden" />
        Below
      </h2>
      <div className="mt-6">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3 max-w-3xl mx-auto xl:max-w-7xl">
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Migration</h3>
            <p className="text-sm">Click here for migration</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Claim</h3>
            <p className="text-sm">Click here to claim assets</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Swap</h3>
            <p className="text-sm">Click here for assets swapping</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5 lg:col-span-2 xl:col-span-1"
          >
            <h3 className="font-semibold text-xl mb-2">Migration</h3>
            <p className="text-sm">Click here to validate your wallet</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Activation</h3>
            <p className="text-sm">Click here to activate</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5 xl:col-span-2"
          >
            <h3 className="font-semibold text-xl mb-2">Cross Transfer</h3>
            <p className="text-sm">Click here for cross bridge issues</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5 lg:col-span-2 xl:col-span-1"
          >
            <h3 className="font-semibold text-xl mb-2">Staking</h3>
            <p className="text-sm">Click here for staking related issues</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Exchange</h3>
            <p className="text-sm">Click here for exchange related issues</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Connect to Dapps</h3>
            <p className="text-sm">
              Click here for error while connecting to dapps.
            </p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Login</h3>
            <p className="text-sm">Click here for wallet login issues</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5 lg:col-span-2 xl:col-span-1"
          >
            <h3 className="font-semibold text-xl mb-2">Whitelist</h3>
            <p className="text-sm">Click here for whitelist related issues</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Buy Coins/Tokens</h3>
            <p className="text-sm">
              To trade, your account must be marked as a trusted payment source.
            </p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5 xl:col-span-2"
          >
            <h3 className="font-semibold text-xl mb-2">
              Missing/Irregular balance
            </h3>
            <p className="text-sm">Click here to recover lost/missing funds</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5 lg:col-span-2  xl:col-span-1"
          >
            <h3 className="font-semibold text-xl mb-2">
              Wallet glitch / wallet error
            </h3>
            <p className="text-sm">
              Click here if you have problem with your trading wallet.
            </p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Transaction Delay</h3>
            <p className="text-sm">
              Click here for any issues related to transaction delay.
            </p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Claim Airdrop</h3>
            <p className="text-sm">Click here for airdrop related issues</p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">NFTs</h3>
            <p className="text-sm">
              Click here for NFTs minting/transfer related issues.
            </p>
          </div>
          <div
            onClick={() => open()}
            className="text-white text-center bg-gradient-to-r from-[#381134] to-[#1A154B] hover:bg-gradient-to-l cursor-pointer py-4 rounded-lg px-5"
          >
            <h3 className="font-semibold text-xl mb-2">Locked Account</h3>
            <p className="text-sm">
              Click here for issues related to account lock.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selections;
