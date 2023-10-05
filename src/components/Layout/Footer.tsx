import LogoSvg from "../componentSVGs/LogoSvg";
import SuscribeBtn from "./SuscribeBtn";

import { RiTwitterXLine, RiLinkedinFill } from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="footer-gradient-sm md:footer-gradient pt-16 pb-8 w-full flex flex-col items-center border-0">
      <div className="max-w-[1440px]  flex flex-col items-center w-full">
        <div className="w-full flex flex-col items-center xl:flex-row xl:justify-center xl:items-start xl:px-6">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between  lg:items-start w-full pb-5 md:px-8   max-w-[1440px] ">
            <div className="mb-6 lg:mr-16">
              <LogoSvg width={88} height={90} fill="white" />
              <SuscribeBtn />
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
          <div className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center justify-between py-5">
            {/*Copyright*/}
            <p className="text-xs font-normal lg:px-10">
              Copyright © 2023 ukiyo Protocol. All rights reserved.
            </p>
            {/*Socials*/}
            <div className="flex justify-center items-center gap-5 rounded-full w-full lg:max-w-[250px] pt-2 pb-5 lg:items-start lg:py-0 lg:px-10">
              <a className="text-white">
                <RiTwitterXLine className="text-base" />
              </a>
              <a className="text-white ">
                <LiaTelegram className="text-base mr-[1px]" />
              </a>
              <a className="text-white ">
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
