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
        "py-4 px-4  fixed top-0 left-0 right-0 z-50 flex justify-center transition duration-300",
        scrollPosition > 0 ? "bg-white" : ""
      )}
    >
      <div className="flex justify-between max-w-[1440px] w-full">
        <LogoSvg
          width={67}
          height={68}
          fill={scrollPosition > 0 ? "#EF7D7E" : "#fff"}
        />
        <MenuButton scroll={scrollPosition} />
        <nav className="hidden lg:flex items-center gap-x-5 px-5 py-2.5 rounded-full bg-light-orange">
          <a className="text-light-orange bg-white rounded-full px-7 py-3">
            Home
          </a>
          <a className="hover:text-light-orange  hover:bg-white hover:rounded-full px-7 py-3">
            Features
          </a>
          <a className="hover:text-light-orange  hover:bg-white hover:rounded-full px-7 py-3">
            Docs
          </a>
          <a className="hover:text-light-orange  hover:bg-white hover:rounded-full px-7 py-3">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
