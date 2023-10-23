import { gallery } from "../constants/Gallery";
import { Button, HeaderSection } from "./components";

const ImageGallery = () => {
  return (
    <section className="flex justify-center mb-40 relative pt-20">
      <div className="bg-gallery absolute top-0 left-0 z-[-1] w-full lg:h-[445px] sm:h-[50%] h-[70%]" />

      <div className="lg:w-[1210px] w-[85%]">
        <div className="flex sm:flex-row flex-col justify-between sm:items-end items-start mb-14 gap-10">
          <HeaderSection
            {...{
              alignContent: "left",
              tagText: "Process",
              tagVariant: "green2",
              content:
                "Our client, global analytical techno company, wanted to build market.",
              color: "text-white",
            }}
          />
          <Button text="More" variations="btn-yellow" addClass="btn-base-pad" />
        </div>

        <div className="w-full overflow-x-scroll">
          <ul className="flex sm:flex-wrap sm:justify-center justify-start sm:w-full min-w-fit lg:gap-10 gap-6 sm:bg-white py-10 px-4 rounded-[28px] lg:shadow-xl">
            {gallery.map((pict) => (
              <li className="lg:w-[366px] w-[260px] lg:h-[344px] h-[260px] lg:shadow-none shadow-lg rounded-3xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl" key={pict.alt}>
                <img
                  src={pict.icon}
                  alt={pict.alt}
                  className="object-cover w-full h-full"
                  
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
