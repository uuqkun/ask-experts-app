import { NavLink } from "react-router-dom";
import { HeaderSection, Button } from "./components";
import { useEffect, useState } from "react";

const getConnection = async () => {
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_3181024063b4fadeb878f8d21abccde96b398";

  const option = {
    method: "GET",
    headers: {},
  };


  let res = [];

  try {
    const response = await fetch(url, option);
    const result = await response.json()

    let temp = result['results'];

    console.log(temp)
    // for (let i = 0; i < 3; i++) {
    //   const ar = temp[i];
    //   res.push(ar);
    // }
  } catch (error) {
    console.error(error);
  }

  return res;
};

const Blogs = () => {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    setArticles(getConnection);
    console.log(getConnection)
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
          {/* {articles.map((item, index) =>
            item[index].map((i) => (
              <li className="lg:w-[50%] w-[75%] p-4">
                <div>
                  <img src="" alt="" />
                </div>
                <h3>{i.title}</h3>
                <p>{i.description}</p>
              </li>
            ))
          )} */}
          {console.log(articles)}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
