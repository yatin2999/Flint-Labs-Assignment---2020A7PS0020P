import React from "react";
import Logo from "../images/logo.jpg";

function DropdownProfile() {
  return (
    <div className="relative inline-flex justify-center items-center">
      <a href="https://twitter.com/FlintLabsHQ" target="_blank">
        <img className="w-10 h-10" src={Logo} />
      </a>
      {
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium text-slate-300 group-hover:text-slate-200">
            Flint Labs
          </span>
        </div>
      }
    </div>
  );
}

export default DropdownProfile;
