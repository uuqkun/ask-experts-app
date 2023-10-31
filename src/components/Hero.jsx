import { calendar } from "../assets/assets";
import { Button } from "./components";
const Hero = () => {
  return (
    <>
      <section className="home-wrapper">
        <div
          className="hero-img"
        />

        {/* hero card */}
        <div className="home-card">
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
              iconSize="w-[44px] h-[44px]"
              addClass={"flex items-center gap-1 lg:gap-4 rounded-[42px] btn-iconic"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
