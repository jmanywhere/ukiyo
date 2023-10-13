import Link from "next/link";
import LogoSvg from "../componentSVGs/LogoSvg";
import SuscribeBtn from "./SuscribeBtn";
import { IoIosArrowForward } from "react-icons/io";

import { RiTwitterXLine, RiLinkedinFill } from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-gradient-sm md:footer-gradient pt-16 pb-0 w-full flex flex-col items-center border-0">
      <div className="max-w-[1440px]  flex flex-col items-center w-full">
        <div className="w-full flex flex-col items-center xl:flex-row xl:justify-center xl:items-start xl:px-6">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between px-3  lg:items-start w-full pb-5 md:px-8   max-w-[1440px] ">
            <div className="mb-6 lg:mr-16 flex flex-col items-center px-2">
              <LogoSvg width={88} height={90} fill="white" />
              <div className="border-[1px] border-white/20 rounded-full p-2 flex flex-row items-center mt-4">
                <input
                  className="h-12 text-sm px-4  bg-transparent rounded-full rounded-r-none text-white max-w-[260px] md:max-w-md min-w-[260px]"
                  placeholder="Subscribe to Newsletter"
                />
                <a
                  href="mailto:hello@ukiyo.network"
                  className="btn btn-circle font-bold text-lg bg-light-orange border-[1px] border-white text-white"
                >
                  <HiOutlineMail />
                </a>
              </div>
              {/* <SuscribeBtn /> */}
              {/* <div className="flex items-center gap-4 pt-2">
                <a
                  className="btn border-none rounded-full font-bold text-lg bg-light-orange text-white hover:bg-light-grey-bg hover:text-secondary"
                  href={"mailto:hello@ukiyo.network"}
                >
                  <HiOutlineMail />
                </a>
                <a
                  className="btn border-none rounded-full font-bold bg-light-orange text-white hover:bg-light-grey-bg hover:text-secondary px-3"
                  href="https://t.me/ukiyo_protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiaTelegram className="text-xl mr-[1px]" />
                </a>
              </div> */}
            </div>
            {/*Links*/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-content-evenly w-full px-6 max-w-[375px] md:max-w-full">
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Quick Links</h2>
                <Link
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="/"
                >
                  Home
                </Link>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="https://docs.ukiyo.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="https://docs.ukiyo.network/ukiyo/faqs/general"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ&apos;s
                </a>
              </div>
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Learn</h2>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="https://docs.ukiyo.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="https://www.dropbox.com/s/a7wal9nsw43zlb3/230324%20ukiyo%20Whitepaper%20v1.pdf?dl=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manifesto
                </a>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="https://docs.ukiyo.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  T&C&apos;s
                </a>
              </div>
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Ecosystem</h2>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="https://docs.ukiyo.network/ukiyo/overview/ukiyo-ventures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ventures
                </a>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  target="_blank"
                  href="https://docs.ukiyo.network/ukiyo/overview/ukiyo-studios"
                  rel="noopener noreferrer"
                >
                  Studios
                </a>
                <div />
              </div>
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Contact Us</h2>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="mailto:hello@ukiyo.network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
                <a
                  className="text-sm pb-2 text-white/80 hover:text-white"
                  href="https://docs.ukiyo.network/ukiyo/literature-and-content/media"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brand Assets
                </a>
                <div />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-white/10 border-t-[1px] w-full flex justify-center ">
          <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center justify-between py-5 px-2">
            {/*Copyright*/}
            <p className="text-[10px] sm:text-sm font-normal lg:px-10 text-white whitespace-pre-wrap">
              Copyright © 2023 ukiyo Protocol. All rights reserved.
            </p>
            {/*Socials*/}
            <div className="flex justify-center items-center gap-2 rounded-full w-full lg:max-w-[250px] pt-2 pb-5 lg:items-start lg:py-0 lg:px-10">
              <a
                className="text-white hover:bg-white hover:text-dark-blue rounded-full p-2"
                href="https://twitter.com/ukiyo_labs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine className="text-base" />
              </a>
              <a
                className="text-white hover:bg-white hover:text-dark-blue rounded-full p-2 "
                href="https://t.me/ukiyo_protocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaTelegram className="text-base mr-[1px]" />
              </a>
              <a
                className="text-white hover:bg-white hover:text-dark-blue rounded-full p-2 "
                href="https://www.linkedin.com/company/ukiyo-protocol/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinFill className="text-base mr-[1px]" />
              </a>
              {/* <a
                className="text-white hover:bg-white hover:text-dark-blue rounded-full p-2 "
                href="https://github.com/ukiyo-protocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="text-base mr-[1px]" />
              </a>
              <a
                className="text-white hover:bg-white hover:text-dark-blue rounded-full p-2 "
                href="https://github.com/ukiyo-protocol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsDiscord className="text-base mr-[1px]" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
