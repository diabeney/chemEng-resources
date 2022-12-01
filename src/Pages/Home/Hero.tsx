import { HomeTexts } from "../../constants/style-constants";
import HeroImage from "../../assets/11257388_417-removebg-preview.png";
import { PrimaryButton } from "../../styles/reusableComponents";
import { RiArrowRightLine } from "react-icons/ri";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textboxAnimations } from "../../constants/framer-animations";
import { textAnimations } from "../../constants/framer-animations";
import { imageBoxAnimations } from "../../constants/framer-animations";

function Hero() {
  return (
    <HeroContainer>
      <TextBox variants={textboxAnimations} initial="hidden" animate="show">
        <motion.h1 variants={textAnimations}>{HomeTexts.HERO_TITLE}</motion.h1>
        <motion.p variants={textAnimations}>
          {HomeTexts.HERO_PARAGRAPH}
        </motion.p>
        <PrimaryButton
          variant="primary"
          padding=".8em 1em"
          variants={textAnimations}
        >
          <span className="flex flex-cen">
            Get started
            <RiArrowRightLine />
          </span>
        </PrimaryButton>
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

export const TextBox = styled(motion.section)`
  padding: 1em;
  color: ${({ theme }) => theme.foreground};

  & h1 {
    font-size: 2.8em;
    padding-top: 2em;
    line-height: 1.2;
  }

  & p {
    padding-block: 1em;
    font-weight: 500;
  }

  @media (min-width: 50em) {
    & h1 {
      font-size: 2em;
      line-height: 1;
      margin-top: 1em;
    }
  }

  @media (min-width: 60em) {
    & h1 {
      margin-top: 1em;
      padding-block: 0.2em;
      font-size: 3.5em;
      font-weight: 700;
      line-height: 1.1;
    }

    button {
      margin-block: 0.6em;
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
  overflow hidden;
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
