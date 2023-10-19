import { Hero, About, Affiliation, Services } from "../components/components";

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
      {/* Services section */}
      <Services />
      
    </div>
  );
};

export default Home;
