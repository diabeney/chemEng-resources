import NavBar from "../../components/NavBar";
import { Wrapper } from "../../styles/styledComponents";
import Hero from "./Hero";
import Services from "./Services";
import Productivity from "./Productivity";
import EngineeringBenefits from "./WhyEng";
import News from "./News";
import Join from "./Join";
import NewsLetter from "./NewsLetter";

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
      <NewsLetter />
    </Wrapper>
  );
}

export default Home;