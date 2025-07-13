import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import Experience from "../Components/Experience";

import Certificates from "../Components/Certificates";
import Resume from "../Components/Resume";
import Footer from "../Components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />

      <Certificates />
      <Resume />
      <Footer />
    </div>
  );
};

export default Index;
