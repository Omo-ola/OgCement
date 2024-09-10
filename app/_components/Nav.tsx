"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    //@ts-ignore
    setLoggedIn(token);
  }, []);

  return (
    <nav className="p-4 flex items-center justify-between z-50">
      <div className="flex items-center">
        <Link href={"/"}>
          <span className="ml-2 text-xl font-bold">Karakat Cement</span>
        </Link>
      </div>
      {loggedIn ? (
        <div className="flex justify-center gap-4">
          <Link
            href="/order"
            className="bg-[var(--bg-accent)] hover:bg-blue-700 text-[var(--bg-grey)] font-bold py-3 px-6 md:px-4 sm:px-2 rounded-md transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="bg-[var(--bg-accent)] hover:bg-blue-700 text-[var(--bg-grey)] font-bold py-3 px-6 md:px-4 sm:px-2 rounded-md transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
