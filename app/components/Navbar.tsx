"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { DropdownItem, DropdownMenu } from "@/app/components/Dropdown";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsSmallScreen(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return (
    <header className="flex justify-between p-2 items-center border-b gap-8 dark:bg-gray-900">
      <Link
        href="http://localhost:3000"
        className="flex-none flex items-center"
      >
        <div className="mr-4 text-4xl">👾</div>
        <div className="text-left">
          <p className="text-2xl">Jonathan Young</p>
          <p className="text-s">Software Engineer</p>
        </div>
      </Link>
      <div className="flex items-center justify-between gap-4">
        {!isSmallScreen ? (
          <>
            <ThemeSwitcher />
            <Link href="http://localhost:3000/about">About Me</Link>
            <Link href="http://localhost:3000/resume">Resume</Link>
          </>
        ) : (
          <>
            <ThemeSwitcher />
            <DropdownMenu>
              <DropdownItem text="Home" href="http://localhost:3000/" />
              <DropdownItem
                text="About Me"
                href="http://localhost:3000/about"
              />
              <DropdownItem text="Resume" href="http://localhost:3000/resume" />
            </DropdownMenu>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
