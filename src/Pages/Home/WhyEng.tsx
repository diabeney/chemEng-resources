import React from "react";
import { ActivitiesText } from "../../constants/style-constants";
import BackgroundImage from "../../assets/thisisengineering-raeng-ovWUKV1btXk-unsplash.jpg";
import { RiCheckboxCircleFill } from "react-icons/ri";
import styled from "styled-components";
import { CARDS } from "../../constants/style-constants";
import { Container } from "../../styles/reusableComponents";
import {
  headingAnimationsProp,
  chemCardAnimations,
  chemCardsContainerAnimations,
} from "../../constants/framer-animations";
import { motion } from "framer-motion";
import { Paragraph } from "../../styles/reusableComponents";

function EngineeringBenefits() {
  return (
    <ActivitiesWrapper backgroundImage={BackgroundImage} padding="0">
      <Activities>
        <div>
          <motion.h1 {...headingAnimationsProp}>
            Why choose Chemical Engineering?
          </motion.h1>
          <Paragraph>
            Chemical Engineering is the branch of engineering that deals with
            chemical production and the manufacture of products through chemical
            processes. Chemical engineers apply the principles of chemistry,
            biology, physics and math to design equipment, systems and processes
            for refining raw materials and for mixing, compounding and
            processing chemicals to make valuable products.
          </Paragraph>
        </div>
        <motion.section
          variants={chemCardsContainerAnimations}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6, once: true }}
        >
          {ActivitiesText.map((item) => {
            return (
              <motion.article key={item} variants={chemCardAnimations}>
                <RiCheckboxCircleFill color={CARDS.GREEN.textColor} size={32} />
                <p>{item}</p>
              </motion.article>
            );
          })}
        </motion.section>
      </Activities>
    </ActivitiesWrapper>
  );
}

export const ActivitiesWrapper = styled(Container)`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      to bottom,
      hsla(220, 15%, 16%, 0.8),
      hsla(237, 63%, 0%, 0.6)
    ),
    url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin-inline: auto;
`;

export const Activities = styled(Container)`
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;
  margin-inline: auto;
  padding-block: 3em;
  display: flex;
  background-color: transparent;
  flex-direction: column; 
  gap: 2em;

    div {
      width: 100%;
      padding: .4em .2em;
      position: sticky: 
      top: 0;

      h1 {
        font-size: 2.2rem;
        color: white;
      }

      p {
        color: white;
      }
    }

    section {
      width: 100%;
      padding: .6em;
      display: flex;
      flex-direction: column;
      gap: 1em;

      article {
        width: 100%;
        background-color: ${({ theme }) => theme.background};
        padding: 1.8em 1.6em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: .4em;
        border-radius: .4em;
        color: ${({ theme }) => theme.accent};
        transition: background-color 300ms cubic-bezier(0.01, 1.09, 0.78, 1);
        
        &:hover {
        background-color: ${({ theme }) => theme.accent};
          color: ${({ theme }) => theme.background};
        }

        
      }
    }
 

    @media (min-width: 50em) {
      flex-direction: row;
      div {
        width: 50%;

        h1 {
          font-size: 3rem;
        }
      }
  
      section {
        width: 50%;
        padding: 2em;
      }
    }
  
  `;

export default EngineeringBenefits;
