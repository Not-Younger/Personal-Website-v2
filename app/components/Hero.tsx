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
        fill={true}
        priority={true}
        className="z-0"
      />
      <div className="relative flex flex-col items-center space-y-6 z-10">
        <div className="flex items-center gap-2 px-2">
          <Image
            src="/me.jpeg"
            alt="Picture of me!"
            width={100}
            height={100}
            draggable="false"
            className="rounded-full border-2 border-white dark:border-purple-100 z-10"
          />
          <h1 className="max-w-3xl text-center font-bold text-white dark:text-purple-100 text-5xl leading-tight">
            Hi, I&apos;m <TextGradient text="Jonathan" />.
          </h1>
        </div>

        <p className="text-lg text-center font-medium text-white dark:text-purple-100">
          I&apos;m an undergraduate student studying Computer Science who has a
          passion for software development.
        </p>
      </div>
      <button
        onClick={() =>
          document
            .getElementById("footer")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="text-lg w-[180px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] rounded-lg text-gray-50 font-semibold py-[10px] px-4 z-10"
      >
        Contact Me
      </button>
    </div>
  );
};

export default Hero;
