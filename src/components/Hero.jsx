import { calendar } from "../assets/assets";
import { headerImg } from "../assets/homepage/home_assets";
import { Button } from "./components";
const Hero = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[850px] py-10 relative">
        <img
          src={headerImg}
          alt="header image"
          className="w-full h-[840px] hero-img absolute top-0 left-0 z-[-1]"
        />

        {/* hero card */}
        <div className="bg-card-transparent rounded-2xl w-[580px] p-[58px] z-[1] shadow-xl ml-[10%] mt-[0]">
          <h1 className="mb-3">Your Small Bussiness Growth Advisor</h1>
          <p className="mb-8">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <div className="flex items-center gap-4">
            <Button
              text={"Our Services"}
              variations={"btn-dark"}
              addClass={"btn-base-pad"}
            />
            <Button
              text={"Book a Meeting"}
              variations={"btn-white"}
              icon={calendar}
              addClass={"flex items-center gap-4 rounded-[42px] btn-iconic"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
