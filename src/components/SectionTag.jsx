
const getVariants = (value) => {
  let classes = "bg-pri-yellow text-sec-white";
  switch (value) {
    case "yellow1":
      classes = "bg-pri-yellow text-sec-white";
      break;
    case "yellow2":
      classes = "bg-pri-yellow text-pri-dark-gray";
      break;
    case "green1":
      classes = "bg-pri-green text-sec-white";
      break;
    case "green2":
      classes = "bg-pri-green text-pri-dark-gray";
      break;

    default:
      break;
  }

  return classes;
};

const SectionTag = ({ variants, text }) => {
  return (
    <p className={`px-5 py-2 rounded-3xl uppercase tracking-[.25em] text-pri-dark-gray w-fit mb-4 ${getVariants(variants)}`}>{text}</p>
  );
};

export default SectionTag;
