import { HomeTexts } from "../../constants/style-constants";
import HeroImage from "../../assets/11257388_417-removebg-preview.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textboxAnimations } from "../../constants/framer-animations";
import { textAnimations } from "../../constants/framer-animations";
import { imageBoxAnimations } from "../../constants/framer-animations";

function Hero() {
  return (
    <HeroContainer>
      <TextBox variants={textboxAnimations} initial="hidden" animate="show">
        <Title variants={textAnimations} className="hero-heading">
          {HomeTexts.HERO_TITLE}
        </Title>
        <HeroParagraph variants={textAnimations}>
          {HomeTexts.HERO_PARAGRAPH}
        </HeroParagraph>
      </TextBox>
      <ImageContainer>
        <motion.img
          variants={imageBoxAnimations}
          initial="hidden"
          animate="show"
          src={HeroImage}
        />
      </ImageContainer>
    </HeroContainer>
  );
}

const Title = styled(motion.h1)`
  font-size: 2rem;
  padding-bottom: 0.8em;
`;

const HeroParagraph = styled(motion.p)`
  font-size: 1rem;
  padding-bottom: 2rem;
  @media (min-width: 50em) {
    font-size: 1.3rem;
  }
`;

export const TextBox = styled(motion.section)`
  padding: 1em;
  color: ${({ theme }) => theme.foreground};

  @media (min-width: 50em) {
    & h1 {
      font-size: 2rem;
      line-height: 1;
      margin-top: 1em;
    }
  }

  @media (min-width: 60em) {
    & h1 {
      margin-top: 1em;
      padding-block: 0.2em;
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
    }
  }
`;

export const ImageContainer = styled.div`
  padding: 2em 0em;
`;

export const HeroContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;
  gap: 1rem;
  top: 0;
  padding-top: 3em;
  left: 0;
  place-items: center;
  background-color: ${({ theme }) => theme.background};

  @media (min-width: 50em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    position: relative;
  }
`;

export default Hero;
