import { gallery } from "../constants/Gallery";
import { Button, HeaderSection } from "./components";

const ImageGallery = () => {
  return (
    <section className="flex justify-center mb-40 relative pt-20">
      <div className="bg-gallery absolute top-0 left-0 z-[-1] w-full h-[445px]" />

      <div className="lg:w-[1210px] w-[85%]">
        <div className="flex justify-between items-end mb-14">
          <HeaderSection
            {...{
              alignContent: "left",
              tagText: "Process",
              tagVariant: "green1",
              content:
                "Our client, global analytical techno company, wanted to build market.",
                color: "text-white"
            }}
          />
          <Button text="More" variations="btn-yellow" addClass="btn-base-pad"/>
        </div>

        <ul className="flex sm:flex-wrap flex-nowrap sm:justify-center sm:w-full overflow-x-scroll w-[300%] lg:gap-10 gap-6 lg:bg-white py-10 px-4 rounded-[28px] lg:shadow-xl ">
            {gallery.map(pict => (
                <li className="lg:w-[366px] w-[260px] lg:h-[344px] h-[260px] lg:shadow-none shadow-lg rounded-3xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
                    <img src={pict.icon} alt={pict.alt} className="object-cover w-full h-full"/>
                </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default ImageGallery;
