import React from "react";
import UserMenu from "../components/DropdownProfile";
import Eth from "../images/eth.png";

function Header() {
  return (
    <header className="sticky top-0 bg-[#182235] border-b border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="relative inline-flex justify-center items-center">
            <img className="w-8 h-8" src={Eth} />
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-slate-100">
                Ethereum Native Token Dashboard
              </span>
            </div>
          </div>
          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-700 border-none" />
            <UserMenu align="right" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
