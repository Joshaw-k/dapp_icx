import React from "react";

const Hero = () => {
  return (
    <div className="w-full px-2.5 sm:px-6 mb-8">
      <div className="xl:flex items-center justify-center w-fit mx-auto">
        <div className="text-white bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-bg-white/10 rounded-2xl px-5 py-6 flex flex-col gap-y-2.5 mb-8 max-w-3xl">
          <h1 className="text-3xl xl:text-6xl font-bold mb-3">
            <span className="">Decentralized</span> protocol for syncing various
            Wallets issues on Secure Server.
          </h1>
          <h4 className="mb-4">
            This is not an app but a protocol that establishes a remote
            resolution between all noncustodial wallet.
          </h4>
          {/* <button className="connect-wallet w-fit py-1.5 px-3 rounded-full text-white font-medium bg-gradient-to-r from-[#577BF8] to-[#A991D8] hover:bg-gradient-to-l">
            Connect Wallet
          </button> */}
          <w3m-button label="Connect Wallet" />
        </div>
        <div>
          <img src="/cta-img-with-bg.png" className="sm:scale-90" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
