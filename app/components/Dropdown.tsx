"use client";

import React from "react";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

export function DropdownItem(props: { text: string; href: string }) {
  return (
    <Link href={props.href}>
      <button className="w-full text-left justify-center p-1 bg-gray-100 dark:bg-gray-900 border-l-2 border-transparent rounded-r-lg dark:hover:brightness-125 hover:brightness-90 dark:hover:border-l-white hover:border-l-gray-900">
        {props.text}
      </button>
    </Link>
  );
}

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="flex justify-between p-1 bg-gray-100 dark:bg-gray-900 border-l-2 border-transparent rounded-r-lg dark:hover:brightness-125 hover:brightness-90 dark:hover:border-l-white hover:border-l-gray-900"
        >
          <div>Mode</div>
          <SunIcon
            className="w-6 h-6 text-yellow-500 "
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="flex justify-between p-1 bg-gray-100 dark:bg-gray-900 border-l-2 border-transparent rounded-r-lg dark:hover:brightness-125 hover:brightness-90 dark:hover:border-l-white hover:border-l-gray-900"
        >
          <div>Mode</div>
          <MoonIcon
            className="w-6 h-6 text-gray-900 "
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  return (
    <div className="fixed flex flex-col items-start w-[120px] right-2 top-[0.85rem]">
      <button
        className="flex justify-between border rounded p-2 bg-white dark:bg-gray-900 dark:hover:brightness-125 hover:brightness-90 w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>More</div>
        <div>{isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
      </button>
      {isOpen && (
        <div className="flex flex-col w-full bg-white dark:bg-gray-800 p-1 rounded mt-2 gap-1 border">
          <DropdownItem text="Home" href="http://localhost:3000/" />
          <DropdownItem text="About Me" href="http://localhost:3000/about" />
          <DropdownItem text="Resume" href="http://localhost:3000/resume" />
          {renderThemeChanger()}
        </div>
      )}
    </div>
  );
}
