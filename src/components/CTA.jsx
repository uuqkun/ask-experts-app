import { bgCTA, phone } from "../assets/assets";
import { Button, SectionTag } from "./components";

const CTA = () => {
  return (
    <section className="flex justify-center mb-10 relative pt-20">
      <div className="lg:w-[1210px] w-[85%] bg-pri-heading rounded-[30px] flex lg:justify-center justify-start gap-10 items-center lg:p-0 sm:p-20 p-14 ">
        <div className="lg:w-[45%] sm:w-[80%] w-full ">
          <SectionTag text="Book Now" variants="green1" />
          <h2 className="leading-none mb-6">
            <span style={{ color: "white" }}> Better Consult,</span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>
              Better Results
            </span>
          </h2>
          <p className="text-gray-50 mb-6">
            Our software development agency has a growth up to 30% per each
            year. If you are result-oriented, not afraid to take initiative –
            drop us a note and join our team!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=6281392327330"
            className="btn-yellow w-fit btn-base btn-iconic flex items-center gap-3"
            target="_blank"
          >
            <img src={phone} alt="whatsapp" className="w-[44px] h-[44px]" />
            <span className="mr-4">+62 813 9232 7330</span>
          </a>
        </div>

        <div className="">
          <img src={bgCTA} alt="Contact Us" className="lg:block hidden lg:w-[510px] lg:h-[525px]" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
