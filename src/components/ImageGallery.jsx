import { Button, HeaderSection } from "./components";

const ImageGallery = () => {
  return (
    <section className="flex justify-center mb-40 relative pt-20">
      <div className="absolute top-0 left-0 z-[-1] w-full h-[345px] bg-pri-dark-gray" />

      <div className="lg:w-[1210px] w-[85%]">
        <div className="flex justify-between items-end">
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
      </div>
    </section>
  );
};

export default ImageGallery;
