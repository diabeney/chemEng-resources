import Dots from "../../assets/download.png";
import { Mark } from "../../styles/reusableComponents";
import styled from "styled-components";
import { Container } from "../../styles/reusableComponents";
import { CARDS } from "../../constants/style-constants";
import { ProductivityCards } from "../../constants/style-constants";
import {
  headingAnimationsProp,
  serviceAnimations,
} from "../../constants/framer-animations";
import { motion } from "framer-motion";

function Productivity() {
  return (
    <ProductivityContainer>
      <motion.h1 {...headingAnimationsProp}>
        <img src={Dots} alt="" />
        Get access to <Mark>powerful resources</Mark> to boost your
        productivity.
      </motion.h1>
      <motion.div {...headingAnimationsProp}>What you need</motion.div>
      <ResourceContainer>
        {ProductivityCards.map((card) => {
          return (
            <ResourceCard
              variants={serviceAnimations}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: "all", once: true }}
              key={card.name}
            >
              <section>
                <card.icon size={48} color="inherit" />
              </section>
              <h2>{card.name}</h2>
              <p>{card.paragraph}</p>
            </ResourceCard>
          );
        })}
      </ResourceContainer>
    </ProductivityContainer>
  );
}

export const ProductivityContainer = styled(Container)`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  padding-block: 3em;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? `#Fff` : `hsl(220, 15%, 16%)`};

  & h1 {
    font-size: 2rem;
    line-height: 1.2;
    text-align: center;
    position: relative;
    z-index: 10;

    & img {
      position: absolute;
      left: 10%;
      top: 50%;
      z-index: -10;
      margin-inline: auto;
    }
  }

  & div {
    margin-block: 1em;
    width: fit-content;
    margin-inline: auto;
    background-color: ${CARDS.GREEN.headingColor};
    padding: 0.4em 1em;
    color: #fff;
    border-radius: 3em;
  }

  @media (min-width: 50em) {
    & h1 {
      font-size: 3em;
      padding-top: 0.5em;
      width: 70%;
      margin-inline: auto;
    }

    & div {
      margin-block: 5em;
    }
  }
`;

export const ResourceContainer = styled.section`
  width: 100%;
  padding-top: 2em;
  display: grid;
  gap: 2em;

  @media (min-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ResourceCard = styled(motion.article)`
  width: 95%;
  place-self: center;
  padding: 1.2em;
  border-radius: 1em;
  box-shadow: ${({ theme }) =>
        theme.mode === "dark"
          ? `rgba(255, 255, 255, 0.2)`
          : `rgba(0, 0, 0, 0.02)`}
      0px 1px 3px 0px,
    ${({ theme }) =>
        theme.mode === "dark"
          ? `rgba(255, 255, 255, 0.2)`
          : `rgba(0, 0, 0, 0.2)`}
      0px 0px 0px 1px;

  & section {
    padding: 1em;
    width: fit-content;
    border-radius: 0.8em;
    color: #ffe;
    background-color: ${({ theme }) => theme.accent};
  }

  h2 {
    font-size: 1.5em;
    padding-block: 0.6em;
  }

  p {
    font-size: 1em;
  }

  @media (min-width: 50em) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export default Productivity;
