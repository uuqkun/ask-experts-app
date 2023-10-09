import { footer } from "../constants/Footer";
import { AskExLogo, Button } from "./components";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:w-[1210px] z-10 mt-32">
      {/* vertical */}
      <div className="flex flex-col lg:flex-row gap-20 justify-center lg:justify-between w-[85%] lg:w-full items-start">
        {/* logo  ||  Horizontal */}
        <div>
          <AskExLogo />
          <p className="text-sec-light-gray">Fb. / Ig. / Tw. / Be.</p>
        </div>

        {/* footer nav items */}
        <div className="flex lg:justify-end gap-20 flex-1 flex-wrap md:flex-nowrap">
          {footer.map((items) => (
            <div key={items.title} className="lg:w-1/6">
              <p className="text-nav text-sec-white mb-4">{items.title}</p>
              <div className="w-[34px] h-[3px] rounded-full bg-pri-yellow mb-6" />
              <ul className="ml-7">
                {items.items.map((item) => (
                  <a
                    href={item.li}
                    key={item.name}
                    className="text-p-normal cursor-pointer"
                  >
                    <li className="list-disc text-sec-white py-1 mb-1 hover:text-pri-green transition-all ease-linear">{item.name}</li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-nav text-sec-white mb-4">Address</p>
            <div className="w-[34px] h-[3px] rounded-full bg-pri-yellow mb-6" />
            <div>
              <p className="text-sec-white mb-4 w-[300px]">
                1700 W Blancke St. kiyev port south USA, America
              </p>
              <Button text="Book an Appointment" variations="btn-white" addClass="btn-base-pad"/>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-28 border-t-[1px] border-sec-paragraph py-10">
        <p className="text-sec-light-gray text-center">
          ©2022 Consultalk. All rights reserved | Terms of Service | Privacy
          Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
