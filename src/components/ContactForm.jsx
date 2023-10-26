import { HeaderSection, Button } from "./components";
const ContactForm = () => {
  return (
    <section className="flex justify-center mb-10 relative pt-20">
      <main className="lg:w-[1210px] w-[85%]">
        {/* Text */}
        <div className="">
          <HeaderSection
            {...{
              alignContent: "left",
              tagText: "Contact",
              tagVariant: "yellow2",
              content: "Contact Us. It’s Easy.",
            }}
          />
        </div>

        {/* Form */}
        <form>
          <h2>form</h2>
        </form>
      </main>
    </section>
  );
};

export default ContactForm;
