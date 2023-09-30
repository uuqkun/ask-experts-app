import { useEffect, useState } from "react";

import { gps, time } from "../assets/assets";
import { socialMedia } from "../constants/topbar";

const formatDate = (date) => {
  const options = {
    year: "numeric",
    day: "2-digit",
    month: "short",
  };

  return date.toLocaleDateString("id-ID", options);
};

const Topbar = () => {
  const [date, setDate] = useState();
  
  useEffect(() => {
    const interval = setInterval(() => {
      let today = new Date();
      setDate(formatDate(today));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center md:w-[1210px] py-[18px]">
      <div className="flex gap-2 items-center">
        <img className="icon-standart" src={time} alt="time icon" />
        <p className="text-sec-light-gray text-p-sm">{date}</p>
      </div>
      <div className="flex gap-2 items-center">
        <img className="icon-standart" src={gps} alt="gps icon" />
        <p className="text-sec-light-gray text-p-sm">Indonesia</p>
      </div>
      <div className="flex justify-center gap-6">
        {socialMedia.map((icons) => (
          <a
            href={icons.link}
            key={icons.name}
            className="icon-standart"
            target="_blank"
          >
            <img className="w-full h-full" src={icons.src} alt={icons.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
