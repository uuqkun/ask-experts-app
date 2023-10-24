import countData from "../constants/countData";

const Counter = () => {
  return (
    <section className="flex justify-center mb-40 relative">
      <div className="lg:w-[1210px] w-[85%]">
        <ul className="flex flex-wrap justify-center gap-36">
          {countData.map((data) => (
            <li key={data.title}>
              <h1 className="w-fit mx-auto">{data.count}+</h1>
              <p className="text-3xl">{data.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Counter;
