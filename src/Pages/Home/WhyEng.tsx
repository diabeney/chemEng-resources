import { ActivitiesText } from "../../constants/style-constants";
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
    <ActivitiesWrapper
      backgroundImage={
        "https://ik.imagekit.io/i7gyrkpch/_MG_6757.jpg?updatedAt=1693572994477"
      }
      padding="0"
    >
      <Activities>
        <div>
          <motion.h1 {...headingAnimationsProp}>
            Why use our E-library?
          </motion.h1>
          <Paragraph>
            Our collection covers a wide range of topics, from process design
            and optimization to thermodynamics, transport phenomena, and
            materials science. With easy search and download capabilities, you
            will be able to find and access the resources you need in no time.
          </Paragraph>{" "}
          <br />
          <Paragraph>
            We are committed to providing the highest quality resources and
            services to support your learning and research needs, and we are
            constantly adding new resources to our collection.
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
              <motion.a
                href={item.url}
                target="_blank"
                key={item.title}
                variants={chemCardAnimations}
              >
                <RiCheckboxCircleFill color={CARDS.GREEN.textColor} size={32} />
                <p>{item.title}</p>
              </motion.a>
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
  background-position: top center;
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
    padding: 0.4em 0.2em;
    /* position: sticky; */
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
    padding: 0.6em;
    display: flex;
    flex-direction: column;
    gap: 1em;

    a {
      width: 100%;
      background-color: ${({ theme }) => theme.background};
      padding: 1.8em 1.6em;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.4em;
      border-radius: 0.4em;
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

    p {
      font-size: 1.2rem;
    }
  }
`;

export default EngineeringBenefits;
