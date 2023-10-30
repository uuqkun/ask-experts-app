import { happy, star12 } from "../assets/assets";
import { HeaderSection } from "./components";

const About = () => {
  const headerProps = {
    alignContent: "left",
    tagText: "About",
    tagVariant: "green2",
    content: "About our Consulting Agency Team",
  };

  return (
    <div className="flex justify-between items-center flex-wrap gap-20 section-responsive py-10">
      {/* texts */}
      <div className="flex-1">
        <HeaderSection {...headerProps} />
        <p className="text-p-md font-semibold mb-3">
          We create experiences and build products that make business grow
        </p>
        <p>
          Get help from Alex Moore, a professional business coach with advanced
          experience on growth and business scaling.
        </p>

        <div className="mt-20 flex flex-wrap md:flex-nowrap items-center justify-start gap-10">
          {/* cards */}
          <div className="py-6 px-10 rounded-2xl bg-gray-50 w-fit">
            <div className="mb-2 flex items-center justify-center gap-4">
              <img
                src={star12}
                alt="bussiness services ratings"
                className="w-[30px] h-[30px]"
              />
              <h5>400+</h5>
            </div>
            <p className="font-semibold text-center">Bussiness Services</p>
          </div>
          <div className="py-6 px-10 rounded-2xl bg-gray-50 w-fit">
            <div className="mb-2 flex items-center justify-center gap-4">
              <img
                src={happy}
                alt="Happy Customers"
                className="w-[30px] h-[30px]"
              />
              <h5>100+</h5>
            </div>
            <p className="font-semibold text-center">Happy Customer</p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="relative">
        <img
          src="https://s6.imgcdn.dev/9MBKS.png"
          alt="about ask experts"
          className="lg:w-[716px] lg:h-[466px] sm:w-[550px] sm:h-[358px] w-[350px] h-[228px]"
        />
      </div>
    </div>
  );
};

export default About;
