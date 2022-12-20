import styled from "styled-components";
import { Container } from "../../styles/reusableComponents";
import { PrimaryButton } from "../../styles/reusableComponents";
import JoinImage from "../../assets/hero.png";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const rotateImage = {
  show: {
    rotate: [0, 360],
    transition: {
      duration: 6,
      ease: "easeOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 0,
    },
  },
  hidden: {
    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

function Join() {
  return (
    <JoinContainer
      height="100vh"
      width="100vw"
      display="grid"
      padding="2em 0em"
    >
      <JoinWrapper>
        <JoinText>
          <h1>Ready to make an impact?</h1>
          <p>
            Join a community of Chemical engineers students to inspire those who
            are considering studying Chemical Engineering.
          </p>
          <PrimaryButton variant="primary" padding=".4em 1.6em">
            Join Us
          </PrimaryButton>
        </JoinText>
        <ImageBox>
          <motion.img
            src={JoinImage}
            alt="Cube illustration"
            variants={rotateImage}
            initial="hidden"
            whileInView="show"
          />
        </ImageBox>
      </JoinWrapper>
    </JoinContainer>
  );
}

const JoinWrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  padding: 0.6em 0.8em;
  gap: 1em;

  h1 {
    font-size: 2.5em;
  }

  p {
    padding-block: 0.8em;
  }

  @media (min-width: 50em) {
    background-color: ${({ theme }) => theme.secondary};
    width: 90%;
    border-radius: 0.8em;
    margin-inline: auto;
    flex-direction: row;
  }
`;

const JoinContainer = styled(Container)`
  place-content: center;
`;

const JoinText = styled.section`
  display: grid;
  place-content: center;
  padding: 1em;

  h1 {
    font-size: 2.2rem;
  }
  @media (min-width: 50em) {
    h1 {
      font-size: 3em;
    }
    width: 50%;
  }
`;

const ImageBox = styled.section`
  display: grid;
  place-content: center;
  @media (min-width: 50em) {
    width: 50%;
  }
`;

export default Join;
