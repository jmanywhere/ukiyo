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
        "py-2 px-4 flex justify-between fixed top-0 left-0 right-0",
        scrollPosition > 0 ? "bg-white" : ""
      )}
    >
      <Image
        src={scrollPosition > 0 ? LogoRed : logoWhite}
        alt="Logo"
        className="max-h-[60px] max-w-[121px]"
      />
      <MenuButton scroll={scrollPosition} />
      <nav></nav>
    </header>
  );
};

export default Header;
