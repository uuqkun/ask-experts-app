import { Logo } from "../assets/assets";

const AskExLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <img src={Logo} alt="ask experts logo" className="w-[30px] h-[29px]" />
      <h3 className="text-sec-white">AskExperts</h3>
    </div>
  );
};

export default AskExLogo;
