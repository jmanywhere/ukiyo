import Image from "next/image";
import logoWhite from "../../assets/images/Logo-Blanc.svg";

import { BsTwitter } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-white bg-grey-blue py-8 w-full flex flex-col items-center">
      <div className="max-w-[1440px]  flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row items-center  md:items-start w-full pb-5 md:px-8  xl:px-16 max-w-[1200px]">
          <Image src={logoWhite} alt="logo" className="max-w-[121px] pb-6" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-content-evenly w-full px-6">
            <div className="flex flex-col items-center">
              <h2 className="pb-2 text-light-orange font-medium">
                Quick Links
              </h2>
              <a className="text-sm pb-2">Home</a>
              <a className="text-sm pb-2">Blog</a>
              <a className="text-sm pb-2">FAQ&apos;s</a>
              <a className="text-sm pb-2">Forum</a>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="pb-2 text-light-orange font-medium">Ecosystem</h2>
              <a className="text-sm pb-2">Ventures</a>
              <a className="text-sm pb-2">Staking</a>
              <a className="text-sm pb-2">Treasury</a>
              <a className="text-sm pb-2">Vault</a>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="pb-2 text-light-orange font-medium">Learn</h2>
              <a className="text-sm pb-2">Documentation</a>
              <a className="text-sm pb-2">Governance</a>
              <a className="text-sm pb-2">Whitepaper</a>
              <a className="text-sm pb-2">T&C&apos;s</a>
              <a className="text-sm pb-2">Privacy Policy</a>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="pb-2 text-light-orange font-medium">Contact Us</h2>
              <a className="text-sm pb-2">Ukiyo&apos;s Discord</a>
              <a className="text-sm pb-2">Contact</a>
              <a className="text-sm pb-2">Brand Assets</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-full w-full lg:max-w-[500px] py-9">
          <div className="py-3">
            <h2 className="text-light-orange font-medium pb-3">Social Links</h2>
            <div className="flex flex-row items-center gap-4">
              <a className="text-white rounded-full border-0 bg-light-orange overflow-hidden p-[8px] flex items-center justify-center">
                <BsTwitter className="text-[25px]" />
              </a>
              <a className="text-white bg-light-orange p-[8px] pl-[7px] rounded-full">
                <BiLogoTelegram className="text-[25px] mr-[1px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-6 flex flex-col items-center">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-light-orange to-transparent mb-6"></div>
          <p>Copyright © 2023 ukiyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
