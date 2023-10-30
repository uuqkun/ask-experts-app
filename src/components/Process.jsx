import { growingClients, process } from "../constants/Process";
import { HeaderSection } from "./components";

const Process = () => {
  const attributes = [
    {
      left: {
        alignContent: "left",
        tagText: "Process",
        tagVariant: "green2",
        content: "There have some easy steps to join with us!",
      },
      right: {
        alignContent: "left",
        tagText: "Growing",
        tagVariant: "yellow2",
        content: "30 Years of Experience",
      },
    },
  ];
  return (
    <section className="flex justify-center mb-40">
      <div className="section-responsive flex lg:flex-row flex-col lg:gap-10 gap-32">
        {/* left side */}
        <div className="">
          <HeaderSection {...attributes[0].left} />
          <p className="mb-10">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>

          <ul>
            {process.map((item) => (
              <li
                key={item.id}
                className="lg:w-[480px] border-t-[1px] border-gray-200 flex gap-6 mb-10 pt-7"
              >
                <div
                  className={`w-[44px] h-[44px] rounded-full bg-${item.custStyle.bg} flex items-center justify-center mt-3`}
                >
                  <h6 className={`text-${item.custStyle.text} text-[20px]`}>
                    {item.id}
                  </h6>
                </div>
                <div className="lg:max-w-[380px]">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* right side */}
        <div className="">
          <HeaderSection {...attributes[0].right} />
          <p className="mb-14">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity beta test. Override the digital divide with additional from
            DevOps.
            <br />
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>

          <ul className="flex flex-wrap gap-4">
            {growingClients.map((item) => (
              <li
                key={item.id}
                className="px-6 py-8 bg-gray-50 rounded-xl lg:max-w-[280px] max-w-[300px] border border-gray-200"
              >
                <img src={item.icon} alt={item.title} className="mb-6 w-[54px] h-[54px]" />
                <h5 className="mb-2">{item.title}</h5>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
