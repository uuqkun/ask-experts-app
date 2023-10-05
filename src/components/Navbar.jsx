import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../pages/pages";
import { AskExLogo } from "./components";
import { cross, menu3x, phone } from "../assets/assets";
import { useEffect } from "react";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");
  const [activeMenu, setActiveMenu] = useState(false);

  const handleIsActive = (page) => {
    setActivePage(page);
    setActiveMenu(false);
  };

  return (
    <nav className="relative w-[100%] lg:w-[1210px] py-10">
      {/* Logo */}
      <div className="flex items-center justify-between w-[90%] m-auto">
        <AskExLogo />

        {/* Nav Buttons */}

        <div className="block lg:hidden">
          <img
            src={menu3x}
            alt="menu bar"
            className={`w-[40px] z-50 ${activeMenu ? "hidden" : "block"}`}
            onClick={() => setActiveMenu(!activeMenu)}
          />

          {activeMenu && (
            <div className="absolute z-[5] top-0 right-0 w-[300px] md:w-[400px] bg-[#fff] px-8 py-12 md:px-14 shadow-md">
              <img
                src={cross}
                alt="menu bar"
                className="w-[40px] z-50 mb-10"
                onClick={() => setActiveMenu(!activeMenu)}
              />

              <ul className="flex flex-col gap-7 mb-10">
                {links.map((item) => (
                  <NavLink
                    to={`${item.link.name}`}
                    key={item.title}
                    className="py-1"
                    onClick={() => handleIsActive(item.title.toLowerCase())}
                  >
                    <p
                      className={`${
                        activePage === item.title.toLowerCase()
                          ? "active border-pri-green"
                          : "border-[rgba(27,27,27,0)]"
                      } border-b-2 transition ease-in text-pri-dark-gray py-2 w-fit`}
                    >
                      {item.title}
                    </p>
                  </NavLink>
                ))}
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=6281392327330"
                className="btn-dark btn-base w-fit btn-iconic flex items-center gap-3"
                target="_blank"
              >
                <img src={phone} alt="whatsapp" />
                <span className="mr-4">+62 813 9232 7330</span>
              </a>
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center justify-between gap-20">
          <ul className="flex gap-7">
            {links.map((item) => (
              <NavLink
                to={`${item.link.name}`}
                key={item.title}
                className="py-1"
                onClick={() => handleIsActive(item.title.toLowerCase())}
              >
                <p
                  className={`${
                    activePage === item.title.toLowerCase()
                      ? "active border-pri-green"
                      : "border-[rgba(27,27,27,0)]"
                  } border-b-2 transition ease-in text-white py-2`}
                >
                  {item.title}
                </p>
              </NavLink>
            ))}
          </ul>
          {/* Contact Button */}
          <a
            href="https://api.whatsapp.com/send?phone=6281392327330"
            className="btn-white btn-base btn-iconic flex items-center gap-3"
            target="_blank"
          >
            <img src={phone} alt="whatsapp" />
            <span className="mr-4">+62 813 9232 7330</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
