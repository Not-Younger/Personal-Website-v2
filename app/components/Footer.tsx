import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer id="footer" className="px-4 sm:px-6 py-6 mt-10">
      <div className="flex justify-center gap-4 text-sm text-gray-500 mb-4">
        <a href="https://www.linkedin.com/in/jonathan-p-young/" target="_blank" rel="noreferrer" className="flex items-center justify-center">
          <LinkedInIcon className="hover:brightness-125 hover:-translate-y-[0.05rem] border-b-4 border-transparent duration-500" />
        </a>
        <a href="https://github.com/Not-Younger" target="_blank" rel="noreferrer" className="flex items-center justify-center">
          <GitHubIcon className="hover:brightness-125 hover:-translate-y-[0.05rem] border-b-4 border-transparent duration-500"/>
        </a>
        <a href="https://twitter.com/Not_Younger_" target="_blank" rel="noreferrer" className="flex items-center justify-center">
          <XIcon className="hover:brightness-125 hover:-translate-y-[0.05rem] border-b-4 border-transparent duration-500"/>
        </a>
      </div>
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 text-lg">
          Jonathan Young -
        </span>{" "}
        <span className="dark:text-gray-100 text-gray-900 text-lg">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;