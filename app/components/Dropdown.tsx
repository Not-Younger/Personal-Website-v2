import React from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";

export function DropdownItem(props: { text: string; href: string }) {
  return (
    <button className="text-center justify-center p-1 bg-white dark:bg-gray-900 border-l-2 border-transparent rounded-r-lg dark:hover:brightness-125 hover:brightness-90 dark:hover:border-l-white hover:border-l-gray-900">
      <Link href={props.href}>{props.text}</Link>
    </button>
  );
}

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed flex flex-col items-start w-[100px] right-2 top-[0.85rem]">
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
        </div>
      )}
    </div>
  );
}
