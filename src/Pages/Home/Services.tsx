import { Mark } from "../../styles/reusableComponents";
import { HomeTexts } from "../../constants/style-constants";
import CreativeThinking from "../../assets/creative-thinking.svg";
import styled from "styled-components";
import { CardProps } from "../../constants/style-constants";
import { motion } from "framer-motion";
import { CARDS } from "../../constants/style-constants";
import { ServicesConstants } from "../../constants/style-constants";
import {
  headingAnimationsProp,
  serviceAnimations,
} from "../../constants/framer-animations";

export default function Services() {
  return (
    <ServicesPage>
      <motion.h1 {...headingAnimationsProp}>
        How to <Mark>benefit from us.</Mark>
      </motion.h1>
      <motion.div {...headingAnimationsProp}>
        {HomeTexts.SERVICES_TAG}
      </motion.div>
      <CardsContainer>
        {ServicesConstants.map((item) => {
          return (
            <Card
              key={item.color}
              {...(CARDS[item.color] as CardProps)}
              variants={serviceAnimations}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.8, once: true }}
            >
              <section>
                <img src={CreativeThinking} alt="Image" />
              </section>
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
            </Card>
          );
        })}
      </CardsContainer>
    </ServicesPage>
  );
}

export const Card = styled(motion.article)<CardProps>`
  position: relative;
  padding: 0.8em 1em;
  overflow: hidden;
  border-radius: 0.4em;
  color: ${({ color }) => color};

  & section {
    width: fit-content;
    padding: 2em;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin-inline: auto;
    transition: background-color 500ms cubic-bezier(0.01, 1.09, 0.78, 1);

    &:hover {
      background-color: ${({ textColor }) => textColor};
    }

    & img {
      width: 3rem;
    }
  }

  h1 {
    font-size: 1.6em !important;
    padding-block: 0.2em;
    line-height: 1.5;
    color: ${({ theme }) => theme.foreground};
  }

  p {
    font-size: 1em;
    text-align: center;
    color: ${({ theme }) => theme.foreground};
  }
`;

export const CardsContainer = styled(motion.section)`
  width: 90%;
  margin-inline: auto;
  z-index: 10;
  position: relative;
  padding: 1em;
  color: ${({ theme }) => theme.foreground};
  display: grid;
  gap: 1.4em;

  @media (min-width: 30em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServicesPage = styled.section`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;

  color: ${({ theme }) => theme.foreground};
  & h1 {
    text-align: center;
    font-size: 2em;
  }

  & div {
    margin-block: 1em;
    width: fit-content;
    margin-inline: auto;
    background-color: ${({ theme }) => theme.accent};
    padding: 0.4em 1em;
    color: #fff;
    border-radius: 3em;
  }

  @media (min-width: 50em) {
    & h1 {
      font-size: 3em;
      padding-top: 0.5em;
    }

    & div {
      margin-block: 5em;
    }
  }
`;
