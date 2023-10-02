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
  };

  return (
    <nav className="flex justify-between items-center w-[90%] lg:w-[1210px] py-10">
      {/* Logo */}
      <AskExLogo />

      {/* Nav Buttons */}

      <div className="block lg:hidden">
        <img
          src={menu3x}
          alt="menu bar"
          className="w-[40px]"
          onClick={() => setActiveMenu(!activeMenu)}
        />

        {activeMenu && (
          <div className="w-1/2 bg-red-500 h-40 fixed z-[5] top-0 right-0">
            <img
              src={cross}
              alt="exit menu"
              className="w-[40px]"
              onClick={() => setActiveMenu(!activeMenu)}
            />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            assumenda expedita sit modi quo, voluptas esse quas debitis fugit
            fuga asperiores? Ipsam, voluptatum amet. Tempore perferendis beatae
            minus at incidunt.
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
    </nav>
  );
};

export default Navbar;
