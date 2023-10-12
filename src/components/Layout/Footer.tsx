import LogoSvg from "../componentSVGs/LogoSvg";
import SuscribeBtn from "./SuscribeBtn";

import { RiTwitterXLine, RiLinkedinFill } from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer-gradient-sm md:footer-gradient pt-16 pb-0 w-full flex flex-col items-center border-0">
      <div className="max-w-[1440px]  flex flex-col items-center w-full">
        <div className="w-full flex flex-col items-center xl:flex-row xl:justify-center xl:items-start xl:px-6">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between px-3  lg:items-start w-full pb-5 md:px-8   max-w-[1440px] ">
            <div className="mb-6 lg:mr-16 flex flex-col items-center">
              <LogoSvg width={88} height={90} fill="white" />
              <SuscribeBtn />
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
                >
                  <LiaTelegram className="text-xl mr-[1px]" />
                </a>
              </div> */}
            </div>
            {/*Links*/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-content-evenly w-full px-6 max-w-[375px] md:max-w-full">
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Quick Links</h2>
                <a className="text-sm pb-2">Home</a>
                <a className="text-sm pb-2">Blog</a>
                <a className="text-sm pb-2">FAQ&apos;s</a>
              </div>
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Learn</h2>
                <a className="text-sm pb-2">Documentation</a>
                <a className="text-sm pb-2">Manifesto</a>
                <a className="text-sm pb-2">T&C&apos;s</a>
              </div>
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Ecosystem</h2>
                <a className="text-sm pb-2">Ventures</a>
                <a className="text-sm pb-2">Studios</a>
                <div />
              </div>
              <div className="flex flex-col gap-4 text-light-grey">
                <h2 className="pb-2 text-white font-medium">Contact Us</h2>
                <a className="text-sm pb-2">Contact</a>
                <a className="text-sm pb-2">Brand Assets</a>
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
              >
                <RiTwitterXLine className="text-base" />
              </a>
              <a
                className="text-white hover:bg-white hover:text-dark-blue rounded-full p-2 "
                href="https://t.me/ukiyo_protocol"
              >
                <LiaTelegram className="text-base mr-[1px]" />
              </a>
              <a
                className="text-white hover:bg-white hover:text-dark-blue rounded-full p-2 "
                href="https://www.linkedin.com/company/ukiyo-protocol/"
              >
                <RiLinkedinFill className="text-base mr-[1px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
