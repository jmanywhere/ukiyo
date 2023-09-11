import { GoArrowRight } from "react-icons/go";

const SuscribeBtn = () => {
  return (
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
  );
};

export default SuscribeBtn;
