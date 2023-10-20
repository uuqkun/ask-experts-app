import { Hero, About, Affiliation, Services, Process } from "../components/components";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <Hero />
      
      {/* Affiliations */}
      <Affiliation />
      
      {/* About section */}
      <div className="w-full flex justify-around mb-40">
        <About />
      </div>
      
      {/* Services section */}
      <Services />

      {/* process */}
      <Process />

      
      
    </div>
  );
};

export default Home;
