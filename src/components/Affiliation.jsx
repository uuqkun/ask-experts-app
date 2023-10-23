import { affiliation } from "../constants/home/home";

const Affiliation = () => {
  return (
    <ul className="w-full flex flex-wrap lg:flex-nowrap gap-16 justify-evenly lg:justify-between items-center py-4 px-10 mb-40">
      {affiliation.map((brand) => (
        <li key={brand.name} className="opacity-[0.5] hover:opacity-[1] transition-all ease-linear">
          <a href={brand.link}>
            {/* <img src={brand.src} alt={brand.name} className={`w-[${brand.size.width}] h-[${brand.size.height}]`}/> */}
            <img src={brand.src} alt={brand.name} style={{ width: brand.size.width, height: brand.size.height}}/>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Affiliation;
