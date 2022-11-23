import NavBar from "../components/NavBar";
import { Mark } from "../styles/reusableComponents";
import { PrimaryButton } from "../styles/reusableComponents";
import HeroImage from "../assets/11257388_417-removebg-preview.png";
import { RiArrowRightLine, RiBookLine } from "react-icons/ri";
import CreativeThinking from "../assets/creative-thinking.svg";
import { COLORS, HomeTexts } from "../constants/style-constants";
import Dots from "../assets/download.png";
import Books from "../assets/books.svg";

import * as HomeComponents from "../styles/styledComponents";

const options = {
  perPage: 3,
  width: "100%",
  background: "yellow",
};

function Home() {
  return (
    <HomeComponents.Wrapper>
      <NavBar />
      <HomeComponents.HeroContainer>
        <HomeComponents.TextBox>
          <h1>{HomeTexts.HERO_TITLE}</h1>
          <h2>
            {HomeTexts.HERO_SUBTITLE}
            <Mark>{HomeTexts.HERO_MARK}</Mark>
          </h2>
          <p>{HomeTexts.HERO_PARAGRAPH}</p>
          <PrimaryButton variant="primary">
            <span className="flex flex-cen">
              Get started
              <RiArrowRightLine />
            </span>
          </PrimaryButton>
        </HomeComponents.TextBox>
        <HomeComponents.ImageContainer>
          <img src={HeroImage} />
        </HomeComponents.ImageContainer>
      </HomeComponents.HeroContainer>
      <HomeComponents.ServicesPage>
        <h1>
          How to <Mark>benefit from us.</Mark>
        </h1>
        <div>{HomeTexts.SERVICES_TAG}</div>
        <HomeComponents.CardsContainer>
          <HomeComponents.Card {...COLORS.CARDS.RED}>
            <section>
              <img src={CreativeThinking} alt="Plan" />
            </section>
            <h1>{HomeTexts.CARD_ONE_HEADING}</h1>
            <p>{HomeTexts.CARD_ONE_PARAGRAPTH}</p>
          </HomeComponents.Card>
          <HomeComponents.Card {...COLORS.CARDS.GREEN}>
            <section>
              <img src={CreativeThinking} alt="Plan" />
            </section>
            <h1>{HomeTexts.CARD_TWO_HEADING}</h1>
            <p>{HomeTexts.CARD_TWO_PARAGRAPTH}</p>
          </HomeComponents.Card>
          <HomeComponents.Card {...COLORS.CARDS.BROWN}>
            <section>
              <img src={CreativeThinking} alt="Plan" />
            </section>
            <h1>{HomeTexts.CARD_THREE_HEADING}</h1>
            <p>{HomeTexts.CARD_THREE_PARAGRAPTH}</p>
          </HomeComponents.Card>
          <HomeComponents.Card {...COLORS.CARDS.BLUE}>
            <section>
              <img src={CreativeThinking} alt="Plan" />
            </section>
            <h1>{HomeTexts.CARD_FOUR_HEADING}</h1>
            <p>{HomeTexts.CARD_FOUR_PARAGRAPTH}</p>
          </HomeComponents.Card>
        </HomeComponents.CardsContainer>
      </HomeComponents.ServicesPage>
      <HomeComponents.ProductivityContainer>
        <h1>
          <img src={Dots} alt="" />
          Get access to powerful resources to boost your productivity
        </h1>
        <div>What you need</div>
        <HomeComponents.ResourceContainer></HomeComponents.ResourceContainer>
      </HomeComponents.ProductivityContainer>
    </HomeComponents.Wrapper>
  );
}

export default Home;
