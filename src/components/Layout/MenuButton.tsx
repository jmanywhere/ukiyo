"use client";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import LogoRed from "../../assets/images/Logo-red.svg";
import LogoSvg from "../componentSVGs/LogoSvg";

type menuProps = {
  scroll: boolean;
};

const MenuButton = (props: menuProps) => {
  const [open, setOpen] = useState(false);
  const { scroll } = props;
  return (
    <div className="drawer lg:hidden text-white">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        onChange={() => setOpen((p) => !p)}
      />
      <div className="drawer-content flex justify-end  items-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className={classNames(
            " btn btn-ghost swap drawer-button rounded-full bg-light-orange border-0 border-transparent px-2 max-w-[45px] max-h-[46px]",
            open ? "swap-active" : "",
            scroll ? "text-white" : ""
          )}
        >
          {/* hamburger icon */}

          <HiOutlineMenuAlt3 className="swap-off border-0 w-full max-h-[30px] h-full" />

          {/* close icon */}
          <svg
            className="swap-on fill-current  "
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <nav className="menu  p-4 xs:w-[calc(70vw)] sm:w-60 min-h-full bg-white text-dark-blue">
          {/* Sidebar content here */}
          <div className="flex items-center pb-5">
            <LogoSvg width={85} height={86} fill="#0F2C3A" />
            <h2 className="text-dark-blue text-2xl font-semibold ml-3">
              ukiyo
            </h2>
          </div>
          <ul>
            <li>
              <Link
                className="text-light-orange"
                onClick={() => setOpen((p) => !p)}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <a onClick={() => setOpen((p) => !p)} href="/#features">
                Features
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen((p) => !p)}
                href="https://docs.ukiyo.network/ukiyo/"
                target="_blank"
                rel="noopener"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                onClick={() => setOpen((p) => !p)}
                href="https://docs.ukiyo.network/ukiyo/faqs/general"
                target="_blank"
                rel="noopener"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuButton;
