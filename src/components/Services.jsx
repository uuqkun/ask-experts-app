import { NavLink } from "react-router-dom";

import services from "../constants/services/services";

import { HeaderSection } from "./components";

const Services = () => {
  let headerProps = {
    alignContent: "center",
    tagText: "Process",
    tagVariant: "yellow1",
    content: "Get Control Over Your Business I take your finance to next level",
  };

  return (
    <section className="flex justify-center mb-40 py-10">
      <div className="lg:w-[1210px] w-[80%]">
        <HeaderSection {...headerProps} />

        <ul className="flex flex-wrap justify-center gap-5">
          {services.map((item) => (
            <NavLink
              to={item.link}
              key={item.title}
              className="lg:w-[380px] md:w-[300px] rounded-3xl bg-gray-50 flex flex-col items-start justify-center p-12  hover:scale-105 hover:shadow-lg transition-all ease-linear"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[84px] hover:text-white mb-6"
              />
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
