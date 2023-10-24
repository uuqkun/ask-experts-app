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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed, eveniet aliquid velit iure natus excepturi? Exercitationem molestiae dicta magnam illum blanditiis nam veniam! Explicabo voluptate eaque cum reprehenderit consectetur, quaerat ea sit impedit. Voluptas vero quidem, possimus illo vitae id nulla facere obcaecati excepturi. Aperiam ducimus at, animi rem delectus maxime totam, obcaecati fuga nisi quia dolore recusandae nam quidem ipsa a. Incidunt consequuntur laudantium ex, reprehenderit non nam cum quia, dignissimos expedita laborum cupiditate provident unde doloremque ut, nostrum omnis sequi repudiandae? Ducimus impedit nisi voluptates veritatis porro, sit vero nesciunt excepturi nam laborum corrupti assumenda? Est, mollitia.</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Counter;
