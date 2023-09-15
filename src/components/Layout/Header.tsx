"use client";
import Image from "next/image";
import logoWhite from "../../assets/images/Logo-Blanc.svg";
import LogoRed from "../../assets/images/Logo-red.svg";
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
        <Image
          src={scrollPosition > 0 ? LogoRed : logoWhite}
          alt="Logo"
          className="max-h-[60px] max-w-[121px]"
        />
        <MenuButton scroll={scrollPosition} />
        <nav
          className={classNames(
            "hidden lg:flex items-center gap-x-5 px-5",
            scrollPosition > 0 ? "text-dark-blue" : ""
          )}
        >
          <a className="text-light-orange nav-underline px-2">Home</a>
          <a className="hover:text-light-orange hover:after:absolute hover:after:h-[2px] hover:after:bg-light-orange hover:after:w-full hover:after:bottom-0 relative hover:after:left-0 px-2">
            Features
          </a>
          <a className="hover:text-light-orange hover:after:absolute hover:after:h-[2px] hover:after:bg-light-orange hover:after:w-full hover:after:bottom-0 relative hover:after:left-0 px-2">
            Docs
          </a>
          <a className="hover:text-light-orange hover:after:absolute hover:after:h-[2px] hover:after:bg-light-orange hover:after:w-full hover:after:bottom-0 relative hover:after:left-0 px-2">
            Governance
          </a>
          <a className="hover:text-light-orange hover:after:absolute hover:after:h-[2px] hover:after:bg-light-orange hover:after:w-full hover:after:bottom-0 relative hover:after:left-0 px-2">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
