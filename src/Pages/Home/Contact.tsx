import styled from "styled-components";
import { GridContainer, Container } from "../../styles/reusableComponents";
import { PrimaryButton } from "../../styles/reusableComponents";
import NewsLetterImage from "../../assets/DrawKit Vector Illustration Team Work (6).svg";
import { Mark } from "../../styles/reusableComponents";
import { motion } from "framer-motion";
import { imageBoxAnimations } from "../../constants/framer-animations";
import { textAnimations } from "../../constants/framer-animations";

function Contact() {
  return (
    <Container width="100vw" padding="0">
      <GridContainer width="100%" padding="0" evenColumns={true}>
        <InputWrapper>
          <motion.h1
            variants={textAnimations}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.8, once: true }}
          >
            Turn your dreams into a reality <Mark>- honestly.</Mark>
          </motion.h1>
          <motion.p
            variants={textAnimations}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.8, once: true }}
          >
            Read our guide on how to prepare yourself this worthwhile and
            ever-changing profession.
          </motion.p>

          <PrimaryButton padding=".6em 2em" variant="primary">
            Get in touch
          </PrimaryButton>
        </InputWrapper>
        <TextWrapper>
          <motion.img
            src={NewsLetterImage}
            alt="Contact Image"
            variants={imageBoxAnimations}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        </TextWrapper>
      </GridContainer>
    </Container>
  );
}

const InputWrapper = styled.div`
  padding: 1em 2em;
  display: grid;
  place-content: center;
  h1 {
    font-size: 2.2rem;
    line-height: 1.2;
  }
  p {
    padding-block: 1em;
  }

  @media (min-width: 50em) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const TextWrapper = styled.section`
  img {
    margin-block: auto;
  }
`;

export default Contact;
