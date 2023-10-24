import { SectionTag } from "./components";

const HeaderSection = ({
  alignContent = "left",
  tagText = "Empty",
  tagVariant = "green2",
  content = "Empty h2 tag",
  color = "text-black"
}) => {

  return alignContent === "center" ? (
    <header className={`max-w-[704px] flex flex-col mx-auto items-center ${color}`}>
      <SectionTag text={tagText} variants={tagVariant} />
      <h2 className={`text-center`}>{content}</h2>
    </header>
  ) : alignContent === "right" ? (
    <header className={`max-w-[704px] flex flex-col items-end ${color}`}>
      <SectionTag text={tagText} variants={tagVariant} />
      <h2 className={`text-right`}>{content}</h2>
    </header>
  ) : (
    <header className={`max-w-[704px] flex flex-col ${color}`}>
      <SectionTag text={tagText} variants={tagVariant} />
      <h2 className={`text-left`}>{content}</h2>
    </header>
  );
};

export default HeaderSection;
