import { NavLink } from "react-router-dom";

import services from "../constants/services/services";
import SectionTag from "./SectionTag";

const Services = () => {
  return (
    <section className="flex justify-center">
      <div className="lg:w-[1210px] w-[80%]">
        <header className="max-w-[704px] mx-auto items-center flex flex-col justify-center">
          <SectionTag text={"services"} variants={"green1"} />
          <h2 className="text-center mb-10">
            Get Control Over Your Business I take your finance to next level
          </h2>
        </header>

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
