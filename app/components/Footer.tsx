import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-10">
      <div className="flex justify-center gap-4 text-sm text-gray-500 mb-4">
        <a href="https://www.linkedin.com/in/jonathan-p-young/" target="_blank" rel="noreferrer" className="flex items-center justify-center">
          <LinkedInIcon className="mr-2" />
        </a>
        <a href="https://github.com/Not-Younger" target="_blank" rel="noreferrer" className="flex items-center justify-center">
          <GitHubIcon className="mr-2" />
        </a>
        <a href="https://twitter.com/Not_Younger_" target="_blank" rel="noreferrer" className="flex items-center justify-center">
          <XIcon className="mr-2" />
        </a>
      </div>
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
          {" "}
          Jonathan Young -
        </span>{" "}
        <span className="dark:text-gray-100 text-gray-900 text-lg mr-2">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;