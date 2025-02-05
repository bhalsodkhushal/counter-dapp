import React from "react";
export default function Header({ wallet }) {
  return (
    <header className="headerwrap w-full bg-white text-white py-4 px-6 flex flex-wrap justify-between items-center border-gray-200 border-b">
      <h1 className="logowrap">Counter Dapp</h1>

      <div className="flex items-center space-x-4">
        {wallet && (
          <span className="text-[#0077FF] font-medium border border-[#A9D1FF] rounded-md transition-all duration-300 flex items-center justify-center bg-gradient-to-t from-[#E1EFFF] to-[#EFF6FF] hover:from-[#0077FF] hover:to-[#0077FF] hover:text-white    text-md py-2 px-5 cursor-pointer ">
            Connected: {wallet.slice(0, 6)}...{wallet.slice(-4)}
          </span>
        )}

        <a
          href="https://github.com/bhalsodkhushal/counter-dapp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077FF] font-medium border border-[#A9D1FF] rounded-md transition-all duration-300 flex items-center justify-center bg-gradient-to-t from-[#E1EFFF] to-[#EFF6FF] hover:from-[#0077FF] hover:to-[#0077FF] hover:text-white  text-md py-2 px-5 cursor-pointer"
        >
          GitHub Repo
        </a>
      </div>
    </header>
  );
}
