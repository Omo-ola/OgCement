import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
          <span className="ml-2 text-xl font-bold">OgCement</span>
        </Link>
      </div>
      <Link href={"/login"}>
        <button className="bg-blue-500 text-white p-2">Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;
