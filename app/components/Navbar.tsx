import Link from "next/link";
import React from "react";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="flex justify-between p-5 items-center border-b gap-8 dark:bg-gray-900">
      <Link href="http://localhost:3000" className="flex-none flex items-center">
        <div className="mr-4 text-4xl">👾</div>
        <div className="text-left">
          <p className="text-2xl">Jonathan Young</p>
          <p className="text-s">Software Engineer</p>
        </div>
      </Link>
      <div className="flex items-center justify-between gap-4">
        <ThemeSwitcher />
        <Link href="http://localhost:3000/about">About Me</Link>
        <Link href="http://localhost:3000/resume">Resume</Link>
      </div>
    </header>
  );
};

export default Navbar;
