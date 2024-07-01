import React from "react";

function Navbar() {
  return (
    <nav className="bg-theme-800 border-theme-500 mx-auto mt-2 flex max-w-7xl items-center justify-between rounded-xl border-2 px-4 py-2 text-gray-300">
      <span className="rounded-xl border-2 border-gray-300 px-2 py-1 text-xl">
        Betconsult
      </span>
      <div className="flex gap-6">
        <span>Upcoming</span>
        <span>Results</span>
        <span>About ABOBA</span>
      </div>
    </nav>
  );
}

export default Navbar;
