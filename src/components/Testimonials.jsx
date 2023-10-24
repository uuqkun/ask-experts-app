import { next, prev } from "../assets/assets";
import { Button, SectionTag } from "./components";

const Testimonials = () => {
  const headerProps = {
    alignContent: "center",
    content:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore”",
    tagText: "client feedback",
    tagVariants: "green1",
  };
  return (
    <section className="flex justify-center mb-10 relative pt-20">
      <div className="lg:w-[1210px] w-[85%]">
        <div className="mx-auto w-[60%]">
          <div className="w-fit mx-auto">
            <SectionTag text="Client Feedback" variants="green1" />
          </div>
          <h3 className="text-center text-gray-400">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore”
          </h3>
        </div>

        {window.innerWidth < 768 ? (
          <div className="flex flex-col flex-wrap items-center justify-around mt-10 gap-10">
            <div>
              <div className="bg-pri-green w-[210px] h-[210px] rounded-full mb-6"></div>
              <h5 className="text-center">Ridwan</h5>
              <p className="text-pri-green text-center">Mobile Developer</p>
            </div>
            <div className="flex gap-6">
              <Button
                icon={prev}
                text="prev"
                variations="btn-white"
                addClass="btn-iconic items-center gap-4 bg-gray-100"
              />
              <Button
                icon={next}
                text="next"
                variations="btn-white"
                addClass="btn-iconic items-center gap-4 bg-gray-100"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-around mt-10">
            <Button
              icon={prev}
              text="prev"
              variations="btn-white"
              addClass="btn-iconic items-center gap-4 bg-gray-100"
            />
            <div>
              <div className="bg-pri-green w-[210px] h-[210px] rounded-full mb-6"></div>
              <h5 className="text-center">Ridwan</h5>
              <p className="text-pri-green text-center">Mobile Developer</p>
            </div>
            <Button
              icon={next}
              text="next"
              variations="btn-white"
              addClass="btn-iconic items-center gap-4 bg-gray-100"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
