import Starfield from "../components/Starfield";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Starfield />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;