"use client";
import Image from "next/image";
import LogoSvg from "../componentSVGs/LogoSvg";

import React, { useState, useEffect } from "react";

import classNames from "classnames";
import MenuButton from "./MenuButton";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "pb-4 px-16  fixed top-0 left-0 right-0 z-50 flex justify-center items-center transition duration-300 ",
        scrollPosition > 32 ? "bg-light-grey-bg pt-4 drop-shadow-xl" : "pt-8"
      )}
    >
      <div className="flex justify-between max-w-[1440px] w-full">
        <LogoSvg
          width={67}
          height={68}
          fill={scrollPosition > 32 ? "#EF7D7E" : "#fff"}
        />
        <MenuButton scroll={scrollPosition} />
        <div className="hidden lg:flex items-center">
          <nav className="hidden lg:flex items-center gap-x-2 px-5 py-2 rounded-full bg-light-orange">
            <a className="text-light-orange bg-white rounded-full px-4 py-0.5">
              Home
            </a>
            <a className="hover:text-light-orange  hover:bg-white hover:rounded-full px-4 py-0.5">
              Features
            </a>
            <a className="hover:text-light-orange  hover:bg-white hover:rounded-full px-4 py-0.5">
              Docs
            </a>
            <a className="hover:text-light-orange  hover:bg-white hover:rounded-full px-4 py-0.5">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
