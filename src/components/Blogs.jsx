import { NavLink } from "react-router-dom";
import { HeaderSection, Button } from "./components";
import { useEffect } from "react";

const getConnection = async () => {
  const url =
    "https://extract-news.p.rapidapi.com/v0/article";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0fd4dad000msh0b64d9a2bffa832p174c5bjsn6de351fb3d8c",
      "X-RapidAPI-Host": "extract-news.p.rapidapi.com",
    },
  };

  let articles = [];

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    
    
  } catch (error) {
    console.error(error);
  }
};
const Blogs = () => {
  useEffect(() => {
    getConnection();

  }, []);

  return (
    <section className="flex justify-center mb-10 relative pt-20">
      {/* container */}
      <div className="lg:w-[1210px] w-[85%]">
        <div className="flex sm:flex-row flex-col justify-between sm:items-end items-start mb-14 gap-10">
          <HeaderSection
            {...{
              content: "Take a look at our latest articles & resources",
              tagText: "Blog",
              tagVariant: "green2",
            }}
          />
          <Button text="More" variations="btn-yellow" addClass="btn-base-pad" />
        </div>

        {/* content */}
        <ul className="w-full flex gap-10">
          <li className="lg:w-[50%] w-[75%] p-4">
            <div>
              <img src="" alt="" />
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi, possimus voluptatum fugit temporibus enim ullam
              necessitatibus voluptatibus iure veniam aliquam!
            </p>
          </li>
          <li className="lg:w-[50%] w-[75%] p-4">
            <div>
              <img src="" alt="" />
            </div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi, possimus voluptatum fugit temporibus enim ullam
              necessitatibus voluptatibus iure veniam aliquam!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
