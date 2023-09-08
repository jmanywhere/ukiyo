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
        "py-4 px-4  fixed top-0 left-0 right-0 z-50 flex justify-center ",
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
            "hidden lg:flex items-center",
            scrollPosition > 0 ? "text-dark-blue" : ""
          )}
        >
          <a className="text-light-orange px-5">Home</a>
          <a className="px-5">Features</a>
          <a className="px-5">Docs</a>
          <a className="px-5">Governance</a>
          <a className="px-5">FAQ</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
