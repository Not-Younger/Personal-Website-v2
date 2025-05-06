"use client";

import React from "react";
import Image from "next/image";
import TextGradient from "@/app/components/TextGradient";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Hero = () => {
  return (
    <div className="hero relative flex flex-col items-center justify-center lg:space-y-10 py-40">
      <svg className="absolute inset-0">
        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence baseFrequency="0.5 0.5" result="NOISE" />
        </filter>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          filter="url(#noise)"
        ></rect>
      </svg>
      <div className="relative flex flex-col items-center space-y-6 max-w-5xl ">
        <div className="flex items-center gap-4">
          <Image
            src="/me.jpeg"
            alt="Picture of me!"
            width={100}
            height={100}
            draggable="false"
            className="rounded-full border-2 border-white dark:border-purple-100 ml-4 md:ml-0"
          />
          <h1 className="max-w-3xl text-center font-bold text-5xl leading-tight text-white">
            Hi, I&apos;m <TextGradient text="Jonathan" />.
          </h1>
        </div>

        <p className="text-lg text-center text-white px-4">
          I&apos;m an undergraduate student studying Computer Science who has a
          passion for software development.
        </p>
        <p className="text-lg text-center text-white px-4">
          At the moment I&apos;m learning iOS development. I&apos;m building the best book and quote tracking app available on the App Store. It&apos;s called QuoteFlow and I&apos;d love for you to check it out!
        </p>
        <a href="mailto:jonathanyoung7718@gmail.com">
          <button className="z-10 text-lg w-[180px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-lg text-gray-50 font-semibold py-[10px] px-4 hover:brightness-125">
            Contact Me
          </button>
        </a>
      </div>
      <button
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 hover:brightness-110 text-white"
      >
        View my projects <ArrowDropDownIcon />
      </button>
    </div>
  );
};

export default Hero;
