"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  return (
    <nav className="bg-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href={"/"}>
          <span className="ml-2 text-xl font-bold">Karakat Cement</span>
        </Link>
      </div>
      {loggedIn ? (
        <div className="flex justify-center gap-4">
          <Link
            href="/order"
            className="bg-[var(--bg-accent)] hover:bg-blue-700 text-[var(--bg-grey)] font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-[var(--bg-accent)] hover:bg-blue-700 text-[var(--bg-grey)] font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
