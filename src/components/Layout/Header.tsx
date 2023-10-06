"use client";
import Image from "next/image";
import LogoSvg from "../componentSVGs/LogoSvg";

import React, { useState, useEffect } from "react";

import classNames from "classnames";
import MenuButton from "./MenuButton";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY;
    setHasScrolled(position > 0);
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
        "fixed top-0 left-0 right-0 z-50 px-2 md:px-5  lg:px-6 xl:px-7",
        hasScrolled ? "bg-light-grey-bg" : ""
      )}
    >
      <div
        className={classNames(
          "px-5 md:px-16  flex justify-center items-center transition duration-300 border-x-[1px] border-slate-300/80",
          hasScrolled ? "bg-light-grey-bg py-2 shadow-xl" : "py-2 md:pt-8"
        )}
      >
        <div className="flex justify-between max-w-[1440px] w-full">
          <LogoSvg
            width={67}
            height={68}
            fill={hasScrolled ? "#EF7D7E" : "#fff"}
          />
          <MenuButton scroll={hasScrolled} />
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
      </div>
    </header>
  );
};

export default Header;
