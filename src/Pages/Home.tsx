import NavBar from "../components/NavBar";
import { Mark } from "../styles/reusableComponents";
import { PrimaryButton } from "../styles/reusableComponents";
import HeroImage from "../assets/11257388_417-removebg-preview.png";
import {
  RiArrowRightLine,
  RiBook3Line,
  RiArticleLine,
  RiCodeSLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import CreativeThinking from "../assets/creative-thinking.svg";
import { COLORS, HomeTexts } from "../constants/style-constants";
import Dots from "../assets/download.png";
import * as HomeComponents from "../styles/styledComponents";
import BackgroundImage from "../assets/thisisengineering-raeng-ovWUKV1btXk-unsplash.jpg";
import { ActivitiesText } from "../constants/style-constants";

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
          Get access to <Mark>powerful resources</Mark> to boost your
          productivity.
        </h1>
        <div>What you need</div>
        <HomeComponents.ResourceContainer>
          <HomeComponents.ResourceCard>
            <section>
              <RiBook3Line size={48} color="inherit" />
            </section>
            <h2>Books</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </HomeComponents.ResourceCard>
          <HomeComponents.ResourceCard>
            <section>
              <RiArticleLine size={48} color="inherit" />
            </section>
            <h2>Articles</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </HomeComponents.ResourceCard>
          <HomeComponents.ResourceCard>
            <section>
              <RiCodeSLine size={48} color="inherit" />
            </section>
            <h2>Softwares</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </HomeComponents.ResourceCard>
        </HomeComponents.ResourceContainer>
      </HomeComponents.ProductivityContainer>
      <HomeComponents.Activities backgroundImage={BackgroundImage}>
        <div>
          <h1>Why Choose Engineering?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            alias, saepe dolore nihil et atque voluptatem blanditiis tempora
            totam voluptas?
          </p>
        </div>
        <section>
          {ActivitiesText.map((item) => {
            return (
              <article key={item}>
                <RiCheckboxCircleFill
                  color={COLORS.CARDS.GREEN.textColor}
                  size={32}
                />
                <h1>{item}</h1>
              </article>
            );
          })}
        </section>
      </HomeComponents.Activities>
    </HomeComponents.Wrapper>
  );
}

export default Home;
