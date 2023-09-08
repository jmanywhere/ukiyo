import Image from "next/image";
import logoWhite from "../../assets/images/Logo-Blanc.svg";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-white flex flex-col items-center bg-grey-blue py-8">
      <div className="flex flex-col items-center w-full">
        <Image src={logoWhite} alt="logo" className="max-w-[121px] pb-6" />
        <div className="grid grid-cols-2  gap-6 place-content-evenly w-full px-6">
          <div className="flex flex-col items-center">
            <h2 className="pb-2 text-light-orange font-medium">Quick Links</h2>
            <a className="text-sm pb-2">Home</a>
            <a className="text-sm pb-2">Blog</a>
            <a className="text-sm pb-2">FAQ's</a>
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
            <a className="text-sm pb-2">T&C's</a>
            <a className="text-sm pb-2">Privacy Policy</a>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="pb-2 text-light-orange font-medium">Contact Us</h2>
            <a className="text-sm pb-2">Ukiyo's Discord</a>
            <a className="text-sm pb-2">Contact</a>
            <a className="text-sm pb-2">Brand Assets</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="join">
          <input
            className="input input-bordered join-item"
            placeholder="Email"
          />
          <button className="btn join-item rounded-r-full">Subscribe</button>
        </div>
        <h2 className="text-light-orange font-medium py-3">Social Links</h2>
        <div>
          <a>twt</a>
          <a>telegram</a>
        </div>
      </div>
      <div>Copyright</div>
    </footer>
  );
};

export default Footer;
