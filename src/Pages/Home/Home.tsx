import NavBar from "../../components/NavBar";
import { Wrapper } from "../../styles/styledComponents";
import Hero from "./Hero";
import Services from "./Services";
import Productivity from "./Productivity";
import EngineeringBenefits from "./WhyEng";
import News from "./News";
import Join from "./Join";

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <Hero />
      <Services />
      <Productivity />
      <EngineeringBenefits />
      <News />
      <Join />
    </Wrapper>
  );
}

export default Home;
