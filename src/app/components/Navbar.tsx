import React from "react";

export default function Navbar() {
  return (
    // Mobile navbar
    <nav className="flex justify-between bg-nav-black text-white font-roboto font-bold text-lg h-12 items-center px-6 py-3 w-full fixed top-0 z-40">
      <div className="logo ">Kelvin</div>
      <div className="mobile-menu cursor-pointer">&#9776;</div>
    </nav>
  );
}
