import { SectionTag } from "./components";

const HeaderSection = ({
  alignContent = "right",
  tagText = "Empty",
  tagVariant = "green2",
  content = "Empty h2 tag",
}) => {
  let isRight = alignContent.toLowerCase() === "right";
  let isCenter = alignContent.toLowerCase() === "center";

  return isCenter ? (
    <header className={`max-w-[704px] flex flex-col mx-auto items-center`}>
      <SectionTag text={tagText} variants={tagVariant} />
      <h2 className={`text-center mb-10`}>{content}</h2>
    </header>
  ) : isRight ? (
    <header className={`max-w-[704px] flex flex-col items-end`}>
      <SectionTag text={tagText} variants={tagVariant} />
      <h2 className={`text-right mb-10`}>{content}</h2>
    </header>
  ) : (
    <header className={`max-w-[704px] flex flex-col`}>
      <SectionTag text={tagText} variants={tagVariant} />
      <h2 className={`text-left mb-10`}>{content}</h2>
    </header>
  );
};

export default HeaderSection;
