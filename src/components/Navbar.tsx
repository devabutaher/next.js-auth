"use client";

import Link from "next/link";

const Navbar = () => {
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="bg-gray-950 text-gray-100 py-6 px-4">
      <div className="flex justify-between gap-8 max-w-screen-lg mx-auto items-center">
        <Link href="/" className="font-semibold text-2xl whitespace-nowrap">
          Next Auth
        </Link>
        <div className="flex items-center gap-4 md:gap-8 flex-wrap">
          <Link
            href="/"
            className="text-lg font-medium hover:underline cursor-pointer"
          >
            Public
          </Link>
          <Link
            href="/private"
            className="text-lg font-medium hover:underline cursor-pointer"
          >
            Private
          </Link>
          <Link
            href="/login"
            className="text-lg font-medium hover:underline cursor-pointer"
          >
            Login
          </Link>
          <div
            onClick={handleLogout}
            className="text-lg font-medium hover:underline cursor-pointer"
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
