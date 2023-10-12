"use client";
import Link from "next/link";
import Image from "next/image";
import LogoSvg from "../componentSVGs/LogoSvg";

import logoblanc from "../../assets/images/Logo-Blanc.svg";
import logored from "../../assets/images/Logo-red.svg";

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
        "fixed top-0 left-0 right-0 z-50 px-2 md:px-5  lg:px-6 xl:px-7 transition duration-300",
        hasScrolled ? "bg-light-grey-bg shadow-xl" : ""
      )}
    >
      <div
        className={classNames(
          "px-5 md:px-16  flex justify-center items-center transition-all duration-300",
          hasScrolled ? "py-2" : "py-2 md:pt-6"
        )}
      >
        <div className="flex justify-between max-w-[1440px] w-full 2xl:px-16">
          <Image
            src={logoblanc}
            className={classNames(
              "w-[80px] md:w-[120px] lg:w-[150px]",
              hasScrolled ? "hidden" : ""
            )}
            alt="white ukiyo logo"
          />
          <Image
            src={logored}
            className={classNames(
              "w-[80px] md:w-[120px] lg:w-[150px]",
              hasScrolled ? "" : "hidden"
            )}
            alt="gradient ukiyo logo"
          />
          <MenuButton scroll={hasScrolled} />
          <div className="hidden lg:flex items-center">
            <nav className="hidden lg:flex items-center gap-x-[3px] px-2 py-2 rounded-full bg-light-orange">
              <Link
                href="/"
                className="text-light-orange bg-white rounded-full px-4 py-2"
              >
                Home
              </Link>
              <a
                className="hover:text-light-orange  hover:bg-white hover:rounded-full px-4 py-2"
                href="/#features"
              >
                Features
              </a>
              <a
                className="hover:text-light-orange  hover:bg-white hover:rounded-full px-4 py-2"
                href="https://docs.ukiyo.network/ukiyo/"
                target="_blank"
                rel="noopener"
              >
                Docs
              </a>
              <a
                className="hover:text-light-orange  hover:bg-white hover:rounded-full px-4 py-2"
                href="https://docs.ukiyo.network/ukiyo/faqs/general"
                target="_blank"
                rel="noopener"
              >
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
