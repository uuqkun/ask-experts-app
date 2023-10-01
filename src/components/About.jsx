import { happy, star12 } from "../assets/assets";
import { aboutUs, dotPattern } from "../assets/homepage/home_assets";
import { SectionTag } from "./components";

const About = () => {
  return (
    <div className="flex justify-between items-center md:w-[1210px] py-10 ">
      {/* texts */}
      <div className="flex-[0.75]">
        <SectionTag text="About" variants="green2" />
        <h2 className="leading-tight mb-6">About our Consulting Agency Team</h2>
        <p className="text-p-md font-semibold mb-3">
          We create experiences and build products that make business grow
        </p>
        <p>
          Get help from Alex Moore, a professional business coach with advanced
          experience on growth and business scaling.
        </p>

        <div className="mt-20 flex items-center justify-between">
          {/* cards */}
          <div className="py-6 px-10 rounded-2xl bg-gray-50 w-fit">
            <div className="mb-2 flex items-center justify-center gap-4">
              <img src={star12} alt="bussiness services ratings" className="w-[30px]"/>
              <h5>400+</h5>
            </div>
            <p className="font-semibold">Bussiness Services</p>
          </div>
          <div className="py-6 px-10 rounded-2xl bg-gray-50 w-fit">
            <div className="mb-2 flex items-center justify-center gap-4">
              <img src={happy} alt="Happy Customers" className="w-[30px]"/>
              <h5>100+</h5>
            </div>
            <p className="font-semibold">Happy Customer</p>
          </div>


        </div>
      </div>

      {/* image */}
      <div className="relative">
        <div className="lg:w-[635px] lg:h-[396px] rounded-[28px] overflow-hidden">
          <img src={aboutUs} alt="about ask experts" className="lg:w-[990px]" />
        </div>
        <img
          src={dotPattern}
          alt="dot pattern"
          className="absolute top-[40%] -left-[12%] z-[-1] "
        />
        <div className="bg-sec-white shadow-2xl absolute z-[1] -bottom-[30px] -left-[30px] w-[242px] h-[137px] rounded-[20px]">
          {/* circular progress bar */}
          <span>

          </span>
          <p className="fnot-semibold">Market Experiences</p>
        </div>
      </div>
    </div>
  );
};

export default About;
