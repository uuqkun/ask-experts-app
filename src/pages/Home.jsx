import { Hero, About, Affiliation, Services, Process, ImageGallery, Counter } from "../components/components";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
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

      {/* Gallery */}
      <ImageGallery/>

      {/* Counter */}
      <Counter />
      
    </div>
  );
};

export default Home;
