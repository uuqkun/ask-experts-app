import { happy, star12 } from "../assets/assets";
import { aboutUs } from "../assets/homepage/home_assets";
import { SectionTag } from "./components";

// sm = 640px
// md = 768px
// lg = 1024px
// xl = 1280px
// 2xl = 1536px

const About = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-20 w-[80%] lg:w-[1210px] py-10 ">
      {/* texts */}
      <div className="flex-1">
        <SectionTag text="About" variants="green2" />
        <h2 className="leading-tight mb-6">About our Consulting Agency Team</h2>
        <p className="text-p-md font-semibold mb-3">
          We create experiences and build products that make business grow
        </p>
        <p>
          Get help from Alex Moore, a professional business coach with advanced
          experience on growth and business scaling.
        </p>

        <div className="mt-20 flex items-center justify-start gap-10">
          {/* cards */}
          <div className="py-6 px-10 rounded-2xl bg-gray-50 w-fit">
            <div className="mb-2 flex items-center justify-center gap-4">
              <img
                src={star12}
                alt="bussiness services ratings"
                className="w-[30px]"
              />
              <h5>400+</h5>
            </div>
            <p className="font-semibold text-center">Bussiness Services</p>
          </div>
          <div className="py-6 px-10 rounded-2xl bg-gray-50 w-fit">
            <div className="mb-2 flex items-center justify-center gap-4">
              <img src={happy} alt="Happy Customers" className="w-[30px]" />
              <h5>100+</h5>
            </div>
            <p className="font-semibold text-center">Happy Customer</p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="relative">
        <img src={aboutUs} alt="about ask experts" />
      </div>
    </div>
  );
};

export default About;
