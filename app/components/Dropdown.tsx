import React from 'react';
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export function DropdownItem(props: { text: string, href: string }) {
  return (
    <li className="text-center justify-center p-1 bg-gray-500 rounded hover:brightness-110 my-1">
      <Link href={props.href}>{props.text}</Link>
    </li>
  )
}

export function DropdownMenu(props: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button className="border rounded p-2 bg-white dark:bg-gray-900 hover:brightness-110" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && <ul className="relative top-12 right-0 bg-gray-500 rounded p-2 z-10">
        {props.children}
      </ul>}
    </nav>
  );
};