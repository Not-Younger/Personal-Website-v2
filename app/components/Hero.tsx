"use client";

import React from "react";
import Image from "next/image";
import TextGradient from "@/app/components/TextGradient";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center space-y-10 py-40">
      <Image
        src="/purple.png"
        alt="Picture of the author"
        draggable="false"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="relative flex flex-col items-center space-y-6 z-10">
        <h1 className="max-w-3xl text-center font-bold text-white dark:text-purple-100 text-5xl leading-tight">
          Hi, I&apos;m <TextGradient text="Jonathan" />.
        </h1>
        <p className="text-lg text-center font-medium text-white dark:text-purple-100">
          I&apos;m an undergraduate student studying Computer Science at St.
          Olaf College.
        </p>
      </div>
      <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg w-[180px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-lg text-gray-50 font-semibold py-[10px] px-4 z-10">
        Contact Me
      </button>
    </div>
  );
};

export default Hero;
