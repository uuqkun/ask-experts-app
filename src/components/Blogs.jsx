import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { HeaderSection, Button } from "./components";
import { bgCTA } from "../assets/assets";
import useFetch from "../hooks/useFetch";

const staticData = [
  {
    id: "126a2afd6d26e069af62e85c33193e8b",
    title: "California’s Death Valley and the driest place in North America",
    description:
      "Parched ground turned to ponds, wildflowers are in bloom in remote areas and a salt flat is now a massive lake. The salt flat-turned-lake is an exceptional but fleeting sight to behold.",
    creator: "Cnn Com Wire Service",
    pubDate: "2023-10-25 10:47:36",
    link: "https://www.caughtoffside.com/2023/10/25/video-ancelotti-provides-important-jude-bellingham-injury-update-ahead-of-el-clasico/",
  },
  {
    id: "126a2afd6d26e069af62e85c33193e9b",
    title: "California’s Death Valley and the driest place in North America",
    description:
      "Parched ground turned to ponds, wildflowers are in bloom in remote areas and a salt flat is now a massive lake. The salt flat-turned-lake is an exceptional but fleeting sight to behold.",
    creator: "Cnn Com Wire Service",
    pubDate: "2023-10-25 10:47:36",
    link: "https://www.caughtoffside.com/2023/10/25/video-ancelotti-provides-important-jude-bellingham-injury-update-ahead-of-el-clasico/",
  },
];

const Blogs = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    /*
    useFetch(
      "https://newsdata.io/api/1/news?apikey=pub_3181024063b4fadeb878f8d21abccde96b398&country=id,gb,us"
    ).then((data) => {
      let arr = [];
      let results = data.results;
      console.log(results);

      for (let i = 0; i < 3; i++) {
        const element = results[i];
        arr.push(element);
      }

      // Set current articles state
      setArticles(arr);
    });
    */
  }, []);

  return (
    <section className="flex justify-center mb-10 relative pt-20">
      {/* container */}
      <div className="section-responsive">
        <div className="flex sm:flex-row flex-col justify-between sm:items-end items-start mb-14 gap-10">
          <HeaderSection
            {...{
              content: "Take a look at our latest articles & resources",
              tagText: "Blog",
              tagVariant: "green2",
            }}
          />
          <Button text="More" variations="btn-yellow" addClass="btn-base-pad" />
          <p className="lg:hidden block">Swipe</p>
        </div>

        {/* content */}
        <div className="w-full overflow-x-scroll rounded-xl lg:rounded-none">
          <ul className="w-fit flex gap-10">
            {articles
              ? articles.map((item) => (
                  <li className="lg:w-[50%] w-[75%] p-4" key={item.article_id}>
                    <div>
                      <img src={bgCTA} alt={item.title} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>

                    <div>{item.creator != null ? item.creator : "Anonym"}</div>
                  </li>
                ))
              : staticData.map((item) => (
                  <li
                    className="lg:w-[50%] md:w-[360px] w-[300px] p-4 hover:scale-105 transition-all"
                    key={item.id}
                  >
                    <div>
                      <img src={bgCTA} alt={item.title} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>

                    <div className="flex items-center justify-between">
                      <p><em>{item.creator}</em> <span className="mx-6">|</span> {item.pubDate.substring(0,9)}</p>
                      <a href={item.link} className="btn-base btn-base-pad btn-dark">Read</a>
                    </div>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
