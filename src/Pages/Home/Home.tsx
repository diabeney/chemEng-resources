import { Wrapper } from "../../styles/styledComponents";
import Hero from "./Hero";
import Services from "./Services";
import Productivity from "./Productivity";
import EngineeringBenefits from "./WhyEng";
import News from "./News";
import Join from "./Join";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <Wrapper>
      <Hero />
      <Services />
      <Productivity />
      <EngineeringBenefits />
      {/* <News /> */}
      <Join />
      <Contact />
      <Footer />
    </Wrapper>
  );
}

export default Home;
