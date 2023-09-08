import Image from "next/image";
import logoWhite from "../../assets/images/Logo-Blanc.svg";
import { GoArrowRight } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-white flex flex-col items-center bg-grey-blue py-8">
      <div className="flex flex-col md:flex-row items-center  md:items-start w-full pb-5 md:px-8  xl:px-16">
        <Image src={logoWhite} alt="logo" className="max-w-[121px] pb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-content-evenly w-full px-6">
          <div className="flex flex-col items-center">
            <h2 className="pb-2 text-light-orange font-medium">Quick Links</h2>
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
      <div className="flex flex-col lg:flex-row lg:justify-between items-center rounded-full w-full lg:max-w-[500px] py-9 items-center">
        <div className="join border-0 py-4">
          <input
            type="text"
            className="input join-item rounded-full bg-white/10 border-white/10 placeholder:text-white placeholder:text-xs border-0 h-auto font-bold mr-[1px]"
            placeholder="Subscribe to our Newsletter"
          />
          <div className="join-item border-white/10 rounded-r-full bg-white/10 rounded-r-full border-0 p-2">
            <a className="btn rounded-full font-bold text-3xl bg-light-orange text-black border-[1px] border-white/20">
              <GoArrowRight />
            </a>
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-light-orange font-medium pb-3">Social Links</h2>
          <div className="flex">
            <a className="text-light-orange rounded-full border-0 text-4xl w-full mr-5">
              <AiFillTwitterCircle />
            </a>
            <a className="text-light-orange rounded-full border-0 text-4xl w-full">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full px-6 flex flex-col items-center">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-light-orange to-transparent mb-6"></div>
        <p>Copyright © 2023 ukiyo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
