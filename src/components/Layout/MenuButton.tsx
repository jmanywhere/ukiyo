"use client";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import LogoRed from "../../assets/images/Logo-red.svg";

type menuProps = {
  scroll: number;
};

const MenuButton = (props: menuProps) => {
  const [open, setOpen] = useState(false);
  const { scroll } = props;
  return (
    <div className="drawer lg:hidden">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        onClick={() => setOpen((p) => !p)}
      />
      <div className="drawer-content flex justify-end">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className={classNames(
            " btn btn-ghost swap drawer-button px-1 ",
            open ? "swap-active" : "",
            scroll > 0 ? "text-light-orange" : ""
          )}
        >
          {/* hamburger icon */}

          <CgMenuRightAlt className="swap-off fill-current h-[32px] w-[32px]" />

          {/* close icon */}
          <svg
            className="swap-on fill-current  "
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <nav className="menu  p-4 w-80 min-h-full bg-white text-dark-blue">
          {/* Sidebar content here */}
          <Image
            src={LogoRed}
            alt="Logo"
            className=" py-5 px-3 w-full max-w-[180px]"
          />
          <ul>
            <li>
              <a className="text-light-orange">Home</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Docs</a>
            </li>
            <li>
              <a>Governance</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuButton;
