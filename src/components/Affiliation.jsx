import { affiliation } from "../constants/home/home";

const Affiliation = () => {
  return (
    <ul className="w-full flex justify-between items-center py-4 px-10 mb-40">
      {affiliation.map((brand) => (
        <li key={brand.name} className="opacity-[0.5] hover:opacity-[1] transition-all ease-linear">
          <a href={brand.link}>
            <img src={brand.src} alt={brand.name} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Affiliation;
