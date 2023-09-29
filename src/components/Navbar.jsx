import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Contact, links } from "../pages/pages";
import { Button, AskExLogo } from "./components";
import { phone } from "../assets/assets";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");

  const handleIsActive = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="flex justify-between items-center md:w-[1210px] py-10">
      {/* Logo */}
      <AskExLogo />

      {/* Nav Buttons */}
      <ul className="flex gap-7">
        {links.map((item) => (
          <NavLink
            to={`${item.link.name}`}
            key={item.title}
            className="py-1"
            onClick={() => handleIsActive(item.title.toLowerCase())}
          >
            <p
              className={`${activePage === item.title.toLowerCase() ? "active border-pri-green" : "border-[#1b1b1bed] "} border-b-2 transition ease-in text-white py-2`}
            >
              {item.title}
            </p>
          </NavLink>
        ))}
      </ul>
      {/* Contact Button */}
      <Button
        text={"+62 813 9232 7330"}
        variations={"btn-white"}
        icon={phone}
        addClass={"flex items-center gap-4 btn-iconic"}
      />
    </nav>
  );
};

export default Navbar;
