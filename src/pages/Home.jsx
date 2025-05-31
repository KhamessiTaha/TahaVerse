import Starfield from "../components/Starfield";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-950">
      <Starfield starDensity={0.8} />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;