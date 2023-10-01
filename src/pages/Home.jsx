import { Hero, About, Affiliation } from "../components/components";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <Hero />
      <Affiliation />

      {/* About section */}
      <div className="w-full flex justify-around mb-40">
        <About />
      </div>
    </div>
  );
};

export default Home;
